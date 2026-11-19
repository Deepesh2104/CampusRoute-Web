import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { BranchDetailRow, BranchReviewSnapshot } from '@campusroute/shared-models';
import { formatReviewStars } from '@campusroute/shared-models';

@Component({
  selector: 'cr-college-branch-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cr-p2-branch-accordion">
      @for (branch of branches(); track branch.branch; let i = $index) {
        @let voice = voiceFor(branch.branch);
        <details class="cr-p2-branch-acc" [open]="i === 0">
          <summary class="cr-p2-branch-acc__summary">
            <span class="cr-p2-branch-acc__title">{{ branch.branch }}</span>
            <span class="cr-p2-branch-acc__chips">
              <span>{{ branch.seats }} seats</span>
              <span>{{ branch.median_lpa }} LPA median</span>
              <span>{{ branch.placed_pct }}% placed</span>
              @if (voice.review_count > 0) {
                <span class="cr-p2-branch-acc__voice">
                  ★ {{ formatStars(voice.averages?.overall) }} · {{ voice.review_count }} review{{
                    voice.review_count === 1 ? '' : 's'
                  }}
                </span>
              }
            </span>
          </summary>
          <div class="cr-p2-branch-acc__body">
            <table class="cr-p2-trend-table cr-p2-branch-acc__table">
              <thead>
                <tr>
                  <th>Official (dossier)</th>
                  <th>GEN</th>
                  <th>OBC</th>
                  <th>SC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Closing cutoff</td>
                  <td>{{ branch.cutoff_gen }}</td>
                  <td>{{ branch.cutoff_obc }}</td>
                  <td>{{ branch.cutoff_sc }}</td>
                </tr>
                <tr>
                  <td>Placement snapshot</td>
                  <td colspan="3">
                    Median {{ branch.median_lpa }} LPA · {{ branch.placed_pct }}% placed in dossier data
                  </td>
                </tr>
              </tbody>
            </table>

            @if (voice.review_count > 0) {
              <div class="cr-p2-branch-acc__student-stats">
                <p class="cr-pa-eyebrow">Student-reported (this page)</p>
                <ul class="cr-p2-review-dim-list">
                  <li><span>Overall</span><strong>★ {{ formatStars(voice.averages?.overall) }}</strong></li>
                  <li><span>Academics</span><strong>★ {{ formatStars(voice.averages?.academics) }}</strong></li>
                  <li><span>Hostel / mess</span><strong>★ {{ formatStars(voice.averages?.hostel) }}</strong></li>
                  <li><span>Placement support</span><strong>★ {{ formatStars(voice.averages?.placement_support) }}</strong></li>
                  <li><span>Campus life</span><strong>★ {{ formatStars(voice.averages?.campus_life) }}</strong></li>
                </ul>
                <p class="cr-pa-muted">
                  {{ voice.placed_reported_count }} of {{ voice.review_count }} reviewers said they got placed / internship offer.
                </p>
                @if (voice.latest_snippet) {
                  <blockquote class="cr-p2-review-snippet">“{{ voice.latest_snippet }}…”</blockquote>
                }
              </div>
            } @else {
              <p class="cr-pa-muted">No student reviews for this branch yet — be the first below.</p>
            }
          </div>
        </details>
      }
    </div>
  `,
})
export class CollegeBranchAccordionComponent {
  readonly branches = input.required<BranchDetailRow[]>();
  readonly byBranch = input.required<BranchReviewSnapshot[]>();

  formatStars = formatReviewStars;

  voiceFor(branch: string): BranchReviewSnapshot {
    return (
      this.byBranch().find((b) => b.branch === branch) ?? {
        branch,
        review_count: 0,
        averages: null,
        placed_reported_count: 0,
        latest_snippet: null,
      }
    );
  }
}
