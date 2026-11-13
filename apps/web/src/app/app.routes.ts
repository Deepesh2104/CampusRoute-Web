import { Route } from '@angular/router';
import {
  authFeatureRoutes,
  authGuard,
  emailVerifiedGuard,
  guestAuthGuard,
} from '@campusroute/core-auth';
import { consentPolicyGuard } from '@campusroute/core-consent';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@campusroute/marketing-landing').then((m) => m.marketingLandingRoutes),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),
    canActivate: [guestAuthGuard],
    children: authFeatureRoutes,
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./layouts/learner-shell/learner-shell.component').then((m) => m.LearnerShellComponent),
    canActivate: [authGuard, emailVerifiedGuard, consentPolicyGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@campusroute/platform-shell').then((m) => m.learnerShellRoutes),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
