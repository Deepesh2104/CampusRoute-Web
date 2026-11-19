import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { TrueCostLine } from '@campusroute/shared-models';

@Component({
  selector: 'cr-true-cost-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cr-p2-cost-table-wrap" data-testid="true-cost-table">
      <table class="cr-p2-cost-table">
        <thead>
          <tr>
            <th scope="col">4-year cost line</th>
            <th scope="col">Amount</th>
            <th scope="col" class="cr-p2-cost-table__meta-col">Notes</th>
          </tr>
        </thead>
        <tbody>
          @for (line of lines(); track line.id) {
            <tr [attr.data-cost-id]="line.id">
              <td class="cr-p2-cost-table__label">{{ line.label }}</td>
              <td class="cr-p2-cost-table__amount">₹{{ line.lakhs }}L</td>
              <td class="cr-p2-cost-table__meta">{{ line.meta }}</td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Total (profile)</strong></td>
            <td class="cr-p2-cost-table__total"><strong>₹{{ totalLakhs() }}L</strong></td>
            <td class="cr-pa-muted">Sum of all lines above</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `,
})
export class TrueCostTableComponent {
  readonly lines = input.required<TrueCostLine[]>();
  readonly totalLakhs = input.required<number>();
}
