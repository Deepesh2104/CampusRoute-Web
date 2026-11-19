import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  buildStressMeaningLines,
  gapCoverMonthlyInr,
  type LifestyleBand,
} from '@campusroute/shared-models';
import { readLearnerProfileDraft } from '@campusroute/shared-util';
import { FinanceFacade } from '../application/finance.facade';
import { FinanceSnapshotStore } from '../application/finance-snapshot.store';

@Component({
  selector: 'cr-finance-simulator-page',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="cr-pa-page">
      <div class="cr-pa-page-hero">
        <p class="cr-pa-eyebrow">Finance · true cost</p>
        <h1 class="cr-pa-page-title-xl">Family stress test</h1>
        <p class="cr-pa-lede">
          Stress is on the <strong>full bill</strong> — tuition, exams, pocket money, fashion &amp; travel — not brochure
          fees alone.
        </p>
      </div>

      <div class="cr-p2-sim-grid" [class.cr-p2-sim-grid--with-result]="!!result()">
        <section class="cr-pa-card">
          <div class="cr-pa-card__inner">
            <label class="cr-p2-label" for="sim-college">College</label>
            <select
              id="sim-college"
              class="cr-p2-input"
              [value]="collegeId()"
              (change)="onCollege($any($event.target).value)"
              data-testid="simulator-college"
            >
              @for (c of finance.colleges; track c.id) {
                <option [value]="c.id">{{ c.short_name }}</option>
              }
            </select>

            <div class="cr-p2-range-field">
              <label class="cr-p2-label">Monthly pocket money (× 48 months)</label>
              <input
                type="range"
                min="2000"
                max="12000"
                step="500"
                [ngModel]="pocketMonthly()"
                (ngModelChange)="onPocket($event)"
              />
              <span>₹{{ pocketMonthly().toLocaleString('en-IN') }}/mo</span>
            </div>

            <label class="cr-p2-label">Lifestyle band</label>
            <select class="cr-p2-input" [ngModel]="lifestyle()" (ngModelChange)="onLifestyle($event)">
              <option value="lean">Lean — essentials only</option>
              <option value="typical">Typical — balance</option>
              <option value="active">Active — events &amp; fashion</option>
            </select>

            <div class="cr-p2-range-field">
              <label class="cr-p2-label">Monthly household income</label>
              <input type="range" min="40000" max="250000" step="5000" [ngModel]="income()" (ngModelChange)="onIncome($event)" />
              <span>₹{{ income().toLocaleString('en-IN') }}</span>
            </div>
            <div class="cr-p2-range-field">
              <label class="cr-p2-label">Savings for education</label>
              <input type="range" min="0" max="3000000" step="50000" [ngModel]="savings()" (ngModelChange)="onSavings($event)" />
              <span>₹{{ (savings() / 100000).toFixed(1) }}L</span>
            </div>
            <div class="cr-p2-range-field">
              <label class="cr-p2-label">Existing EMIs</label>
              <input type="range" min="0" max="40000" step="1000" [ngModel]="emi()" (ngModelChange)="onEmi($event)" />
              <span>₹{{ emi().toLocaleString('en-IN') }}</span>
            </div>

            <details class="cr-p2-cost-details" [open]="showBreakdown()">
              <summary>What’s in the total ({{ breakdown().total }}L)</summary>
              <ul class="cr-p2-cost-mini-list">
                @for (line of breakdown().lines; track line.id) {
                  <li><span>{{ line.label }}</span><strong>₹{{ line.lakhs }}L</strong></li>
                }
              </ul>
            </details>

            <button type="button" class="cr-pa-btn cr-pa-btn--emerald cr-pa-btn--block" (click)="run()" data-testid="simulator-run">
              Run stress test
            </button>
            <button
              type="button"
              class="cr-pa-btn cr-pa-btn--ghost cr-pa-btn--block"
              [disabled]="!result()"
              (click)="save()"
              data-testid="simulator-save"
            >
              Save snapshot
            </button>
            @if (saved()) {
              <p class="cr-p2-ok" role="status">Snapshot saved · check inbox badge in header.</p>
            }
          </div>
        </section>

        @if (result(); as r) {
          <section class="cr-p2-stress-result" data-testid="simulator-stress-card">
            <div class="cr-p2-stress-result__top">
              <div>
                <p class="cr-pa-eyebrow">Stress score</p>
                <p
                  class="cr-p2-stress-result__score"
                  [class.cr-p2-stress-result__score--amber]="r.stress_score > 60"
                  data-testid="simulator-stress-score"
                >
                  {{ r.stress_score }}
                </p>
                <p class="cr-p2-stress-label">{{ r.stress_level }} pressure</p>
              </div>
              <div
                class="cr-p2-stress-gauge"
                role="img"
                [attr.aria-label]="'Stress ' + r.stress_score + ' out of 100'"
              >
                <div class="cr-p2-stress-gauge__track">
                  <div
                    class="cr-p2-stress-gauge__fill"
                    [class.cr-p2-stress-gauge__fill--amber]="r.stress_score > 60"
                    [class.cr-p2-stress-gauge__fill--watch]="r.stress_score > 30 && r.stress_score <= 60"
                    [style.width.%]="r.stress_score"
                  ></div>
                </div>
                <div class="cr-p2-stress-gauge__scale">
                  <span>0</span><span>Low</span><span>Watch</span><span>High</span><span>100</span>
                </div>
              </div>
            </div>
            <dl class="cr-p2-stress-metrics">
              <div>
                <dt>4y cost</dt>
                <dd>₹{{ r.total_cost_lakhs }}L</dd>
              </div>
              <div>
                <dt>Gap</dt>
                <dd>₹{{ r.funding_gap_lakhs }}L</dd>
              </div>
              <div>
                <dt>₹/mo plan</dt>
                <dd>₹{{ gapMonthly(r.funding_gap_lakhs).toLocaleString('en-IN') }}</dd>
              </div>
            </dl>
            <details class="cr-p2-stress-meaning">
              <summary>What this means for you</summary>
              <ul class="cr-p2-notes">
                @for (line of meaningLines(); track line) {
                  <li>{{ line }}</li>
                }
                @for (note of r.notes; track note) {
                  <li class="cr-p2-notes--muted-item">{{ note }}</li>
                }
              </ul>
            </details>
          </section>
        }
      </div>

      <p class="cr-p2-footer-link">
        <a routerLink="/app/profile">Tune pocket money &amp; lifestyle in profile</a>
        ·
        <a routerLink="/app/finance/roi">ROI breakdown →</a>
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimulatorPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly finance = inject(FinanceFacade);
  private readonly snapshots = inject(FinanceSnapshotStore);

  readonly collegeId = signal(this.route.snapshot.queryParamMap.get('college') ?? 'vit-vellore');
  readonly income = signal(115_000);
  readonly savings = signal(700_000);
  readonly emi = signal(12_000);
  readonly pocketMonthly = signal(readLearnerProfileDraft()?.pocketMoneyMonthlyInr ?? 5_000);
  readonly lifestyle = signal<LifestyleBand>(readLearnerProfileDraft()?.lifestyleBand ?? 'typical');
  readonly result = signal<ReturnType<FinanceFacade['affordability']> | null>(null);
  readonly saved = signal(false);
  readonly showBreakdown = signal(true);

  readonly costOptions = computed(() =>
    this.finance.defaultCostOptions(this.pocketMonthly(), this.lifestyle())
  );

  readonly breakdown = computed(() => this.finance.breakdownForCollege(this.collegeId(), this.costOptions()));

  readonly meaningLines = computed(() => {
    const r = this.result();
    if (!r) return [];
    const c = this.finance.collegeById(this.collegeId());
    return buildStressMeaningLines({
      campusName: c.short_name,
      medianLpa: c.median_placement_lpa,
      placementRate: c.placement_rate,
      placementMethodology: c.placement_methodology,
      totalCostLakhs: r.total_cost_lakhs,
      fundingGapLakhs: r.funding_gap_lakhs,
      stressLevel: r.stress_level,
    });
  });

  gapMonthly = gapCoverMonthlyInr;

  onCollege(id: string): void {
    this.collegeId.set(id);
    this.result.set(null);
    this.saved.set(false);
  }

  onPocket(value: number): void {
    this.pocketMonthly.set(value);
    this.result.set(null);
    this.saved.set(false);
  }

  onLifestyle(value: LifestyleBand): void {
    this.lifestyle.set(value);
    this.result.set(null);
    this.saved.set(false);
  }

  onIncome(value: number): void {
    this.income.set(value);
    this.result.set(null);
    this.saved.set(false);
  }

  onSavings(value: number): void {
    this.savings.set(value);
    this.result.set(null);
    this.saved.set(false);
  }

  onEmi(value: number): void {
    this.emi.set(value);
    this.result.set(null);
    this.saved.set(false);
  }

  run(): void {
    this.result.set(
      this.finance.affordability(this.collegeId(), this.income(), this.savings(), this.emi(), this.costOptions())
    );
    this.saved.set(false);
  }

  save(): void {
    const r = this.result();
    if (!r) return;
    const c = this.finance.collegeById(this.collegeId());
    this.snapshots.save({
      collegeId: c.id,
      collegeLabel: c.short_name,
      income: this.income(),
      savings: this.savings(),
      emi: this.emi(),
      loanShare: 50,
      stressScore: r.stress_score,
    });
    this.saved.set(true);
  }
}
