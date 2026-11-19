import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarketingDocPageComponent } from './marketing-doc-page.component';

@Component({
  selector: 'cr-terms-page',
  imports: [MarketingDocPageComponent],
  template: `
    <cr-marketing-doc-page title="Terms of use" eyebrow="Legal · demo">
      <p>Product copy, costs, and placements are illustrative. Do not treat seeded numbers as admission or fee advice.</p>
      <p>Under-18 school students require guardian approval in production; the demo surfaces this as a notice only.</p>
    </cr-marketing-doc-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsPageComponent {}
