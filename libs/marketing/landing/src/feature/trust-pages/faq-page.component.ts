import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarketingDocPageComponent } from './marketing-doc-page.component';

@Component({
  selector: 'cr-faq-page',
  imports: [MarketingDocPageComponent],
  template: `
    <cr-marketing-doc-page title="Frequently asked questions" eyebrow="Public · §13">
      <details open>
        <summary>Is CampusRoute free in the demo?</summary>
        <p>Yes. The learner workspace uses curated 2025 reference data on your device until APIs ship.</p>
      </details>
      <details>
        <summary>Who sees my college shortlist?</summary>
        <p>Only you until you approve a share preview. Open Data in the app to review scopes.</p>
      </details>
      <details>
        <summary>How is true cost calculated?</summary>
        <p>Tuition, hostel, and a miscellaneous band — same formula on Money and Finance simulator pages.</p>
      </details>
      <details>
        <summary>School vs college journeys</summary>
        <p>
          School students start with college choice (catalogue + compare). College students start with career signals and
          ROI planning.
        </p>
      </details>
    </cr-marketing-doc-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqPageComponent {}
