import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ScholarshipMatch } from '../domain/scholarship-demo.data';
import { admissionProbClass } from '../domain/admission-chance';

@Component({
  selector: 'cr-scheme-match-card',
  host: { class: 'cr-p3-apply-card-host' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="cr-p2-college-card-v2 cr-p3-scheme-card-v2" [attr.data-testid]="'scheme-' + scheme().id">
      <header class="cr-p2-college-card-v2__head">
        <div>
          <h2 class="cr-p2-college-card-v2__title">{{ scheme().name }}</h2>
          <p class="cr-p2-college-card-v2__meta">{{ scheme().provider }}</p>
        </div>
        <span class="cr-p2-tier-pill">Scheme</span>
      </header>

      <p class="cr-p2-college-card-v2__sub">MOD-012 · profile-matched scholarship</p>

      <div class="cr-p2-admission-teaser">
        <div class="cr-p2-admission-teaser__left">
          <span class="cr-pa-muted">Profile match</span>
          <strong class="cr-p2-admission-prob" [class]="probClass(scheme().eligibility_match_pct)">
            {{ scheme().eligibility_match_pct }}%
          </strong>
        </div>
        <span class="cr-p2-admission-status" [class]="probClass(scheme().eligibility_match_pct)">
          {{ matchLabel(scheme().eligibility_match_pct) }}
        </span>
      </div>

      <p class="cr-p2-college-card-v2__req">{{ scheme().who }}</p>

      <div class="cr-p2-college-card-v2__stats">
        <div>
          <span>Benefit</span>
          <strong>{{ scheme().benefit }}</strong>
        </div>
        <div>
          <span>Deadline</span>
          <strong>{{ scheme().deadline }}</strong>
        </div>
      </div>

      <ul class="cr-p3-scheme-card-v2__reasons">
        @for (r of scheme().reasons; track r) {
          <li>{{ r }}</li>
        }
      </ul>

      <footer class="cr-p2-college-card-v2__foot">
        <span class="cr-p2-provenance" data-confidence="Medium">
          <span class="cr-p2-provenance__source">Official portal apply</span>
          <span class="cr-p2-provenance__conf">Confirm eligibility</span>
        </span>
        <a
          class="cr-pa-btn cr-pa-btn--emerald"
          [href]="scheme().apply_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open official apply
        </a>
      </footer>
    </article>
  `,
})
export class SchemeMatchCardComponent {
  readonly scheme = input.required<ScholarshipMatch>();
  readonly probClass = admissionProbClass;

  matchLabel(pct: number): string {
    if (pct >= 75) return 'Likely eligible';
    if (pct >= 55) return 'Check criteria';
    return 'Verify on portal';
  }
}