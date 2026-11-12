import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cr-dashboard-page',
  template: `
    <h1>Learner dashboard</h1>
    <p>Shell route — wire Discover, Finance, and journey nav here.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
