import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { formatReviewStars, totalCostLakhs, trendsForCollege, type CollegeCatalogueRow } from '@campusroute/shared-models';
import { CollegeReviewStore, readLearnerProfileDraft } from '@campusroute/shared-util';
import type { AdmissionApplication } from '../domain/admission-application.model';
import { APPLICATION_STATUS_LABEL } from '../domain/admission-application.model';
import { admissionProbClass, estimateAdmissionChance } from '../domain/admission-chance';
import { AdmissionsMiniSparklineComponent } from './mini-placement-sparkline.component';
import { AdmissionsProvenanceBadgeComponent } from './provenance-badge.component';

@Component({
  selector: 'cr-application-tracker-card',
  host: { class: 'cr-p3-apply-card-host' },
  imports: [RouterLink, AdmissionsMiniSparklineComponent, AdmissionsProvenanceBadgeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (college(); as c) {
      @let chance = admissionChance(c);
      @let trend = placementTrend();
      <article
        class="cr-p2-college-card-v2 cr-p3-tracker-card-v2"
        [attr.data-tier]="c.institute_tier"
        [attr.data-testid]="'tracker-card-' + app().college_id"
      >
        <header class="cr-p2-college-card-v2__head">
          <div>
            <h2 class="cr-p2-college-card-v2__title">{{ c.short_name }}</h2>
            <p class="cr-p2-college-card-v2__meta">{{ c.city }}</p>
          </div>
          <span class="cr-p2-tier-pill">{{ c.institute_tier }}</span>
        </header>

        <p class="cr-p2-college-card-v2__sub">{{ c.ownership }} · NIRF #{{ c.nirf_rank }}</p>

        <p class="cr-p3-tracker-card-v2__status">
          <span class="cr-p3-tracker-card-v2__status-label">Application</span>
          {{ statusLabel[app().status] }}
        </p>

        @if (trend) {
          <div class="cr-p2-college-card-v2__spark">
            <span class="cr-pa-muted">5y median trend</span>
            <cr-admissions-mini-sparkline [series]="trend" />
            <strong>{{ trend.at(-1)?.median_lpa }} LPA</strong>
          </div>
        }

        <div class="cr-p2-admission-teaser">
          <div class="cr-p2-admission-teaser__left">
            <span class="cr-pa-muted">Admission chance</span>
            <strong class="cr-p2-admission-prob" [class]="probClass(chance.headline_pct)">
              {{ chance.headline_pct }}%
            </strong>
          </div>
          <span class="cr-p2-admission-status" [class]="probClass(chance.headline_pct)">{{ chance.status_label }}</span>
        </div>
        <p class="cr-p2-college-card-v2__req">{{ chance.requirements_line }}</p>

        <div class="cr-p2-college-card-v2__stats">
          <div>
            <span>Full cost (4y)</span>
            <strong>₹{{ totalCost(c) }}L</strong>
          </div>
          <div>
            <span>Checklist</span>
            <strong>{{ doneCount() }}/{{ app().checklist.length }}</strong>
          </div>
        </div>

        <p class="cr-p3-tracker-card-v2__deadline">
          <span>Next</span> {{ app().next_action }} · <span>Deadline</span> {{ app().deadline }}
        </p>

        @if (reviewLine(); as reviews) {
          <p class="cr-p2-college-card-v2__reviews">{{ reviews }}</p>
        }

        <footer class="cr-p2-college-card-v2__foot">
          <cr-admissions-provenance [source]="c.source" [confidence]="c.confidence" />
          <a
            class="cr-pa-btn cr-pa-btn--emerald"
            [routerLink]="['/app/admissions', app().id]"
            [attr.data-testid]="'open-tracker-' + app().college_id"
          >
            Open tracker
          </a>
          <a
            class="cr-pa-btn cr-pa-btn--ghost cr-p2-college-card-v2__compare"
            [routerLink]="['/app/discover/colleges', c.id]"
          >
            View college
          </a>
        </footer>
      </article>
    } @else {
      <article class="cr-p2-college-card-v2 cr-p3-tracker-card-v2" [attr.data-testid]="'tracker-card-' + app().college_id">
        <h2 class="cr-p2-college-card-v2__title">{{ app().college_id }}</h2>
        <footer class="cr-p2-college-card-v2__foot">
          <a [routerLink]="['/app/admissions', app().id]" class="cr-pa-btn cr-pa-btn--emerald">Open tracker</a>
        </footer>
      </article>
    }
  `,
})
export class ApplicationTrackerCardComponent {
  private readonly reviewStore = inject(CollegeReviewStore);

  readonly app = input.required<AdmissionApplication>();
  readonly college = input<CollegeCatalogueRow | undefined>();

  readonly statusLabel = APPLICATION_STATUS_LABEL;
  readonly probClass = admissionProbClass;

  readonly doneCount = computed(() => this.app().checklist.filter((c) => c.done).length);

  readonly placementTrend = computed(() => {
    const id = this.college()?.id;
    return id ? trendsForCollege(id)?.placement : undefined;
  });

  readonly reviewLine = computed(() => {
    const id = this.college()?.id;
    if (!id) return null;
    const agg = this.reviewStore.summaryFor(id);
    if (agg.total_reviews === 0) return null;
    return `★ ${formatReviewStars(agg.averages?.overall)} · ${agg.total_reviews} student reviews`;
  });

  admissionChance(college: CollegeCatalogueRow) {
    return estimateAdmissionChance(college);
  }

  totalCost(college: CollegeCatalogueRow): number {
    const d = readLearnerProfileDraft();
    return totalCostLakhs(college.tuition_lakhs, college.hostel_lakhs, {
      pocketMoneyMonthlyInr: d?.pocketMoneyMonthlyInr,
      lifestyleBand: d?.lifestyleBand,
    });
  }
}