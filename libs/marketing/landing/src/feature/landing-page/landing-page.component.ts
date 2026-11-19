import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  NO_ERRORS_SCHEMA,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  HostBinding,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ClientAuditService, DemoWaitlistService } from '@campusroute/shared-util';
import { initLandingPageRuntime } from './landing-page.runtime';

@Component({
  selector: 'cr-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['../../styles/landing.scss', '../../styles/landing-product-theme.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class.cr-product-landing') readonly productLanding = true;

  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly waitlist = inject(DemoWaitlistService);
  private readonly audit = inject(ClientAuditService);
  private teardown?: () => void;
  private authMovedToBody = false;

  ngOnInit(): void {
    document.body.classList.add('cr-legacy-landing');
    document.documentElement.classList.add('cr-legacy-landing');
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.colorScheme = 'light';
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.snapHeroToTop());

    const auth = this.host.nativeElement.querySelector('#auth');
    if (auth && auth.parentElement !== document.body) {
      document.body.appendChild(auth);
      this.authMovedToBody = true;
    }

    queueMicrotask(() => {
      try {
        this.teardown = initLandingPageRuntime();
      } catch (err) {
        console.error('[landing] legacy init failed', err);
      }
      this.syncAuthBodyClass();
      this.wireDemoWaitlistForm();
      this.snapHeroToTop();
    });

    window.addEventListener('hashchange', this.onHashChange);
    this.destroyRef.onDestroy(() => {
      window.removeEventListener('hashchange', this.onHashChange);
    });
    setTimeout(() => this.snapHeroToTop(), 0);
    setTimeout(() => this.snapHeroToTop(), 120);
  }

  /** HTML file opens at y=0; SPA scroll restoration + #top can leave the hero half-scrolled. */
  private snapHeroToTop(): void {
    const hash = location.hash;
    if (hash && hash !== '#top') {
      return;
    }
    const scroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    scroll();
    requestAnimationFrame(scroll);
  }

  private readonly onHashChange = (): void => {
    queueMicrotask(() => this.syncAuthBodyClass());
  };

  /** Demo early-access list (localStorage) — replaces legacy “nothing stored” copy. */
  private wireDemoWaitlistForm(): void {
    const form = document.getElementById('f') as HTMLFormElement | null;
    const em = document.getElementById('em') as HTMLInputElement | null;
    const msg = document.getElementById('msg');
    if (!form || !em || !msg) return;

    form.onsubmit = (e) => {
      e.preventDefault();
      const email = em.value.trim();
      if (!this.waitlist.add(email)) {
        msg.className = 'msg er';
        msg.textContent = 'Enter a valid email, like name@example.com.';
        return;
      }
      this.audit.log('waitlist.join.demo-saved', { scope: 'identity' });
      msg.className = 'msg ok';
      msg.textContent =
        'Thanks — saved on this device’s demo waitlist. We’ll wire the API when M1 backend ships.';
      em.value = '';
    };
  }

  private syncAuthBodyClass(): void {
    const open =
      location.hash === '#login' || location.hash === '#signup';
    document.body.classList.toggle('auth-open', open);
  }

  ngOnDestroy(): void {
    this.teardown?.();
    if (this.authMovedToBody) {
      document.getElementById('auth')?.remove();
    }
    document.body.classList.remove('cr-legacy-landing', 'auth-open');
    document.body.style.overflow = '';
    document.documentElement.classList.remove('cr-legacy-landing');
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.style.colorScheme = '';
  }
}
