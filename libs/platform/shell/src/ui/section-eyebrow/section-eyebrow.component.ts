import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cr-section-eyebrow',
  template: `<p class="cr-pa-eyebrow cr-pa-eyebrow--section"><ng-content /></p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionEyebrowComponent {
  readonly text = input<string>();
}
