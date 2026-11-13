import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type CampusNavIconName =
  | 'home'
  | 'explore'
  | 'money'
  | 'planner'
  | 'counsellor'
  | 'shield';

@Component({
  selector: 'cr-campus-nav-icon',
  template: `
    <svg class="cr-pa-nav-svg" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false">
      @switch (name()) {
        @case ('home') {
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        }
        @case ('explore') {
          <circle cx="12" cy="12" r="10" />
          <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z" />
        }
        @case ('money') {
          <path d="M6 3h12" />
          <path d="M6 8h12" />
          <path d="m6 13 8.5 8" />
          <path d="M6 13h3" />
          <path d="M9 13c6.667 0 6.667-10 0-10" />
        }
        @case ('planner') {
          <path d="M11 6h8" />
          <path d="M11 12h8" />
          <path d="M11 18h8" />
          <path d="m3 6 2 2-2 2" />
          <path d="m3 12 2 2-2 2" />
          <path d="m3 18 2 2-2 2" />
        }
        @case ('counsellor') {
          <path d="M7.9 20A9 9 0 1 0 4 16.4L2 22Z" />
        }
        @case ('shield') {
          <path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
          />
          <path d="m9 12 2 2 4-4" />
        }
      }
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampusNavIconComponent {
  readonly name = input.required<CampusNavIconName>();
}
