import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarketingDocPageComponent } from './marketing-doc-page.component';

@Component({
  selector: 'cr-trust-page',
  imports: [MarketingDocPageComponent],
  template: `
    <cr-marketing-doc-page title="Trust & security" eyebrow="Public · §13">
      <ul class="cr-mkt-trust-list">
        <li>Consent centre with visibility toggles and access log (demo).</li>
        <li>Discover rows show source + confidence badges on catalogue and compare.</li>
        <li>Finance snapshots stay on-device until Finance API pairs in M2.</li>
        <li>Session timeout and audit hooks for auth and consent events.</li>
      </ul>
    </cr-marketing-doc-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustPageComponent {}
