import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { CampusDemoService } from '../../application/campus-demo.service';
import type { College, PlannerStage } from '../../domain/campus-overview.model';
import { formatLakhs } from '../../domain/format-money';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';

const STAGES: PlannerStage[] = ['Researching', 'Shortlisted', 'Applied', 'Decision'];

const STAGE_ACTIONS: Record<PlannerStage, string> = {
  Researching: 'Review COMEDK cut-offs',
  Shortlisted: 'Check entrance dates',
  Applied: 'Track admit decision',
  Decision: 'Confirm fee lock-in plan',
};

@Component({
  selector: 'cr-planner-page',
  imports: [SectionEyebrowComponent],
  templateUrl: './planner-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerPageComponent {
  private readonly campus = inject(CampusDemoService);

  readonly overview = this.campus.overview;
  readonly planner = this.campus.planner;
  readonly stages = STAGES;
  readonly selectedStage = signal<PlannerStage>('Shortlisted');

  readonly filteredPlanner = computed(() =>
    this.planner().filter((p) => p.status === this.selectedStage())
  );

  formatLakhs = formatLakhs;

  setStage(stage: PlannerStage): void {
    this.selectedStage.set(stage);
  }

  college(id: string): College | undefined {
    return this.campus.collegeById(id);
  }

  onStatusChange(collegeId: string, status: string): void {
    const next = status as PlannerStage;
    if (!STAGES.includes(next)) return;
    this.campus.updatePlannerStatus(collegeId, next, STAGE_ACTIONS[next]);
  }

  skillGapTestId(skill: string): string {
    return `skill-gap-${skill.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`;
  }

  formatJobSalary(lpa: number): string {
    return `${lpa}L`;
  }
}
