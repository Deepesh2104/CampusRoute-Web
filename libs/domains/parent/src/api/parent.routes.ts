import { Route } from '@angular/router';

export const parentRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../feature/parent-dashboard-page.component').then((m) => m.ParentDashboardPageComponent),
  },
];
