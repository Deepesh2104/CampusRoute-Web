import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentStoreService } from '@campusroute/core-consent';
import { COLLEGE_CATALOGUE, sumTrueCostLakhs, estimateTrueCostBreakdown } from '@campusroute/shared-models';
import {
  LearnerCompareStore,
  LearnerShortlistStore,
  readLearnerProfileDraft,
} from '@campusroute/shared-util';
import { AdmissionsTrackerStore } from '@campusroute/domains-admissions';

@Component({
  selector: 'cr-parent-dashboard-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cr-pa-page cr-p3-parent">
      <div class="cr-pa-page-hero">
        <p class="cr-pa-eyebrow">Parent · MOD-038 demo</p>
        <h1 class="cr-pa-page-title-xl">Family view</h1>
        <p class="cr-pa-lede">
          Read-only snapshot for <strong>{{ childName() }}</strong>. Only scopes enabled in the student's
          <a routerLink="/app/consent" class="cr-pa-text-link">Data &amp; consent</a> centre appear here.
        </p>
      </div>

      <section class="cr-pa-card cr-p3-parent-scope">
        <div class="cr-pa-card__inner">
          <h2 class="cr-pa-section-heading--md">Shared scopes</h2>
          <ul class="cr-p2-check-list">
            <li>Personal profile — {{ consent.consent().personal ? '✓ shared' : 'hidden' }}</li>
            <li>Academic / shortlist — {{ consent.consent().academic ? '✓ shared' : 'hidden' }}</li>
            <li>Budget &amp; true cost — {{ consent.consent().budget ? '✓ shared' : 'hidden' }}</li>
          </ul>
          @if (!consent.consent().budget) {
            <p class="cr-p3-parent-warn">
              Budget scope is off — enable “Budget” in consent so parents can see funding gaps.
            </p>
          }
        </div>
      </section>

      @if (consent.consent().academic) {
        <section class="cr-p3-detail-block">
          <h2 class="cr-pa-section-heading cr-pa-section-heading--md">Colleges in play</h2>
          <ul class="cr-p2-check-list">
            @for (name of collegeNames(); track name) {
              <li>{{ name }}</li>
            }
          </ul>
        </section>

        <section class="cr-p3-detail-block">
          <h2 class="cr-pa-section-heading cr-pa-section-heading--md">Application status</h2>
          <ul class="cr-p2-timeline">
            @for (app of admissions.applications(); track app.id) {
              <li>
                <strong>{{ collegeLabel(app.college_id) }}</strong>
                <span class="cr-pa-muted"> — {{ app.status }} · next: {{ app.next_action }}</span>
              </li>
            }
          </ul>
        </section>
      }

      @if (consent.consent().budget) {
        <section class="cr-p3-detail-block">
          <h2 class="cr-pa-section-heading cr-pa-section-heading--md">Estimated 4-year cost (compare tray)</h2>
          <table class="cr-p2-trend-table">
            <thead>
              <tr><th>College</th><th>Total ₹L</th></tr>
            </thead>
            <tbody>
              @for (row of costRows(); track row.id) {
                <tr>
                  <td>{{ row.name }}</td>
                  <td>₹{{ row.lakhs }}L</td>
                </tr>
              }
            </tbody>
          </table>
        </section>
      }

      <p class="cr-pa-muted">
        Demo parent portal — production uses invite link + server RBAC. Student app:
        <a routerLink="/app" class="cr-pa-text-link">/app</a>
      </p>
    </div>
  `,
})
export class ParentDashboardPageComponent {
  readonly consent = inject(ConsentStoreService);
  private readonly compare = inject(LearnerCompareStore);
  private readonly shortlist = inject(LearnerShortlistStore);
  readonly admissions = inject(AdmissionsTrackerStore);

  readonly childName = computed(() => readLearnerProfileDraft()?.displayName ?? 'Learner');

  readonly collegeNames = computed(() => {
    const ids = [...new Set([...this.compare.ids(), ...this.shortlist.ids()])];
    return ids.map((id) => COLLEGE_CATALOGUE.find((c) => c.id === id)?.short_name ?? id);
  });

  readonly costRows = computed(() => {
    const profile = readLearnerProfileDraft();
    const options = {
      pocketMoneyMonthlyInr: profile?.pocketMoneyMonthlyInr ?? 5_000,
      lifestyleBand: profile?.lifestyleBand ?? 'typical',
    } as const;
    return this.compare.ids().map((id) => {
      const c = COLLEGE_CATALOGUE.find((row) => row.id === id);
      if (!c) return { id, name: id, lakhs: 0 };
      const lakhs = sumTrueCostLakhs(
        estimateTrueCostBreakdown(c.tuition_lakhs, c.hostel_lakhs, options)
      );
      return { id, name: c.short_name, lakhs };
    });
  });

  collegeLabel(collegeId: string): string {
    return COLLEGE_CATALOGUE.find((c) => c.id === collegeId)?.short_name ?? collegeId;
  }
}
