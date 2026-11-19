import { Route } from '@angular/router';
import { admissionsRoutes } from '@campusroute/domains-admissions';
import { discoverRoutes } from '@campusroute/domains-discover';
import { documentsRoutes } from '@campusroute/domains-documents';
import { financeRoutes } from '@campusroute/domains-finance';
import { profileRoutes } from '@campusroute/domains-profile';
import { learnerShellRoutes } from '@campusroute/platform-shell';

export const learnerAppRoutes: Route[] = [
  ...learnerShellRoutes,
  ...admissionsRoutes,
  ...documentsRoutes,
  ...discoverRoutes,
  ...financeRoutes,
  ...profileRoutes,
];
