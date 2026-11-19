import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COLLEGE_CATALOGUE } from '@campusroute/shared-models';
import { LearnerCompareStore, readLearnerProfileDraft } from '@campusroute/shared-util';
import { EDUCATION_LOAN_DEMO } from '../domain/education-loan-demo.data';
import { ApplyHubNavComponent } from '../ui/apply-hub-nav.component';
import { EducationLoanCardComponent } from '../ui/education-loan-card.component';

@Component({
  selector: 'cr-apply-loans-page',
  imports: [RouterLink, ApplyHubNavComponent, EducationLoanCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cr-pa-page cr-p3-apply-page">
      <cr-apply-hub-nav section="loans" />
      <div class="cr-pa-page-hero cr-p3-apply-hero">
        <p class="cr-pa-eyebrow">Future loan · MOD-011–013 demo</p>
        <h1 class="cr-pa-page-title-xl">Where you can borrow</h1>
        <p class="cr-pa-lede">
          Lender discovery from your profile, compare tray, and finance gap — CampusRoute does not sanction loans; you apply on the lender portal.
        </p>
      </div>

      <aside class="cr-p3-loan-banner" role="note">
        <strong>Not a loan offer.</strong>
        Rates, collateral, and approvals are decided by the bank / NBFC. Use stress test + document vault before you apply.
      </aside>

      @if (gapHint(); as gap) {
        <p class="cr-p3-loan-gap">
          <span class="cr-p3-loan-gap__label">Finance gap (demo)</span>
          {{ gap }}
        </p>
      }

      <div class="cr-p3-loan-tools">
        <a routerLink="/app/finance/simulator" class="cr-p3-loan-tool">
          <span class="cr-p3-loan-tool__title">Family stress test</span>
          <span class="cr-p3-loan-tool__sub">Gap after savings — MOD-013</span>
        </a>
        <a routerLink="/app/finance/roi" class="cr-p3-loan-tool">
          <span class="cr-p3-loan-tool__title">ROI &amp; payback</span>
          <span class="cr-p3-loan-tool__sub">Salary vs EMI — not an APR quote</span>
        </a>
        <a routerLink="/app/money" class="cr-p3-loan-tool">
          <span class="cr-p3-loan-tool__title">Money dashboard</span>
          <span class="cr-p3-loan-tool__sub">True cost for shortlist colleges</span>
        </a>
        <a routerLink="/app/documents" class="cr-p3-loan-tool">
          <span class="cr-p3-loan-tool__title">Documents vault</span>
          <span class="cr-p3-loan-tool__sub">KYC pack for loan apply</span>
        </a>
      </div>

      <div class="cr-p3-loan-grid">
        @for (loan of rankedLoans(); track loan.id) {
          <cr-education-loan-card [loan]="loan" />
        }
      </div>
    </div>
  `,
})
export class ApplyLoansPageComponent {
  private readonly compare = inject(LearnerCompareStore);

  readonly rankedLoans = computed(() => {
    const profile = readLearnerProfileDraft();
    const abroad =
      profile?.goal?.toLowerCase().includes('abroad') ||
      profile?.goal?.toLowerCase().includes('ms') ||
      profile?.goal?.toLowerCase().includes('masters');
    const boost =
      (profile?.lifestyleBand === 'lean' ? 4 : 0) + (this.compare.ids().length >= 2 ? 3 : 0);

    return [...EDUCATION_LOAN_DEMO]
      .filter((l) => abroad || l.id !== 'prodigy')
      .map((l) => ({ ...l, profile_match_pct: Math.min(99, l.profile_match_pct + boost) }))
      .sort((a, b) => b.profile_match_pct - a.profile_match_pct);
  });

  readonly gapHint = computed(() => {
    const picks = this.compare.ids();
    if (!picks.length) {
      return 'Add colleges in Compare to estimate tuition gap vs family savings.';
    }
    const top = COLLEGE_CATALOGUE.find((c) => c.id === picks[0]);
    if (!top) return null;
    const feeInr = top.tuition_lakhs * 100_000;
    return `Illustrative gap for ${top.short_name}: ~₹${Math.round(feeInr * 0.35).toLocaleString('en-IN')} after typical savings (demo — run stress test).`;
  });
}