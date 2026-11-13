import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClientAuditService } from '@campusroute/shared-util';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'cr-auth-forgot-password-page',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="cr-auth-panel" data-testid="auth-forgot-password-page">
      @if (!sent()) {
        <form (ngSubmit)="submit()" novalidate>
          <h3>Reset password</h3>
          <p class="sub">Enter your email and we’ll send a reset link when the identity API is live.</p>
          <label for="cr-fp-email">Email</label>
          <input
            id="cr-fp-email"
            type="email"
            autocomplete="email"
            placeholder="you&#64;example.com"
            data-testid="auth-forgot-email"
            [(ngModel)]="email"
            name="email"
          />
          <span class="cr-auth-fe">{{ error() }}</span>
          <button type="submit" class="cr-auth-btn" style="margin-top: 1rem" data-testid="auth-forgot-submit">
            Send reset link
          </button>
        </form>
      } @else {
        <div data-testid="auth-forgot-success">
          <h3>Check your inbox</h3>
          <p class="sub">
            If that email exists, a reset link is on its way. (Demo — no mail sent yet.)
          </p>
        </div>
      }
      <p class="cr-auth-sw2"><a routerLink="/auth/login">Back to log in</a></p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordPageComponent {
  private readonly audit = inject(ClientAuditService);

  email = '';
  readonly error = signal('');
  readonly sent = signal(false);

  submit(): void {
    this.error.set('');
    if (!EMAIL_RE.test(this.email.trim())) {
      this.error.set('Enter a valid email address.');
      return;
    }
    this.audit.log('auth.forgot-password.requested', { scope: 'identity' });
    this.sent.set(true);
  }
}
