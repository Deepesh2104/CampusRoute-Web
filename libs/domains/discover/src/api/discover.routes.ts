import { Route } from '@angular/router';

export const discoverRoutes: Route[] = [
  {
    path: 'discover/colleges',
    loadComponent: () =>
      import('../feature/colleges-catalogue-page.component').then((m) => m.CollegesCataloguePageComponent),
  },
  {
    path: 'discover/colleges/:collegeId',
    loadComponent: () =>
      import('../feature/college-detail-page.component').then((m) => m.CollegeDetailPageComponent),
  },
  {
    path: 'discover/compare',
    loadComponent: () =>
      import('../feature/compare-page.component').then((m) => m.ComparePageComponent),
  },
];
