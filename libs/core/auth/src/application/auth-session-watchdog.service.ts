import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ClientAuditService } from '@campusroute/shared-util';
import { AuthSessionService } from './auth-session.service';

const WARN_MS = 2 * 60 * 1000;
const TICK_MS = 1000;

@Injectable({ providedIn: 'root' })
export class AuthSessionWatchdogService {
  private readonly auth = inject(AuthSessionService);
  private readonly router = inject(Router);
  private readonly audit = inject(ClientAuditService);

  private timer: ReturnType<typeof setInterval> | null = null;

  readonly showWarning = signal(false);
  readonly secondsLeft = signal(0);

  start(): void {
    this.stop();
    this.timer = setInterval(() => this.tick(), TICK_MS);
    this.tick();
  }

  stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.showWarning.set(false);
  }

  stayLoggedIn(): void {
    this.auth.refreshActivity();
    this.audit.log('auth.session.extended', { scope: 'identity' });
    this.showWarning.set(false);
  }

  private tick(): void {
    const session = this.auth.session();
    if (!session || !this.auth.isAuthenticated()) {
      this.showWarning.set(false);
      return;
    }

    const remaining = new Date(session.expiresAt).getTime() - Date.now();
    if (remaining <= 0) {
      this.audit.log('auth.session.expired', { scope: 'identity' });
      this.auth.signOut();
      this.stop();
      void this.router.navigate(['/auth/login'], {
        queryParams: { reason: 'session-expired' },
      });
      return;
    }

    if (remaining <= WARN_MS) {
      this.showWarning.set(true);
      this.secondsLeft.set(Math.ceil(remaining / 1000));
    } else {
      this.showWarning.set(false);
    }
  }
}

