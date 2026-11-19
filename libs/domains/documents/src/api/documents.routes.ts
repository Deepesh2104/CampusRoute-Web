import { Route } from '@angular/router';

export const documentsRoutes: Route[] = [
  {
    path: 'documents',
    loadComponent: () =>
      import('../feature/document-vault-page.component').then((m) => m.DocumentVaultPageComponent),
  },
];
