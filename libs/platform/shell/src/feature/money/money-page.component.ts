import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import {
  buildStressMeaningLines,
  COLLEGE_CATALOGUE,
  estimateTrueCostBreakdown,
  gapCoverMonthlyInr,
  sumTrueCostLakhs,
  trueCostLines,
  type AffordabilityStressResult,
  type TrueCostOptions,
} from '@campusroute/shared-models';
import { readLearnerProfileDraft } from '@campusroute/shared-util';
import { CampusDemoService } from '../../application/campus-demo.service';
import type { AffordabilityResult, RoiResult } from '../../domain/campus-overview.model';
import { formatLakhs } from '../../domain/format-money';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'cr-money-page',
  imports: [RouterLink, SectionEyebrowComponent],
  templateUrl: './money-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyPageComponent {
  private readonly campus = inject(CampusDemoService);
  private readonly route = inject(ActivatedRoute);

  readonly overview = this.campus.overview;
  readonly colleges = this.campus.catalogueColleges;
  readonly collegeId = signal('vit-vellore');

  readonly income = signal(115_000);
  readonly savings = signal(700_000);
  readonly emi = signal(12_000);
  readonly loanShare = signal(50);

  readonly affordability = signal<AffordabilityResult | null>(null);
  readonly roi = signal<RoiResult | null>(null);

  readonly queryCollege = toSignal(
    this.route.queryParamMap.pipe(map((p) => p.get('college'))),
    { initialValue: this.route.snapshot.queryParamMap.get('college') }
  );

  constructor() {
    const q = this.queryCollege();
    if (q) this.collegeId.set(q);
  }

  readonly selected = computed(
    () => this.campus.collegeById(this.collegeId()) ?? this.campus.collegeById(this.colleges[0]?.id ?? 'vit-vellore')
  );

  readonly costOptions = computed((): TrueCostOptions => {
    const d = readLearnerProfileDraft();
    return {
      pocketMoneyMonthlyInr: d?.pocketMoneyMonthlyInr ?? 5_000,
      lifestyleBand: d?.lifestyleBand ?? 'typical',
    };
  });

  readonly costLines = computed(() => {
    const c = this.selected();
    if (!c) return [];
    const breakdown = estimateTrueCostBreakdown(c.tuition_lakhs, c.hostel_lakhs, this.costOptions());
    return trueCostLines(breakdown, c.source, c.confidence);
  });

  readonly preview = computed(() => {
    const c = this.selected();
    const total = c ? this.campus.totalCostLakhs(c, this.costOptions()) : sumTrueCostLakhs(estimateTrueCostBreakdown(14.8, 3.1));
    const gap = Math.max(0, Math.round((total - this.savings() / 100_000) * 10) / 10);
    const score = Math.min(
      98,
      Math.max(8, Math.round((gap / total) * 65 + (this.emi() / this.income()) * 45))
    );
    return { total, gap, score };
  });

  readonly meaningLines = computed(() => {
    const a = this.affordability();
    const c = this.selected();
    if (!a || !c) return [];
    const catalogue = COLLEGE_CATALOGUE.find((row) => row.id === c.id);
    return buildStressMeaningLines({
      campusName: c.short_name,
      medianLpa: c.median_placement_lpa,
      placementRate: c.placement_rate,
      placementMethodology: catalogue?.placement_methodology ?? 'Verify branch placement notes with the institute.',
      totalCostLakhs: a.total_cost_lakhs,
      fundingGapLakhs: a.funding_gap_lakhs,
      stressLevel: a.stress_level as AffordabilityStressResult['stress_level'],
    });
  });

  gapMonthly = gapCoverMonthlyInr;

  clearAffordability(): void {
    this.affordability.set(null);
    this.roi.set(null);
  }

  formatLakhs = formatLakhs;

  formatInr(value: number): string {
    return `₹${value.toLocaleString('en-IN')}`;
  }

  formatSavingsLakhs(value: number): string {
    return `₹${(value / 100_000).toFixed(1)}L`;
  }

  costRowTestId(label: string): string {
    return `cost-row-${label.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')}`;
  }

  onCollegeChange(id: string): void {
    this.collegeId.set(id);
    this.affordability.set(null);
    this.roi.set(null);
  }

  runAffordability(): void {
    this.affordability.set(
      this.campus.simulateAffordability(
        this.collegeId(),
        this.income(),
        this.savings(),
        this.emi(),
        this.costOptions()
      )
    );
  }

  runRoi(): void {
    this.roi.set(this.campus.simulateRoi(this.collegeId(), this.loanShare()));
  }
}
