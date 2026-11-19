import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarketingDocPageComponent } from './marketing-doc-page.component';

@Component({
  selector: 'cr-privacy-page',
  imports: [MarketingDocPageComponent],
  template: `
    <cr-marketing-doc-page title="Privacy notice" eyebrow="Legal · demo">
      <p>
        CampusRoute demo stores auth, profile, shortlist, and finance snapshots in your browser localStorage. No server
        persistence in Phase 2 demo mode.
      </p>
      <p>
        When identity and consent APIs pair, we will record consent receipts server-side and limit college shares to
        scopes you enable.
      </p>
    </cr-marketing-doc-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPageComponent {}
