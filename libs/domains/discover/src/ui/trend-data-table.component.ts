import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  formatCutoffValue,
  cutoffUnitLabel,
  type CutoffMetric,
  type CutoffYearPoint,
  type PlacementYearPoint,
} from '@campusroute/shared-models';

@Component({
  selector: 'cr-cutoff-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cr-p2-trend-table-wrap">
      <p class="cr-p2-trend-table__unit">
        Numbers below are <strong>closing {{ unit() }}</strong> (lower AIR = harder). Source: illustrative demo row.
      </p>
      <table class="cr-p2-trend-table" data-testid="cutoff-data-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>CSE</th>
            <th>ECE</th>
            <th>Mechanical</th>
          </tr>
        </thead>
        <tbody>
          @for (row of series(); track row.year) {
            <tr [class.cr-p2-trend-table__latest]="row.year === latestYear()">
              <td>{{ row.year }}</td>
              <td>{{ fmt(row.cse) }}</td>
              <td>{{ fmt(row.ece) }}</td>
              <td>{{ fmt(row.mechanical) }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class CutoffDataTableComponent {
  readonly series = input.required<CutoffYearPoint[]>();
  readonly metric = input.required<CutoffMetric>();

  unit = () => cutoffUnitLabel(this.metric());

  latestYear = () => this.series().at(-1)?.year;

  fmt(v: number): string {
    return formatCutoffValue(this.metric(), v);
  }
}

@Component({
  selector: 'cr-placement-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <table class="cr-p2-trend-table" data-testid="placement-data-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Median package</th>
          <th>Students placed</th>
        </tr>
      </thead>
      <tbody>
        @for (row of series(); track row.year) {
          <tr [class.cr-p2-trend-table__latest]="row.year === latestYear()">
            <td>{{ row.year }}</td>
            <td>{{ row.median_lpa }} LPA</td>
            <td>{{ row.placed_pct }}%</td>
          </tr>
        }
      </tbody>
    </table>
  `,
})
export class PlacementDataTableComponent {
  readonly series = input.required<PlacementYearPoint[]>();

  latestYear = () => this.series().at(-1)?.year;
}
