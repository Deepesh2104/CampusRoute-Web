import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'cr-parent-shell',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="cr-product-app cr-p3-parent-shell">
      <header class="cr-pa-shell-header">
        <div class="cr-pa-shell-header__inner">
          <a class="cr-pa-brand" routerLink="/parent/dashboard">
            <span class="cr-pa-brand__mark">CR</span>
            <span class="cr-pa-brand__text">
              <span class="cr-pa-brand__name">CampusRoute</span>
              <span class="cr-pa-brand__tag">parent view · demo</span>
            </span>
          </a>
          <a routerLink="/app" class="cr-pa-text-link">Student app →</a>
        </div>
      </header>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentShellComponent implements OnInit, OnDestroy {
  @HostBinding('class.cr-product-app-host') readonly hostClass = true;

  ngOnInit(): void {
    document.body.classList.add('cr-product-app');
    document.documentElement.classList.add('cr-product-app');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('cr-product-app');
    document.documentElement.classList.remove('cr-product-app');
  }
}
