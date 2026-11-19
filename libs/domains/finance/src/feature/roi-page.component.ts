import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FinanceFacade } from '../application/finance.facade';

@Component({
  selector: 'cr-finance-roi-page',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="cr-pa-page">
      <div class="cr-pa-page-hero">
        <p class="cr-pa-eyebrow">Finance · ROI</p>
        <h1 class="cr-pa-page-title-xl">Does the math work?</h1>
        <p class="cr-pa-lede">Compare median placement bands against total true cost — illustrative demo math only.</p>
      </div>

      <div class="cr-p2-sim-grid">
        <section class="cr-pa-card">
          <div class="cr-pa-card__inner">
            <label class="cr-p2-label" for="roi-college">College</label>
            <select
              id="roi-college"
              class="cr-p2-input"
              [value]="collegeId()"
              (change)="collegeId.set($any($event.target).value)"
            >
              @for (c of finance.colleges; track c.id) {
                <option [value]="c.id">{{ c.short_name }}</option>
              }
            </select>
            <div class="cr-p2-range-field">
              <label class="cr-p2-label">Loan share of cost (%)</label>
              <input
                type="range"
                min="0"
                max="90"
                step="5"
                [ngModel]="loanShare()"
                (ngModelChange)="loanShare.set($event)"
              />
              <span>{{ loanShare() }}%</span>
            </div>
            <button type="button" class="cr-pa-btn cr-pa-btn--emerald cr-pa-btn--block" (click)="run()">Calculate ROI</button>
          </div>
        </section>

        <section class="cr-pa-card">
          @if (result(); as r) {
            <div class="cr-pa-card__inner">
              <p class="cr-p2-score">{{ r.roi_multiple }}×</p>
              <p class="cr-pa-muted">{{ r.headline }}</p>
              <p>Estimated payback: <strong>{{ r.payback_years }} years</strong> (median placement proxy)</p>
            </div>
          } @else {
            <div class="cr-pa-card__inner cr-pa-muted">Adjust loan share and run ROI.</div>
          }
        </section>
      </div>
      <p class="cr-p2-footer-link"><a routerLink="/app/finance/simulator">← Back to stress test</a></p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoiPageComponent {
  readonly finance = inject(FinanceFacade);
  readonly collegeId = signal('vit-vellore');
  readonly loanShare = signal(50);
  readonly result = signal<ReturnType<FinanceFacade['roi']> | null>(null);

  run(): void {
    this.result.set(this.finance.roi(this.collegeId(), this.loanShare()));
  }
}
