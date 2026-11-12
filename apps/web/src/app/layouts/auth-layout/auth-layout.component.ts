import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'cr-auth-layout',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrap">
      <a routerLink="/" class="back">← Back</a>
      <router-outlet />
    </div>
  `,
  styles: `
    .wrap { max-width: 28rem; margin: 3rem auto; padding: 0 1rem; }
    .back { color: var(--cr-copy); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {}
