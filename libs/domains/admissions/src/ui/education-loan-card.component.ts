import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { EducationLoanMatch } from '../domain/education-loan-demo.data';

@Component({
  selector: 'cr-education-loan-card',
  host: { class: 'cr-p3-apply-card-host cr-p3-loan-card-host' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="cr-p3-loan-card"
      [class.cr-p3-loan-card--featured]="matchTier() === 'high'"
      [attr.data-lender-type]="loan().type"
      [attr.data-testid]="'loan-' + loan().id"
    >
      <header class="cr-p3-loan-card__hero">
        <div class="cr-p3-loan-card__hero-text">
          <span class="cr-p3-loan-card__type">{{ loan().type }}</span>
          <h2 class="cr-p3-loan-card__title">{{ loan().lender }}</h2>
        </div>
        <span class="cr-p3-loan-card__match" [attr.data-tier]="matchTier()">{{ loan().profile_match_pct }}% fit</span>
      </header>
      <div class="cr-p3-loan-card__body">
        <table class="cr-p3-loan-card__specs">
          <tbody>
            <tr><th scope="row">Rate band</th><td>{{ loan().rate_band }}</td></tr>
            <tr><th scope="row">Processing</th><td>{{ loan().processing_fee }}</td></tr>
            <tr><th scope="row">Max amount</th><td>{{ loan().max_amount }}</td></tr>
            <tr><th scope="row">Collateral</th><td>{{ loan().collateral }}</td></tr>
            <tr><th scope="row">Moratorium</th><td>{{ loan().moratorium }}</td></tr>
            <tr><th scope="row">Co-applicant</th><td>{{ loan().co_applicant }}</td></tr>
          </tbody>
        </table>
        <ul class="cr-p3-loan-card__why">
          @for (w of loan().why_match; track w) {
            <li>{{ w }}</li>
          }
        </ul>
        <p class="cr-p3-loan-card__source">{{ loan().source_note }}</p>
      </div>
      <a class="cr-p3-loan-card__cta" [href]="loan().apply_url" target="_blank" rel="noopener noreferrer">
        Check lender / apply
      </a>
    </article>
  `,
})
export class EducationLoanCardComponent {
  readonly loan = input.required<EducationLoanMatch>();

  matchTier(): string {
    const p = this.loan().profile_match_pct;
    if (p >= 75) return 'high';
    if (p >= 55) return 'mid';
    return 'low';
  }
}