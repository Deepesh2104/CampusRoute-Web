import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
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
  selector: 'cr-auth-sign-up-page',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="cr-auth-panel" data-testid="auth-sign-up-page">
      <form (ngSubmit)="submit()" novalidate>
        <h3>Create your account</h3>
        <p class="sub">
          @if (intent() === 'simulator') {
            Sign up to save your cost simulator profile.
          } @else {
            It takes about a minute.
          }
        </p>
        <label for="cr-su-name">Full name</label>
        <input
          id="cr-su-name"
          type="text"
          autocomplete="name"
          data-testid="auth-sign-up-name"
          [(ngModel)]="name"
          name="name"
        />
        <span class="cr-auth-fe">{{ fieldError('name') }}</span>

        <label for="cr-su-id">Email or mobile number</label>
        <input
          id="cr-su-id"
          type="text"
          inputmode="email"
          autocomplete="username"
          placeholder="Email or mobile number"
          data-testid="auth-sign-up-email"
          [(ngModel)]="identifier"
          name="identifier"
        />
        <span class="cr-auth-fe">{{ fieldError('id') }}</span>

        <label for="cr-su-role">I am a</label>
        <select id="cr-su-role" name="role" [(ngModel)]="role">
          <option value="School student">School student</option>
          <option value="College student">College student</option>
          <option value="Parent or guardian">Parent or guardian</option>
          <option value="Teacher or counsellor">Teacher or counsellor</option>
        </select>
        @if (showUnder18Note()) {
          <p class="cr-auth-nt">If you are under 18, a parent or guardian will need to approve your account.</p>
        }

        <label for="cr-su-pw">Password</label>
        <div class="cr-auth-pw">
          <input
            id="cr-su-pw"
            [type]="showPassword() ? 'text' : 'password'"
            autocomplete="new-password"
            placeholder="At least 8 characters"
            data-testid="auth-sign-up-password"
            [(ngModel)]="password"
            name="password"
          />
          <button type="button" class="cr-auth-eye" (click)="showPassword.set(!showPassword())">
            {{ showPassword() ? 'Hide' : 'Show' }}
          </button>
        </div>
        <span class="cr-auth-fe">{{ fieldError('pw') }}</span>

        <label class="cr-auth-ck2">
          <input type="checkbox" [(ngModel)]="agreed" name="agreed" data-testid="auth-sign-up-terms" />
          I agree to the terms and privacy notice. My data is shared only with my consent.
        </label>
        <span class="cr-auth-fe">{{ fieldError('terms') }}</span>

        <button type="submit" class="cr-auth-btn" style="margin-top: 20px" data-testid="auth-sign-up-submit">
          Create account
        </button>
        <p class="cr-auth-am2" role="status">{{ status() }}</p>
        <p class="cr-auth-sw2">
          Already have an account? <a routerLink="/auth/login">Log in</a>
        </p>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent {
  private readonly auth = inject(AuthSessionService);
  private readonly audit = inject(ClientAuditService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly intent = signal(this.route.snapshot.queryParamMap.get('intent'));
  readonly showPassword = signal(false);
  readonly errors = signal<Record<string, string>>({});
  readonly status = signal('');

  name = 'Aarav Sharma';
  identifier = '';
  password = '';
  role = 'College student';
  agreed = false;

  readonly showUnder18Note = computed(() => this.role === 'School student');

  fieldError(key: string): string {
    return this.errors()[key] ?? '';
  }

  submit(): void {
    this.errors.set({});
    this.status.set('');
    const next: Record<string, string> = {};
    if (this.name.trim().length < 2) {
      next['name'] = 'Enter your full name.';
    }
    if (!isValidIdentity(this.identifier)) {
      next['id'] = 'Enter a valid email or 10-digit mobile number.';
    }
    if (this.password.length < 8) {
      next['pw'] = 'Password must be at least 8 characters.';
    }
    if (!this.agreed) {
      next['terms'] = 'Accept the terms to continue.';
    }
    if (Object.keys(next).length) {
      this.errors.set(next);
      return;
    }

    const email = toSessionEmail(this.identifier);
    this.auth.signIn(email, this.name.trim(), {
      emailVerified: false,
      intent: this.intent() ?? undefined,
    });
    this.audit.log('auth.sign-up.success', { scope: 'identity' });
    void this.router.navigate(['/auth/verify-email'], {
      queryParams: {
        returnUrl: this.intent() === 'simulator' ? '/app/money' : '/app',
      },
    });
  }
}
