import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import {
  COLLEGE_CATALOGUE,
  formatReviewStars,
  totalCostLakhs,
  trendsForCollege,
} from '@campusroute/shared-models';
import { CollegeReviewStore, readLearnerProfileDraft } from '@campusroute/shared-util';
import { AdmissionsTrackerStore } from '../application/admissions-tracker.store';
import {
  APPLICATION_STATUS_LABEL,
  STATUS_FLOW,
  type ApplicationStatus,
} from '../domain/admission-application.model';
import { admissionProbClass, estimateAdmissionChance } from '../domain/admission-chance';
import { ApplyHubNavComponent } from '../ui/apply-hub-nav.component';
import { AdmissionsMiniSparklineComponent } from '../ui/mini-placement-sparkline.component';
import { AdmissionsProvenanceBadgeComponent } from '../ui/provenance-badge.component';

@Component({
  selector: 'cr-application-detail-page',
  imports: [RouterLink, ApplyHubNavComponent, AdmissionsMiniSparklineComponent, AdmissionsProvenanceBadgeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (app(); as a) {
      @let college = collegeRow();
      <div class="cr-pa-page cr-p3-apply-page cr-p3-tracker-detail">
        <cr-apply-hub-nav section="tracker" />
        <p class="cr-p3-apply-context">
          <a routerLink="/app/admissions" class="cr-pa-text-link">← All applications</a>
        </p>

        @if (college; as c) {
          @let chance = admissionChance(c);
          @let trend = placementTrend(c.id);

          <div class="cr-p3-tracker-detail__hero cr-p2-college-card-v2" [attr.data-tier]="c.institute_tier">
            <header class="cr-p2-college-card-v2__head">
              <div>
                <h1 class="cr-p2-college-card-v2__title">{{ c.short_name }}</h1>
                <p class="cr-p2-college-card-v2__meta">{{ c.city }} · {{ a.entrance_exam }}</p>
              </div>
              <span class="cr-p2-tier-pill">{{ c.institute_tier }}</span>
            </header>

            <p class="cr-p2-college-card-v2__sub">{{ c.ownership }} · NIRF #{{ c.nirf_rank }} · {{ c.accreditation }}</p>

            <p class="cr-p3-tracker-card-v2__status">
              <span class="cr-p3-tracker-card-v2__status-label">Application status</span>
              {{ statusLabel[a.status] }}
            </p>

            <div class="cr-p3-status-track" role="list" aria-label="Application stages">
              @for (s of statusFlow; track s) {
                <span
                  role="listitem"
                  class="cr-p3-status-track__step"
                  [class.is-current]="a.status === s"
                  [class.is-done]="statusIndex(a.status) > statusIndex(s)"
                >
                  {{ statusLabel[s] }}
                </span>
              }
            </div>

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

            <div class="cr-p3-tracker-detail__alert">
              <div>
                <span class="cr-p3-tracker-detail__alert-label">Next action</span>
                <p>{{ a.next_action }}</p>
              </div>
              <div>
                <span class="cr-p3-tracker-detail__alert-label">Critical deadline</span>
                <p>{{ a.deadline }}</p>
              </div>
            </div>

            <div class="cr-p2-college-card-v2__stats">
              <div>
                <span>Full cost (4y)</span>
                <strong>₹{{ totalCost(c) }}L</strong>
              </div>
              <div>
                <span>Tuition + hostel / yr</span>
                <strong>₹{{ c.tuition_lakhs + c.hostel_lakhs }}L</strong>
              </div>
              <div>
                <span>Checklist</span>
                <strong>{{ checklistDone() }}/{{ a.checklist.length }}</strong>
              </div>
              <div>
                <span>Fees paid</span>
                <strong>₹{{ a.fees_paid_inr.toLocaleString('en-IN') }}</strong>
              </div>
            </div>

            <div class="cr-p3-tracker-detail__progress">
              <span>Document readiness</span>
              <div class="cr-p3-tracker-card__progress">
                <div class="cr-p3-tracker-card__progress-fill" [style.width.%]="checklistPct()"></div>
              </div>
              <strong>{{ checklistPct() }}%</strong>
            </div>

            @if (reviewLine(c.id); as reviews) {
              <p class="cr-p2-college-card-v2__reviews">{{ reviews }}</p>
            }

            <footer class="cr-p2-college-card-v2__foot">
              <cr-admissions-provenance [source]="c.source" [confidence]="c.confidence" />
              <a class="cr-pa-btn cr-pa-btn--ghost" [routerLink]="['/app/discover/colleges', c.id]">View dossier</a>
              <a class="cr-pa-btn cr-pa-btn--ghost" routerLink="/app/discover/compare">Compare tray</a>
            </footer>
          </div>
        } @else {
          <h1 class="cr-pa-page-title-xl">{{ a.college_id }}</h1>
          <p class="cr-pa-lede">{{ a.entrance_exam }}</p>
        }

        <nav class="cr-p3-tracker-quicklinks" aria-label="Related apply tools">
          <a routerLink="/app/documents">Documents vault</a>
          <a routerLink="/app/scholarships">Scholarships</a>
          <a routerLink="/app/loans">Future loan</a>
          <a routerLink="/app/finance/simulator">Stress test</a>
          <a routerLink="/app/money">Money &amp; ROI</a>
        </nav>

        <div class="cr-p3-tracker-detail__grid">
          <section class="cr-p3-tracker-panel">
            <h2 class="cr-p3-tracker-panel__title">Admission route</h2>
            @if (college; as c) {
              <ul class="cr-p3-tracker-tags">
                @for (route of c.admission_routes; track route) {
                  <li>{{ route }}</li>
                }
              </ul>
              <dl class="cr-p3-tracker-facts">
                <div>
                  <dt>Primary entrance</dt>
                  <dd>{{ c.primary_entrance }}</dd>
                </div>
                <div>
                  <dt>Board PCM (min)</dt>
                  <dd>≥ {{ c.pcm_min_pct }}% · your profile in <a routerLink="/app/profile" class="cr-pa-text-link">Profile</a></dd>
                </div>
                @if (c.jee_main_percentile_min > 0) {
                  <div>
                    <dt>JEE Main band (demo)</dt>
                    <dd>~{{ c.jee_main_percentile_min }}+ percentile typical</dd>
                  </div>
                }
                @if (c.jee_advanced_rank_max) {
                  <div>
                    <dt>JEE Advanced (CSE band)</dt>
                    <dd>~{{ c.jee_advanced_rank_max.toLocaleString('en-IN') }} rank (illustrative)</dd>
                  </div>
                }
                <div>
                  <dt>Programs (spotlight)</dt>
                  <dd>{{ programsLine(college) }}</dd>
                </div>
                <div>
                  <dt>Placement rate</dt>
                  <dd>{{ c.placement_rate }}% · {{ c.placement_methodology }}</dd>
                </div>
              </dl>
            }
          </section>

          <section class="cr-p3-tracker-panel">
            <h2 class="cr-p3-tracker-panel__title">Eligibility notes</h2>
            @if (college; as c) {
              @let chance = admissionChance(c);
              <p class="cr-p3-tracker-note">{{ chance.exam_summary }}</p>
              <p class="cr-p3-tracker-note">{{ chance.fallback_summary }}</p>
              @if (c.management_quota_available) {
                <p class="cr-p3-tracker-warn">MQ / higher-fee path: {{ c.management_quota_note }}</p>
              }
            }
          </section>

          <section class="cr-p3-tracker-panel">
            <h2 class="cr-p3-tracker-panel__title">Application status</h2>
            <label class="cr-p3-tracker-field" for="application-status-select">
              <span class="cr-p3-tracker-field__label">Update stage (demo)</span>
              <select
                id="application-status-select"
                class="cr-p2-input cr-p3-tracker-field__control"
                [value]="a.status"
                (change)="onStatus($any($event.target).value)"
                data-testid="application-status-select"
              >
                @for (s of statusFlow; track s) {
                  <option [value]="s">{{ statusLabel[s] }}</option>
                }
              </select>
            </label>
            @if (a.acknowledgement_ref) {
              <p class="cr-pa-muted">Application ref: <strong>{{ a.acknowledgement_ref }}</strong></p>
            }
            <button type="button" class="cr-pa-btn cr-pa-btn--ghost" (click)="recordDemoFee(a.id)">
              Record demo application fee (₹2,000)
            </button>
          </section>

          <section class="cr-p3-tracker-panel">
            <h2 class="cr-p3-tracker-panel__title">Required documents</h2>
            <p class="cr-pa-muted cr-p3-tracker-panel__hint">
              {{ checklistDone() }}/{{ a.checklist.length }} complete — tick when uploaded to vault.
            </p>
            <ul class="cr-p3-tracker-checklist">
              @for (item of a.checklist; track item.id) {
                <li [class.is-done]="item.done">
                  <label class="cr-p3-check-row">
                    <input type="checkbox" [checked]="item.done" (change)="store.toggleChecklist(a.id, item.id)" />
                    <span>{{ item.label }}</span>
                  </label>
                </li>
              }
            </ul>
            <a routerLink="/app/documents" class="cr-pa-text-link">Open document vault →</a>
          </section>

          <section class="cr-p3-tracker-panel cr-p3-tracker-panel--wide">
            <h2 class="cr-p3-tracker-panel__title">Application timeline</h2>
            <ol class="cr-p3-application-timeline">
              @for (ev of a.timeline; track ev.title; let i = $index) {
                <li
                  class="cr-p3-application-timeline__step"
                  [class.is-current]="i === currentTimelineIndex(a.status)"
                  [class.is-done]="i < currentTimelineIndex(a.status)"
                >
                  <div class="cr-p3-application-timeline__marker" aria-hidden="true"></div>
                  <div class="cr-p3-application-timeline__card">
                    <span class="cr-p3-application-timeline__when">{{ ev.when }}</span>
                    <strong>{{ ev.title }}</strong>
                    <p>{{ ev.detail }}</p>
                  </div>
                </li>
              }
            </ol>
          </section>
        </div>
      </div>
    } @else {
      <div class="cr-pa-page">
        <cr-apply-hub-nav section="tracker" />
        <p>Application not found.</p>
        <a routerLink="/app/admissions" class="cr-pa-btn cr-pa-btn--emerald">Back to applications</a>
      </div>
    }
  `,
})
export class ApplicationDetailPageComponent {
  readonly store = inject(AdmissionsTrackerStore);
  private readonly route = inject(ActivatedRoute);
  private readonly reviewStore = inject(CollegeReviewStore);

  readonly appId = toSignal(this.route.paramMap.pipe(map((p) => p.get('applicationId') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('applicationId') ?? '',
  });

  readonly app = computed(() => this.store.applicationFor(this.appId()));
  readonly collegeRow = computed(() => COLLEGE_CATALOGUE.find((c) => c.id === this.app()?.college_id));

  readonly statusFlow = STATUS_FLOW;
  readonly statusLabel = APPLICATION_STATUS_LABEL;
  readonly probClass = admissionProbClass;

  readonly checklistDone = computed(() => this.app()?.checklist.filter((c) => c.done).length ?? 0);

  readonly checklistPct = computed(() => {
    const a = this.app();
    if (!a?.checklist.length) return 0;
    return Math.round((this.checklistDone() / a.checklist.length) * 100);
  });

  admissionChance(college: (typeof COLLEGE_CATALOGUE)[number]) {
    return estimateAdmissionChance(college);
  }

  totalCost(college: (typeof COLLEGE_CATALOGUE)[number]): number {
    const d = readLearnerProfileDraft();
    return totalCostLakhs(college.tuition_lakhs, college.hostel_lakhs, {
      pocketMoneyMonthlyInr: d?.pocketMoneyMonthlyInr,
      lifestyleBand: d?.lifestyleBand,
    });
  }

  placementTrend(collegeId: string) {
    return trendsForCollege(collegeId)?.placement;
  }

  reviewLine(collegeId: string): string | null {
    const agg = this.reviewStore.summaryFor(collegeId);
    if (agg.total_reviews === 0) return null;
    return `★ ${formatReviewStars(agg.averages?.overall)} · ${agg.total_reviews} student reviews`;
  }

  programsLine(college: (typeof COLLEGE_CATALOGUE)[number] | undefined): string {
    if (!college) return '';
    return college.programs.slice(0, 4).join(' · ');
  }

  statusIndex(status: ApplicationStatus): number {
    return STATUS_FLOW.indexOf(status);
  }

  currentTimelineIndex(status: ApplicationStatus): number {
    const order = STATUS_FLOW.indexOf(status);
    return Math.max(0, Math.min(order, STATUS_FLOW.length - 1));
  }

  onStatus(value: string): void {
    const id = this.app()?.id;
    if (!id) return;
    this.store.setStatus(id, value as ApplicationStatus);
  }

  recordDemoFee(appId: string): void {
    this.store.recordFee(appId, 2_000, `ACK-DEMO-${Date.now().toString(36).toUpperCase()}`);
  }
}