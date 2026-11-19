import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  viewChildren,
  ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientAuditService, resolvePostAuthUrl } from '@campusroute/shared-util';
import { AuthSessionService } from '../application/auth-session.service';

@Component({
  selector: 'cr-auth-verify-email-page',
  imports: [FormsModule, RouterLink],
  template: `
    @if (!done()) {
      <div class="cr-auth-panel" data-testid="auth-verify-email-page">
        <form (ngSubmit)="confirm()" novalidate>
          <h3>Verify your account</h3>
          <p class="sub">
            Enter the 6-digit code we sent to <strong>{{ auth.session()?.email }}</strong> (demo: any 6 digits).
          </p>
          <div class="cr-auth-otp" role="group" aria-label="6-digit code">
            @for (i of otpSlots; track i) {
              <input
                #otpBox
                type="text"
                inputmode="numeric"
                maxlength="1"
                [attr.aria-label]="'Digit ' + (i + 1)"
                [ngModel]="otp()[i]"
                (ngModelChange)="onOtpDigit(i, $event)"
                (keydown)="onOtpKeydown(i, $event)"
                [name]="'votp' + i"
              />
            }
          </div>
          <span class="cr-auth-fe" role="alert">{{ error() }}</span>
          <button type="submit" class="cr-auth-btn" style="margin-top: 16px" data-testid="auth-verify-submit">
            Verify
          </button>
          <p class="cr-auth-sw2"><a routerLink="/auth/login">Use a different account</a></p>
        </form>
      </div>
    } @else {
      <div class="cr-auth-panel" data-testid="auth-verify-done">
        <div class="cr-auth-tick">✓</div>
        <h3>You are verified</h3>
        <p class="sub">Your learner workspace is ready. Consent settings apply before anything is shared.</p>
        <button type="button" class="cr-auth-btn" style="margin-top: 22px" (click)="enterApp()">Open workspace</button>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyEmailPageComponent {
  readonly auth = inject(AuthSessionService);
  private readonly audit = inject(ClientAuditService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly otp = signal<string[]>(['', '', '', '', '', '']);
  readonly otpSlots = [0, 1, 2, 3, 4, 5] as const;
  readonly error = signal('');
  readonly done = signal(false);

  private readonly otpInputs = viewChildren<ElementRef<HTMLInputElement>>('otpBox');

  onOtpDigit(index: number, value: string): void {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...this.otp()];
    next[index] = digit;
    this.otp.set(next);
    if (digit && index < 5) {
      const inputs = this.otpInputs();
      inputs[index + 1]?.nativeElement.focus();
    }
  }

  onOtpKeydown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.otp()[index] && index > 0) {
      const inputs = this.otpInputs();
      inputs[index - 1]?.nativeElement.focus();
    }
  }

  confirm(): void {
    this.error.set('');
    if (this.otp().join('').length < 6) {
      this.error.set('Enter all 6 digits.');
      return;
    }
    this.auth.markEmailVerified();
    this.audit.log('auth.email-verified', { scope: 'identity' });
    this.done.set(true);
  }

  enterApp(): void {
    const returnUrl = resolvePostAuthUrl(
      this.route.snapshot.queryParamMap.get('returnUrl'),
      this.auth.session()?.intent
    );
    void this.router.navigateByUrl(returnUrl);
  }
}
