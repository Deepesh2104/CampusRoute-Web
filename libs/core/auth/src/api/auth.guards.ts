import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthSessionService } from '../application/auth-session.service';

export const authGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthSessionService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    return router.createUrlTree(['/auth/login'], {
      queryParams: { returnUrl: state.url },
    });
  }

  auth.refreshActivity();
  return true;
};

export const guestAuthGuard: CanActivateFn = () => {
  const auth = inject(AuthSessionService);
  const router = inject(Router);

  if (auth.isAuthenticated() && auth.emailVerified()) {
    return router.createUrlTree(['/app']);
  }
  return true;
};

export const emailVerifiedGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthSessionService);
  const router = inject(Router);

  if (!auth.emailVerified()) {
    return router.createUrlTree(['/auth/verify-email'], {
      queryParams: { returnUrl: state.url },
    });
  }
  return true;
};
