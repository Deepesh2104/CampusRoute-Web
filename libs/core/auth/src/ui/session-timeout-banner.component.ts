import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthSessionWatchdogService } from '../application/auth-session-watchdog.service';

@Component({
  selector: 'cr-auth-session-timeout-banner',
  template: `
    @if (watchdog.showWarning()) {
      <div class="cr-auth-session-banner" role="alert" data-testid="auth-session-timeout-banner">
        <p>
          Session expires in <strong>{{ watchdog.secondsLeft() }}s</strong>. Stay signed in to keep working.
        </p>
        <button type="button" data-testid="auth-session-stay-button" (click)="watchdog.stayLoggedIn()">
          Stay signed in
        </button>
      </div>
    }
  `,
  styles: `
    .cr-auth-session-banner {
      position: fixed;
      left: 50%;
      bottom: 1.25rem;
      z-index: 60;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.75rem 1rem;
      width: min(28rem, calc(100% - 2rem));
      margin: 0;
      padding: 0.85rem 1rem;
      border-radius: 0.875rem;
      border: 1px solid #fde68a;
      background: #fffbeb;
      color: #92400e;
      font-size: 0.875rem;
      transform: translateX(-50%);
      box-shadow: 0 12px 40px -16px rgb(15 23 42 / 0.25);
    }

    .cr-auth-session-banner button {
      padding: 0.45rem 0.9rem;
      border: 0;
      border-radius: 9999px;
      background: #047857;
      color: #fff;
      font-size: 0.8125rem;
      font-weight: 600;
      cursor: pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionTimeoutBannerComponent {
  readonly watchdog = inject(AuthSessionWatchdogService);
}

