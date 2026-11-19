import { Route } from '@angular/router';

export const profileRoutes: Route[] = [
  {
    path: 'profile',
    loadComponent: () => import('../feature/profile-page.component').then((m) => m.ProfilePageComponent),
  },
];
