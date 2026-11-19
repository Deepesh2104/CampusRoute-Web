import { Route } from '@angular/router';

export const admissionsRoutes: Route[] = [
  {
    path: 'planner',
    loadComponent: () =>
      import('../feature/admissions-planner-page.component').then((m) => m.AdmissionsPlannerPageComponent),
  },
  {
    path: 'admissions',
    loadComponent: () =>
      import('../feature/admissions-home-page.component').then((m) => m.AdmissionsHomePageComponent),
  },
  {
    path: 'admissions/:applicationId',
    loadComponent: () =>
      import('../feature/application-detail-page.component').then((m) => m.ApplicationDetailPageComponent),
  },
  {
    path: 'scholarships',
    loadComponent: () =>
      import('../feature/scholarships-page.component').then((m) => m.ScholarshipsPageComponent),
  },
  {
    path: 'loans',
    loadComponent: () =>
      import('../feature/apply-loans-page.component').then((m) => m.ApplyLoansPageComponent),
  },
];
