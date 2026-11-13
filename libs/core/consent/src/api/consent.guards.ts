import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ConsentStoreService } from '../application/consent-store.service';

export const consentPolicyGuard: CanActivateFn = (_route, state) => {
  const consent = inject(ConsentStoreService);
  const router = inject(Router);

  if (state.url.includes('/app/consent')) {
    return true;
  }

  if (!consent.requiredGranted()) {
    return router.createUrlTree(['/app/consent'], {
      queryParams: { returnUrl: state.url, reason: 'required-consent' },
    });
  }

  return true;
};
