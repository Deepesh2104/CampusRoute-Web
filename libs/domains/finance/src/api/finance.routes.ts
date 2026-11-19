import { Route } from '@angular/router';

export const financeRoutes: Route[] = [
  {
    path: 'finance/simulator',
    loadComponent: () =>
      import('../feature/simulator-page.component').then((m) => m.SimulatorPageComponent),
  },
  {
    path: 'finance/roi',
    loadComponent: () => import('../feature/roi-page.component').then((m) => m.RoiPageComponent),
  },
];
