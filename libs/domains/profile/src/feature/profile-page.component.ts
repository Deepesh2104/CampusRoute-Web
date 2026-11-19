import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthSessionService } from '@campusroute/core-auth';
import type { SignupLearnerRole } from '@campusroute/core-auth';
import { ProfileStoreService } from '../application/profile-store.service';

const ROLES: SignupLearnerRole[] = [
  'School student',
  'College student',
  'Parent or guardian',
  'Teacher or counsellor',
];

@Component({
  selector: 'cr-profile-page',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="cr-pa-page">
      <div class="cr-p2-profile-hero">
        <div class="cr-p2-profile-avatar" aria-hidden="true">{{ initials() }}</div>
        <div>
          <p class="cr-pa-eyebrow">Profile · MOD-002</p>
          <h1 class="cr-pa-page-title-xl">{{ draft.displayName || 'Your learner profile' }}</h1>
          <p class="cr-pa-lede">
            Journey: <strong>{{ store.journeyLabel() }}</strong> — this drives home, explore and money defaults.
          </p>
        </div>
      </div>

      <form class="cr-pa-card cr-p2-profile-form" (ngSubmit)="save()">
        <div class="cr-pa-card__inner">
          <h2 class="cr-pa-section-heading cr-pa-section-heading--md">Identity</h2>
          <div class="cr-p2-profile-grid">
            <div>
              <label class="cr-p2-label" for="pf-name">Full name</label>
              <input id="pf-name" class="cr-p2-input" [(ngModel)]="draft.displayName" name="displayName" />
            </div>
            <div>
              <label class="cr-p2-label" for="pf-email">Email</label>
              <input id="pf-email" class="cr-p2-input" type="email" [(ngModel)]="draft.email" name="email" />
            </div>
            <div>
              <label class="cr-p2-label" for="pf-phone">Mobile</label>
              <input id="pf-phone" class="cr-p2-input" [(ngModel)]="draft.phone" name="phone" />
            </div>
            <div>
              <label class="cr-p2-label" for="pf-role">I am a</label>
              <select id="pf-role" class="cr-p2-input" [(ngModel)]="draft.role" name="role">
                @for (r of roles; track r) {
                  <option [value]="r">{{ r }}</option>
                }
              </select>
            </div>
          </div>

          @if (draft.role === 'School student') {
            <h2 class="cr-pa-section-heading cr-pa-section-heading--md" style="margin-top: 1.25rem">School context</h2>
            <div class="cr-p2-profile-grid">
              <div>
                <label class="cr-p2-label" for="pf-school">School</label>
                <input id="pf-school" class="cr-p2-input" [(ngModel)]="draft.schoolName" name="schoolName" />
              </div>
              <div>
                <label class="cr-p2-label" for="pf-standard">Standard</label>
                <input id="pf-standard" class="cr-p2-input" [(ngModel)]="draft.standard" name="standard" />
              </div>
            </div>
          }

          @if (draft.role === 'College student') {
            <h2 class="cr-pa-section-heading cr-pa-section-heading--md" style="margin-top: 1.25rem">College context</h2>
            <div class="cr-p2-profile-grid">
              <div>
                <label class="cr-p2-label" for="pf-college">College</label>
                <input id="pf-college" class="cr-p2-input" [(ngModel)]="draft.collegeName" name="collegeName" />
              </div>
              <div>
                <label class="cr-p2-label" for="pf-semester">Semester</label>
                <input id="pf-semester" class="cr-p2-input" [(ngModel)]="draft.semester" name="semester" />
              </div>
            </div>
          }

          <h2 class="cr-pa-section-heading cr-pa-section-heading--md" style="margin-top: 1.25rem">Goals</h2>
          <div class="cr-p2-profile-grid">
            <div class="cr-p2-profile-wide">
              <label class="cr-p2-label" for="pf-goal">North star goal</label>
              <input id="pf-goal" class="cr-p2-input" [(ngModel)]="draft.goal" name="goal" />
            </div>
            <div>
              <label class="cr-p2-label" for="pf-stream">Stream / focus</label>
              <input id="pf-stream" class="cr-p2-input" [(ngModel)]="draft.stream" name="stream" />
            </div>
            <div>
              <label class="cr-p2-label" for="pf-city">City</label>
              <input id="pf-city" class="cr-p2-input" [(ngModel)]="draft.city" name="city" />
            </div>
          </div>

          <h2 class="cr-pa-section-heading cr-pa-section-heading--md" style="margin-top: 1.25rem">
            Admission chance inputs
          </h2>
          <p class="cr-pa-muted" style="margin: 0 0 0.75rem">
            Used on college cards for exam vs management-quota probability — demo only, not counselling.
          </p>
          <div class="cr-p2-profile-grid">
            <div>
              <label class="cr-p2-label">PCM % (10+2)</label>
              <input
                type="range"
                min="50"
                max="99"
                step="1"
                [ngModel]="draft.boardPcmPct ?? 82"
                (ngModelChange)="draft.boardPcmPct = $event"
                name="boardPcm"
              />
              <span class="cr-p2-profile-range-val">{{ draft.boardPcmPct ?? 82 }}%</span>
            </div>
            <div>
              <label class="cr-p2-label">JEE Main percentile</label>
              <input
                type="range"
                min="40"
                max="100"
                step="0.1"
                [ngModel]="draft.jeeMainPercentile ?? 94"
                (ngModelChange)="draft.jeeMainPercentile = $event"
                name="jeePct"
              />
              <span class="cr-p2-profile-range-val">{{ draft.jeeMainPercentile ?? 94 }}</span>
            </div>
            <div>
              <label class="cr-p2-label" for="pf-jee-adv">JEE Advanced AIR (optional)</label>
              <input
                id="pf-jee-adv"
                type="number"
                class="cr-p2-input"
                [(ngModel)]="draft.jeeAdvancedRank"
                name="jeeAdv"
                placeholder="e.g. 8500"
              />
            </div>
            <div>
              <label class="cr-p2-label">Entrance readiness (BITSAT / VITEEE / MET)</label>
              <input
                type="range"
                min="30"
                max="100"
                step="1"
                [ngModel]="draft.entranceReadinessPct ?? 72"
                (ngModelChange)="draft.entranceReadinessPct = $event"
                name="entranceReady"
              />
              <span class="cr-p2-profile-range-val">{{ draft.entranceReadinessPct ?? 72 }}/100</span>
            </div>
          </div>

          <h2 class="cr-pa-section-heading cr-pa-section-heading--md" style="margin-top: 1.25rem">
            Living &amp; money assumptions
          </h2>
          <p class="cr-pa-muted" style="margin: 0 0 0.75rem">
            Used in Money &amp; simulator for pocket money, fashion, exams and travel — not tuition alone.
          </p>
          <div class="cr-p2-profile-grid">
            <div class="cr-p2-profile-wide">
              <label class="cr-p2-label">Monthly pocket money</label>
              <input
                type="range"
                min="2000"
                max="12000"
                step="500"
                [ngModel]="draft.pocketMoneyMonthlyInr ?? 5000"
                (ngModelChange)="draft.pocketMoneyMonthlyInr = $event"
                name="pocketRange"
              />
              <span class="cr-p2-profile-range-val">₹{{ (draft.pocketMoneyMonthlyInr ?? 5000).toLocaleString('en-IN') }}/mo</span>
            </div>
            <div>
              <label class="cr-p2-label" for="pf-life">Lifestyle band</label>
              <select
                id="pf-life"
                class="cr-p2-input"
                [ngModel]="draft.lifestyleBand ?? 'typical'"
                (ngModelChange)="draft.lifestyleBand = $event"
                name="lifestyleBand"
              >
                <option value="lean">Lean</option>
                <option value="typical">Typical</option>
                <option value="active">Active</option>
              </select>
            </div>
          </div>

          <button type="submit" class="cr-pa-btn cr-pa-btn--emerald cr-p2-profile-wide" data-testid="profile-save">
            Save profile
          </button>
          @if (saved()) {
            <p class="cr-p2-ok cr-p2-profile-wide" role="status">Saved — money totals will use these assumptions.</p>
          }
        </div>
      </form>

      <div class="cr-p2-quick-links">
        @if (draft.role === 'School student') {
          <a routerLink="/app/discover/colleges" class="cr-pa-btn cr-pa-btn--outline-emerald">Explore colleges</a>
        } @else {
          <a routerLink="/app/explore" class="cr-pa-btn cr-pa-btn--outline-emerald">Explore careers</a>
        }
        <a routerLink="/app/finance/simulator" class="cr-pa-btn cr-pa-btn--ghost">Cost simulator</a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
  readonly store = inject(ProfileStoreService);
  private readonly auth = inject(AuthSessionService);
  readonly roles = ROLES;
  draft = { ...this.store.profile() };
  readonly saved = signal(false);

  readonly initials = computed(() => {
    const name = this.draft.displayName || this.auth.displayName() || 'CR';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  });

  save(): void {
    if (!this.draft.pocketMoneyMonthlyInr) this.draft.pocketMoneyMonthlyInr = 5_000;
    if (!this.draft.lifestyleBand) this.draft.lifestyleBand = 'typical';
    if (!this.draft.boardPcmPct) this.draft.boardPcmPct = 82;
    if (!this.draft.jeeMainPercentile) this.draft.jeeMainPercentile = 94;
    if (!this.draft.entranceReadinessPct) this.draft.entranceReadinessPct = 72;
    this.store.patch(this.draft);
    this.saved.set(true);
  }
}
