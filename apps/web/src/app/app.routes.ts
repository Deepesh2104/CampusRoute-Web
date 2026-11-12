import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@campusroute/marketing-landing').then(
        (m) => m.marketingLandingRoutes
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./feature/auth-placeholder/auth-placeholder.component').then(
            (m) => m.AuthPlaceholderComponent
          ),
        data: { title: 'Sign in' },
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./feature/auth-placeholder/auth-placeholder.component').then(
            (m) => m.AuthPlaceholderComponent
          ),
        data: { title: 'Create account' },
      },
    ],
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./layouts/learner-shell/learner-shell.component').then(
        (m) => m.LearnerShellComponent
      ),
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
