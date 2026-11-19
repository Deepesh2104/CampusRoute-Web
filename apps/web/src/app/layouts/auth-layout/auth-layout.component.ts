import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cr-auth-layout',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="cr-auth-route" role="dialog" aria-modal="true" aria-labelledby="cr-auth-heading">
      <div class="cr-auth-aw">
        <aside class="cr-auth-al">
          <div class="cr-auth-al-inner">
            <a routerLink="/" class="cr-auth-logo">
              <span class="cr-auth-logo__mark" aria-hidden="true">CR</span>
              <span class="cr-auth-logo__name">CampusRoute</span>
            </a>
            <h2 id="cr-auth-heading">
              Your route from <span class="cr-auth-grad">decision to career.</span>
            </h2>
            <ul class="cr-auth-benefits">
              <li>See the true cost before you commit</li>
              <li>You choose what any college sees</li>
              <li>Made for school and college students, and their families</li>
            </ul>
            <p class="cr-auth-fine">Demo: session is stored on this device until identity API is wired.</p>
          </div>
        </aside>
        <div class="cr-auth-ar">
          <a routerLink="/" class="cr-auth-x" aria-label="Close and go back to the home page">✕</a>
          <div class="cr-auth-ar-inner">
            @if (showTabs()) {
              <div class="cr-auth-atb" role="tablist">
                <a
                  routerLink="/auth/login"
                  [queryParamsHandling]="'preserve'"
                  role="tab"
                  [attr.aria-selected]="tab() === 'login'"
                >
                  Log in
                </a>
                <a
                  routerLink="/auth/sign-up"
                  [queryParamsHandling]="'preserve'"
                  role="tab"
                  [attr.aria-selected]="tab() === 'sign-up'"
                >
                  Sign up
                </a>
              </div>
            }
            <router-outlet />
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent implements OnInit {
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly tab = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.readTab()),
      startWith(this.readTab())
    ),
    { initialValue: this.readTab() }
  );

  readonly showTabs = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.readShowTabs()),
      startWith(this.readShowTabs())
    ),
    { initialValue: this.readShowTabs() }
  );

  ngOnInit(): void {
    this.doc.body.classList.add('cr-auth-body');
    this.destroyRef.onDestroy(() => this.doc.body.classList.remove('cr-auth-body'));
  }

  private readTab(): 'login' | 'sign-up' {
    return this.router.url.includes('/auth/sign-up') ? 'sign-up' : 'login';
  }

  private readShowTabs(): boolean {
    const url = this.router.url;
    return url.includes('/auth/login') || url.includes('/auth/sign-up');
  }
}
