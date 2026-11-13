import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  computed,
  inject,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthSessionService } from '@campusroute/core-auth';
import { ConsentSharePreviewComponent } from '@campusroute/core-consent';
import {
  CampusNavIconComponent,
  CampusNavIconName,
  DEMO_CAMPUS_OVERVIEW,
} from '@campusroute/platform-shell';

type NavItem = {
  path: string;
  label: string;
  icon: CampusNavIconName;
  testId: string;
  exact: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { path: '/app', label: 'Home', icon: 'home', testId: 'nav-home-link', exact: true },
  { path: '/app/explore', label: 'Explore', icon: 'explore', testId: 'nav-explore-link', exact: false },
  { path: '/app/money', label: 'Money & ROI', icon: 'money', testId: 'nav-money-link', exact: false },
  { path: '/app/planner', label: 'Planner', icon: 'planner', testId: 'nav-planner-link', exact: false },
  {
    path: '/app/counsellor',
    label: 'Counsellor',
    icon: 'counsellor',
    testId: 'nav-counsellor-link',
    exact: false,
  },
];

@Component({
  selector: 'cr-learner-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CampusNavIconComponent, ConsentSharePreviewComponent],
  template: `
    <div class="cr-product-app">
      <header class="cr-pa-shell-header">
        <div class="cr-pa-shell-header__inner">
          <a class="cr-pa-brand" routerLink="/app" data-testid="brand-home-link">
            <span class="cr-pa-brand__mark" aria-hidden="true">CR</span>
            <span class="cr-pa-brand__text">
              <span class="cr-pa-brand__name">CampusRoute</span>
              <span class="cr-pa-brand__tag">decisions, grounded</span>
            </span>
          </a>

          <nav class="cr-pa-nav" aria-label="Main navigation">
            @for (item of navItems; track item.path) {
              <a
                class="cr-pa-nav__link"
                [routerLink]="item.path"
                routerLinkActive="is-active"
                [routerLinkActiveOptions]="{ exact: item.exact }"
                [attr.data-testid]="item.testId"
              >
                <cr-campus-nav-icon [name]="item.icon" />
                <span class="cr-pa-nav__label">{{ item.label }}</span>
              </a>
            }
          </nav>

          <div class="cr-pa-shell-actions">
            <a class="cr-pa-consent-link" routerLink="/app/consent" data-testid="consent-settings-link">
              <cr-campus-nav-icon name="shield" />
              Data
            </a>
            <div class="cr-pa-profile" data-testid="profile-badge">
              <span class="cr-pa-profile__avatar">{{ profileInitials() }}</span>
              <span class="cr-pa-profile__name">{{ profileFirstName() }}</span>
            </div>
            <button
              type="button"
              class="cr-pa-logout-btn"
              data-testid="auth-logout-button"
              (click)="logout()"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <main>
        <router-outlet />
      </main>

      <footer class="cr-pa-footer">
        <span data-testid="footer-disclaimer">CampusRoute demo · curated 2025 reference data</span>
        <span class="cr-pa-footer-tag">Built for better decisions ↗</span>
      </footer>
    </div>
    <cr-consent-share-preview />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnerShellComponent implements OnInit, OnDestroy {
  @HostBinding('class.cr-product-app-host') readonly hostClass = true;

  private readonly auth = inject(AuthSessionService);
  private readonly router = inject(Router);

  readonly navItems = NAV_ITEMS;
  readonly learner = DEMO_CAMPUS_OVERVIEW.learner;

  readonly profileFirstName = computed(() => {
    const name = this.auth.displayName() || this.learner.name;
    return name.split(' ')[0] ?? name;
  });

  readonly profileInitials = computed(() => {
    const name = this.auth.displayName() || this.learner.name;
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  });

  ngOnInit(): void {
    document.body.classList.add('cr-product-app');
    document.documentElement.classList.add('cr-product-app');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('cr-product-app');
    document.documentElement.classList.remove('cr-product-app');
  }

  logout(): void {
    this.auth.signOut();
    void this.router.navigate(['/auth/login']);
  }
}
