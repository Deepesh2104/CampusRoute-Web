import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { COLLEGE_CATALOGUE } from '@campusroute/shared-models';
import { AdmissionsTrackerStore } from '../application/admissions-tracker.store';
import type { ApplicationStatus } from '../domain/admission-application.model';
import { ApplyHubNavComponent } from '../ui/apply-hub-nav.component';
import { ApplicationTrackerCardComponent } from '../ui/application-tracker-card.component';

const KANBAN: { id: string; label: string; hint: string; statuses: ApplicationStatus[] }[] = [
  {
    id: 'prep',
    label: 'Prep & documents',
    hint: 'Research fit · collect proofs',
    statuses: ['researching', 'eligible'],
  },
  {
    id: 'active',
    label: 'Apply & counselling',
    hint: 'Forms · JoSAA / institute rounds',
    statuses: ['applied', 'counselling'],
  },
  {
    id: 'outcome',
    label: 'Seat & enrollment',
    hint: 'Accept fee · report on campus',
    statuses: ['seat_offered', 'enrolled'],
  },
];

@Component({
  selector: 'cr-admissions-planner-page',
  imports: [ApplyHubNavComponent, ApplicationTrackerCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cr-pa-page cr-p3-apply-page">
      <cr-apply-hub-nav section="planner" />
      <div class="cr-pa-page-hero cr-p3-apply-hero">
        <p class="cr-pa-eyebrow">Planner · Phase 3 demo</p>
        <h1 class="cr-pa-page-title-xl">Your application planner</h1>
        <p class="cr-pa-lede">
          Kanban view of every college — moves when you update status inside each tracker.
        </p>
      </div>

      <div class="cr-p3-kanban">
        @for (col of kanban; track col.id) {
          <section class="cr-p3-kanban__column" [attr.data-column]="col.id">
            <header class="cr-p3-kanban__head">
              <h2>{{ col.label }}</h2>
              <p class="cr-pa-muted">{{ col.hint }}</p>
              <span class="cr-p3-kanban__count">{{ appsInColumn(col.statuses).length }}</span>
            </header>
            <div class="cr-p3-kanban__stack">
              @for (app of appsInColumn(col.statuses); track app.id) {
                <cr-application-tracker-card [app]="app" [college]="college(app.college_id)" />
              } @empty {
                <p class="cr-p3-kanban__empty">No colleges in this stage yet.</p>
              }
            </div>
          </section>
        }
      </div>
    </div>
  `,
})
export class AdmissionsPlannerPageComponent {
  readonly store = inject(AdmissionsTrackerStore);
  readonly kanban = KANBAN;

  appsInColumn(statuses: ApplicationStatus[]) {
    return this.store.applications().filter((a) => statuses.includes(a.status));
  }

  college(id: string) {
    return COLLEGE_CATALOGUE.find((c) => c.id === id);
  }
}