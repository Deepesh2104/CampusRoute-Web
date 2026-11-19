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

import { ClientAuditService } from '@campusroute/shared-util';

import { AuthSessionService } from '../application/auth-session.service';



const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



function isValidIdentity(value: string): boolean {

  const v = value.trim();

  const digits = v.replace(/[\s-]/g, '').replace(/^\+?91/, '');

  return EMAIL_RE.test(v) || /^[6-9]\d{9}$/.test(digits);

}



function toSessionEmail(value: string): string {

  const v = value.trim();

  if (EMAIL_RE.test(v)) return v.toLowerCase();

  const digits = v.replace(/[\s-]/g, '').replace(/^\+?91/, '');

  return `${digits}@demo.in`;

}



@Component({

  selector: 'cr-auth-login-page',

  imports: [FormsModule, RouterLink],

  template: `

    @if (mode() === 'password') {

      <div class="cr-auth-panel" data-testid="auth-login-page">

        <form (ngSubmit)="submitPassword()" novalidate>

          <h3>Welcome back</h3>

          <p class="sub">Log in to continue your plan.</p>
          @if (sessionExpired()) {
            <p class="cr-auth-nt" role="alert" data-testid="auth-session-expired-notice">
              Your demo session timed out. Log in again to continue.
            </p>
          }

          <label for="cr-login-id">Email or mobile number</label>

          <input

            id="cr-login-id"

            type="text"

            inputmode="email"

            autocomplete="username"

            placeholder="Email or mobile number"

            data-testid="auth-login-email"

            [(ngModel)]="identifier"

            name="identifier"

          />

          <span class="cr-auth-fe">{{ fieldError('id') }}</span>

          <label for="cr-login-pw">Password</label>

          <div class="cr-auth-pw">

            <input

              id="cr-login-pw"

              [type]="showPassword() ? 'text' : 'password'"

              autocomplete="current-password"

              placeholder="Your password"

              data-testid="auth-login-password"

              [(ngModel)]="password"

              name="password"

            />

            <button type="button" class="cr-auth-eye" (click)="showPassword.set(!showPassword())">

              {{ showPassword() ? 'Hide' : 'Show' }}

            </button>

          </div>

          <span class="cr-auth-fe">{{ fieldError('pw') }}</span>

          <div class="cr-auth-ro">

            <button type="button" (click)="startOtp()">Log in with OTP</button>

            <a routerLink="/auth/forgot-password">Forgot password?</a>

          </div>

          <button type="submit" class="cr-auth-btn" data-testid="auth-login-submit">Log in</button>

          <p class="cr-auth-am2" [class.ok]="statusOk()" role="status">{{ status() }}</p>

          <p class="cr-auth-sw2">

            New here?

            <a routerLink="/auth/sign-up" [queryParams]="intentQuery()">Create an account</a>

          </p>

        </form>

      </div>

    } @else if (mode() === 'otp') {

      <div class="cr-auth-panel" data-testid="auth-login-otp-start">

        <form (ngSubmit)="sendOtp()" novalidate>

          <h3>Log in with OTP</h3>

          <p class="sub">We’ll send a 6-digit demo code to your email or mobile.</p>

          <label for="cr-login-otp-id">Email or mobile number</label>

          <input

            id="cr-login-otp-id"

            type="text"

            inputmode="email"

            autocomplete="username"

            placeholder="Email or mobile number"

            [(ngModel)]="identifier"

            name="otpIdentifier"

          />

          <span class="cr-auth-fe">{{ fieldError('id') }}</span>

          <button type="submit" class="cr-auth-btn" style="margin-top: 1rem">Send code</button>

          <p class="cr-auth-sw2">

            <button type="button" class="cr-auth-link-btn" (click)="mode.set('password')">

              Use password instead

            </button>

          </p>

        </form>

      </div>

    } @else {

      <div class="cr-auth-panel" data-testid="auth-login-otp-verify">

        <form (ngSubmit)="verifyOtp()" novalidate>

          <h3>Verify your account</h3>

          <p class="sub">Enter the 6-digit demo code (any digits work in this preview).</p>

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

                [name]="'otp' + i"

              />

            }

          </div>

          <span class="cr-auth-fe" role="alert">{{ fieldError('otp') }}</span>

          <button type="submit" class="cr-auth-btn" style="margin-top: 16px">Verify</button>

          <p class="cr-auth-sw2">

            <button

              type="button"

              class="cr-auth-link-btn"

              (click)="mode.set('otp')"

            >

              Change email or mobile number

            </button>

          </p>

        </form>

      </div>

    }

  `,

  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class LoginPageComponent {

  private readonly auth = inject(AuthSessionService);

  private readonly audit = inject(ClientAuditService);

  private readonly router = inject(Router);

  private readonly route = inject(ActivatedRoute);



  readonly mode = signal<'password' | 'otp' | 'otp-verify'>('password');

  readonly sessionExpired = signal(
    this.route.snapshot.queryParamMap.get('reason') === 'session-expired'
  );

  readonly showPassword = signal(false);

  readonly otp = signal<string[]>(['', '', '', '', '', '']);

  readonly otpSlots = [0, 1, 2, 3, 4, 5] as const;



  readonly errors = signal<Record<string, string>>({});

  readonly status = signal('');

  readonly statusOk = signal(false);



  private readonly otpInputs = viewChildren<ElementRef<HTMLInputElement>>('otpBox');



  identifier = 'aarav@demo.in';

  password = '';

  intentQuery() {

    const i = this.route.snapshot.queryParamMap.get('intent');

    return i ? { intent: i } : {};

  }



  fieldError(key: string): string {

    return this.errors()[key] ?? '';

  }



  startOtp(): void {

    this.errors.set({});

    this.status.set('');

    this.statusOk.set(false);

    this.mode.set('otp');

  }



  sendOtp(): void {

    this.errors.set({});

    if (!isValidIdentity(this.identifier)) {

      this.errors.set({ id: 'Enter a valid email or 10-digit mobile number.' });

      return;

    }

    this.otp.set(['', '', '', '', '', '']);

    this.mode.set('otp-verify');

    this.audit.log('auth.login.otp-sent', { scope: 'identity' });

  }



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



  verifyOtp(): void {

    this.errors.set({});

    const code = this.otp().join('');

    if (code.length < 6) {

      this.errors.set({ otp: 'Enter all 6 digits.' });

      return;

    }

    this.completeLogin('auth.login.otp.success');

  }



  submitPassword(): void {

    this.errors.set({});

    this.status.set('');

    this.statusOk.set(false);

    let ok = true;

    const next: Record<string, string> = {};

    if (!isValidIdentity(this.identifier)) {

      next['id'] = 'Enter a valid email or 10-digit mobile number.';

      ok = false;

    }

    if (!this.password) {

      next['pw'] = 'Enter your password.';

      ok = false;

    } else if (this.password.length < 6) {

      next['pw'] = 'Password must be at least 6 characters.';

      ok = false;

    }

    if (!ok) {

      this.errors.set(next);

      return;

    }

    this.completeLogin('auth.login.success');

  }



  private completeLogin(auditAction: string): void {

    const email = toSessionEmail(this.identifier);

    const name = email.split('@')[0] ?? 'Learner';

    this.auth.signIn(email, name, { emailVerified: true });

    this.audit.log(auditAction, { scope: 'identity' });

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/app';

    void this.router.navigateByUrl(returnUrl);

  }

}

