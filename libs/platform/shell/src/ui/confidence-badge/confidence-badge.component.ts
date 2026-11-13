import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cr-confidence-badge',
  template: `
    <span
      class="cr-pa-confidence"
      [class.cr-pa-confidence--high]="value() === 'High'"
      [class.cr-pa-confidence--medium]="value() !== 'High'"
      [attr.data-testid]="'confidence-' + value().toLowerCase() + '-badge'"
    >
      {{ value() }} confidence
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfidenceBadgeComponent {
  readonly value = input.required<string>();
}
