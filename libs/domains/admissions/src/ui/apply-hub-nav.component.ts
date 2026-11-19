import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type ApplyHubSection =
  | 'admissions'
  | 'planner'
  | 'scholarships'
  | 'documents'
  | 'loans'
  | 'tracker';

@Component({
  selector: 'cr-apply-hub-nav',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="cr-p3-apply-nav" aria-label="Apply sections" data-testid="apply-hub-nav">
      <p class="cr-p3-apply-nav__brand">Apply</p>
      <div class="cr-p3-apply-nav__track" role="tablist">
        <a
          routerLink="/app/admissions"
          routerLinkActive="is-active"
          [routerLinkActiveOptions]="{ paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
          class="cr-p3-apply-nav__link"
          role="tab"
          data-testid="apply-nav-applications"
        >Applications</a>
        <a
          routerLink="/app/planner"
          routerLinkActive="is-active"
          class="cr-p3-apply-nav__link"
          role="tab"
          data-testid="apply-nav-planner"
        >Planner</a>
        <a
          routerLink="/app/scholarships"
          routerLinkActive="is-active"
          class="cr-p3-apply-nav__link"
          role="tab"
          data-testid="apply-nav-scholarships"
        >Scholarships</a>
        <a
          routerLink="/app/documents"
          routerLinkActive="is-active"
          class="cr-p3-apply-nav__link"
          role="tab"
          data-testid="apply-nav-documents"
        >Documents</a>
        <a
          routerLink="/app/loans"
          routerLinkActive="is-active"
          class="cr-p3-apply-nav__link"
          role="tab"
          data-testid="apply-nav-loans"
        >Future loan</a>
      </div>
    </nav>
  `,
})
export class ApplyHubNavComponent {
  /** Optional legacy highlight when routerLinkActive is ambiguous (e.g. tracker detail). */
  readonly section = input<ApplyHubSection>('admissions');
}