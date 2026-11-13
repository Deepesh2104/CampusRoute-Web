import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CampusDemoService } from '../../application/campus-demo.service';
import type { AffordabilityResult, RoiResult } from '../../domain/campus-overview.model';
import { formatLakhs } from '../../domain/format-money';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'cr-money-page',
  imports: [SectionEyebrowComponent],
  templateUrl: './money-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyPageComponent {
  private readonly campus = inject(CampusDemoService);
  private readonly route = inject(ActivatedRoute);

  readonly overview = this.campus.overview;
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

  readonly selected = computed(() => this.campus.collegeById(this.collegeId()) ?? this.overview.colleges[0]);

  readonly preview = computed(() => {
    const c = this.selected();
    const total = c ? this.campus.totalCostLakhs(c) : 21.7;
    const gap = Math.max(0, Math.round((total - this.savings() / 100_000) * 10) / 10);
    const score = Math.min(
      98,
      Math.max(8, Math.round((gap / total) * 65 + (this.emi() / this.income()) * 45))
    );
    return { total, gap, score };
  });

  readonly displayScore = computed(() => this.affordability()?.stress_score ?? this.preview().score);

  readonly displayGap = computed(() => this.affordability()?.funding_gap_lakhs ?? this.preview().gap);

  readonly displayMonthlyPressure = computed(
    () => this.affordability()?.monthly_burden_lakhs ?? this.preview().gap / 4
  );

  readonly displayStressLabel = computed(() => {
    const a = this.affordability();
    if (a) return a.stress_level;
    const s = this.preview().score;
    if (s > 60) return 'High';
    if (s > 30) return 'Watch';
    return 'Low';
  });

  readonly isHighStress = computed(() => this.displayScore() > 60);

  readonly stressNote = computed(
    () =>
      this.affordability()?.notes[0] ??
      'Run the check to see personalized sensitivity notes based on this family profile.'
  );

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
      this.campus.simulateAffordability(this.collegeId(), this.income(), this.savings(), this.emi())
    );
  }

  runRoi(): void {
    this.roi.set(this.campus.simulateRoi(this.collegeId(), this.loanShare()));
  }
}
