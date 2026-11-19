import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { RouterLink } from '@angular/router';

import { SCHOLARSHIP_DEMO } from '../domain/scholarship-demo.data';

import { readLearnerProfileDraft } from '@campusroute/shared-util';

import { ApplyHubNavComponent } from '../ui/apply-hub-nav.component';

import { SchemeMatchCardComponent } from '../ui/scheme-match-card.component';



@Component({

  selector: 'cr-scholarships-page',

  imports: [RouterLink, ApplyHubNavComponent, SchemeMatchCardComponent],

  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `

    <div class="cr-pa-page cr-p3-apply-page">

      <cr-apply-hub-nav section="scholarships" />

      <div class="cr-pa-page-hero cr-p3-apply-hero">

        <p class="cr-pa-eyebrow">Scholarships · MOD-012 demo</p>

        <h1 class="cr-pa-page-title-xl">Matched schemes</h1>

        <p class="cr-pa-lede">

          Eligibility hints from your <a routerLink="/app/profile" class="cr-pa-text-link">Profile</a> — confirm on official portals.

        </p>

      </div>



      <div class="cr-p3-apply-card-grid">

        @for (s of ranked(); track s.id) {

          <cr-scheme-match-card [scheme]="s" />

        }

      </div>

    </div>

  `,

})

export class ScholarshipsPageComponent {

  readonly ranked = computed(() => {

    const profile = readLearnerProfileDraft();

    const boost = profile?.goal?.toLowerCase().includes('scholarship') ? 6 : 0;

    return [...SCHOLARSHIP_DEMO]

      .map((s) => ({ ...s, eligibility_match_pct: Math.min(99, s.eligibility_match_pct + boost) }))

      .sort((a, b) => b.eligibility_match_pct - a.eligibility_match_pct);

  });

}
