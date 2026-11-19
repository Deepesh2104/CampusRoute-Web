import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cr-admissions-provenance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="cr-p2-provenance" [attr.data-confidence]="confidence()">
      <span class="cr-p2-provenance__source">{{ source() }}</span>
      <span class="cr-p2-provenance__conf">{{ confidence() }} confidence</span>
    </span>
  `,
})
export class AdmissionsProvenanceBadgeComponent {
  readonly source = input.required<string>();
  readonly confidence = input.required<string>();
}