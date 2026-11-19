import { Route } from '@angular/router';
import { ConsentPageComponent } from '../feature/consent/consent-page.component';
import { CounsellorPageComponent } from '../feature/counsellor/counsellor-page.component';
import { DashboardPageComponent } from '../feature/dashboard/dashboard-page.component';
import { ExplorePageComponent } from '../feature/explore/explore-page.component';
import { MoneyPageComponent } from '../feature/money/money-page.component';
import { InboxPageComponent } from '../feature/inbox/inbox-page.component';
export const learnerShellRoutes: Route[] = [
  { path: '', component: DashboardPageComponent },
  { path: 'inbox', component: InboxPageComponent },
  { path: 'explore', component: ExplorePageComponent },
  { path: 'money', component: MoneyPageComponent },
  { path: 'counsellor', component: CounsellorPageComponent },
  { path: 'consent', component: ConsentPageComponent },
];
