import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import {
  estimateTrueCostBreakdown,
  gapCoverMonthlyInr,
  runAffordabilityStress,
  sumTrueCostLakhs,
  trendsForCollege,
  dossierForCollege,
  similarColleges,
  buildFamilySummaryText,
  cutoffUnitLabel,
  trueCostLines,
} from '@campusroute/shared-models';
import { readLearnerProfileDraft, readLearnerAdmissionSnapshot } from '@campusroute/shared-util';
import { DiscoverFacade } from '../application/discover.facade';
import { admissionProbClass, estimateAdmissionChance } from '../domain/admission-chance';
import { DEFAULT_HOUSEHOLD as HOUSEHOLD } from '../domain/compare-true-cost';
import { ProvenanceBadgeComponent } from '../ui/provenance-badge.component';
import { PlacementTrendChartComponent } from '../ui/placement-trend-chart.component';
import { CutoffTrendChartComponent } from '../ui/cutoff-trend-chart.component';
import { CutoffDataTableComponent, PlacementDataTableComponent } from '../ui/trend-data-table.component';
import { CollegeBranchAccordionComponent } from '../ui/college-branch-accordion.component';
import { CollegeReviewsPanelComponent } from '../ui/college-reviews-panel.component';
import { TrueCostTableComponent } from '../ui/true-cost-table.component';

import { CollegeReviewStore } from '@campusroute/shared-util';
import { aggregateCollegeReviews, type CollegeReviewAggregate } from '@campusroute/shared-models';

@Component({
  selector: 'cr-discover-college-detail-page',
  imports: [
    RouterLink,
    ProvenanceBadgeComponent,
    PlacementTrendChartComponent,
    CutoffTrendChartComponent,
    CutoffDataTableComponent,
    PlacementDataTableComponent,
    CollegeBranchAccordionComponent,
    CollegeReviewsPanelComponent,
    TrueCostTableComponent,
  ],
  templateUrl: './college-detail-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollegeDetailPageComponent {
  readonly facade = inject(DiscoverFacade);
  private readonly route = inject(ActivatedRoute);
  private readonly reviews = inject(CollegeReviewStore);

  private readonly id = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('collegeId') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('collegeId') ?? '' }
  );

  readonly college = computed(() => this.facade.byId(this.id()));
  readonly trends = computed(() => (this.id() ? trendsForCollege(this.id()) : undefined));
  readonly dossier = computed(() => dossierForCollege(this.id()));
  readonly similar = computed(() => similarColleges(this.id(), 3));

  readonly reviewAggregate = computed((): CollegeReviewAggregate => {
    const id = this.id();
    const branches = this.dossier()?.branch_details.map((b) => b.branch) ?? [];
    return id ? this.reviews.aggregate(id, branches) : aggregateCollegeReviews([]);
  });

  readonly chance = computed(() => {
    const c = this.college();
    return c ? estimateAdmissionChance(c, readLearnerAdmissionSnapshot()) : null;
  });

  readonly costOptions = computed(() => {
    const profile = readLearnerProfileDraft();
    return {
      pocketMoneyMonthlyInr: profile?.pocketMoneyMonthlyInr ?? 5_000,
      lifestyleBand: profile?.lifestyleBand ?? 'typical',
    };
  });

  readonly totalLakhs = computed(() => {
    const c = this.college();
    if (!c) return 0;
    return sumTrueCostLakhs(
      estimateTrueCostBreakdown(c.tuition_lakhs, c.hostel_lakhs, this.costOptions())
    );
  });

  readonly paybackYears = computed(() => {
    const c = this.college();
    if (!c?.median_placement_lpa) return 0;
    return Math.round((this.totalLakhs() / c.median_placement_lpa) * 10) / 10;
  });

  readonly costLines = computed(() => {
    const c = this.college();
    if (!c) return [];
    const breakdown = estimateTrueCostBreakdown(c.tuition_lakhs, c.hostel_lakhs, this.costOptions());
    return trueCostLines(breakdown, c.source, c.confidence);
  });

  readonly affordability = computed(() => {
    const c = this.college();
    if (!c) return null;
    const h = HOUSEHOLD;
    return runAffordabilityStress(
      c.tuition_lakhs,
      c.hostel_lakhs,
      h.monthlyIncome,
      h.savingsInr,
      h.existingEmi,
      this.costOptions()
    );
  });

  readonly counsellorQuery = computed(() => {
    const c = this.college();
    return c ? { college: c.id, q: `Walk me through ${c.short_name} cost, cutoffs and placement.` } : {};
  });

  readonly copiedFamily = signal(false);

  probClass = admissionProbClass;
  cutoffUnit = cutoffUnitLabel;

  gapMonthly(gapLakhs: number): number {
    return gapCoverMonthlyInr(gapLakhs);
  }

  toggleShortlist(): void {
    const id = this.college()?.id;
    if (id) this.facade.toggleShortlist(id);
  }

  ensureComparePick(collegeId: string): void {
    this.facade.comparePicks.add(collegeId);
  }

  toggleComparePick(collegeId: string): void {
    this.facade.toggleComparePick(collegeId);
  }

  isShortlisted(): boolean {
    const id = this.college()?.id;
    return id ? this.facade.isShortlisted(id) : false;
  }

  async copyFamilySummary(): Promise<void> {
    const c = this.college();
    const ch = this.chance();
    const a = this.affordability();
    if (!c || !ch || !a) return;
    const text = buildFamilySummaryText({
      name: c.short_name,
      admissionPct: ch.headline_pct,
      totalLakhs: this.totalLakhs(),
      gapLakhs: a.funding_gap_lakhs,
      gapMonthlyInr: this.gapMonthly(a.funding_gap_lakhs),
      medianLpa: c.median_placement_lpa,
      primaryExam: c.primary_entrance,
    });
    try {
      await navigator.clipboard.writeText(text);
      this.copiedFamily.set(true);
      setTimeout(() => this.copiedFamily.set(false), 2500);
    } catch {
      /* clipboard blocked */
    }
  }
}
