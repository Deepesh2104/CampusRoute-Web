import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { COLLEGE_CATALOGUE } from '@campusroute/shared-models';

import { AdmissionsTrackerStore } from '../application/admissions-tracker.store';

import { ApplyHubNavComponent } from '../ui/apply-hub-nav.component';

import { ApplicationTrackerCardComponent } from '../ui/application-tracker-card.component';



@Component({

  selector: 'cr-admissions-home-page',

  imports: [ApplyHubNavComponent, ApplicationTrackerCardComponent],

  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `

    <div class="cr-pa-page cr-p3-apply-page">

      <cr-apply-hub-nav section="admissions" />

      <div class="cr-pa-page-hero cr-p3-apply-hero">

        <p class="cr-pa-eyebrow">Apply · MOD-008 demo</p>

        <h1 class="cr-pa-page-title-xl">Admission applications</h1>

        <p class="cr-pa-lede">

          Track deadlines, checklist and status per college. Seeded from your compare tray / shortlist — demo storage only.

        </p>

      </div>



      <div class="cr-p3-apply-card-grid">

        @for (app of store.applications(); track app.id) {

          <cr-application-tracker-card [app]="app" [college]="collegeName(app.college_id)" />

        }

      </div>

    </div>

  `,

})

export class AdmissionsHomePageComponent {

  readonly store = inject(AdmissionsTrackerStore);



  collegeName(id: string) {

    return COLLEGE_CATALOGUE.find((c) => c.id === id);

  }

}
