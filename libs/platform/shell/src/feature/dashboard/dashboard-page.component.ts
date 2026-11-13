import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DECISION_SCORE, DEMO_CAMPUS_OVERVIEW } from '../../domain/demo-overview.data';
import { formatLpaRange } from '../../domain/format-money';

@Component({
  selector: 'cr-dashboard-page',
  imports: [RouterLink],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {
  readonly overview = DEMO_CAMPUS_OVERVIEW;
  readonly decisionScore = DECISION_SCORE;

  formatRange(min: number, max: number): string {
    return formatLpaRange(min, max);
  }
}
