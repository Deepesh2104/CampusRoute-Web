import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  NO_ERRORS_SCHEMA,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { initLandingPageRuntime } from './landing-page.runtime';

@Component({
  selector: 'cr-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [
    '../../styles/landing.scss',
    '../../styles/landing-spa-overrides.scss',
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private teardown?: () => void;

  ngOnInit(): void {
    document.body.classList.add('cr-legacy-landing');
    document.documentElement.style.colorScheme = 'dark';
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.snapHeroToTop());

    queueMicrotask(() => {
      try {
        this.teardown = initLandingPageRuntime();
      } catch (err) {
        console.error('[landing] legacy init failed', err);
      }
      this.snapHeroToTop();
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

  ngOnDestroy(): void {
    this.teardown?.();
    document.body.classList.remove('cr-legacy-landing');
    document.documentElement.style.colorScheme = '';
  }
}
