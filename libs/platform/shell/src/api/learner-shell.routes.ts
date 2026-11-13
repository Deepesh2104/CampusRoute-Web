import { Route } from '@angular/router';
import { ConsentPageComponent } from '../feature/consent/consent-page.component';
import { CounsellorPageComponent } from '../feature/counsellor/counsellor-page.component';
import { DashboardPageComponent } from '../feature/dashboard/dashboard-page.component';
import { ExplorePageComponent } from '../feature/explore/explore-page.component';
import { MoneyPageComponent } from '../feature/money/money-page.component';
import { PlannerPageComponent } from '../feature/planner/planner-page.component';

export const learnerShellRoutes: Route[] = [
  { path: '', component: DashboardPageComponent },
  { path: 'explore', component: ExplorePageComponent },
  { path: 'money', component: MoneyPageComponent },
  { path: 'planner', component: PlannerPageComponent },
  { path: 'counsellor', component: CounsellorPageComponent },
  { path: 'consent', component: ConsentPageComponent },
];
