import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CollegeReviewStore,
  learnerCanReviewCollege,
  readLearnerProfileDraft,
} from '@campusroute/shared-util';
import {
  formatReviewStars,
  type BranchDetailRow,
  type CollegeStudentReview,
} from '@campusroute/shared-models';

@Component({
  selector: 'cr-college-reviews-panel',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './college-reviews-panel.component.html',
})
export class CollegeReviewsPanelComponent {
  readonly collegeId = input.required<string>();
  readonly collegeShortName = input.required<string>();
  readonly branches = input.required<BranchDetailRow[]>();

  private readonly store = inject(CollegeReviewStore);

  readonly branchOrder = computed(() => this.branches().map((b) => b.branch));
  readonly aggregate = computed(() => this.store.aggregate(this.collegeId(), this.branchOrder()));
  readonly reviews = computed(() => this.store.allForCollege(this.collegeId()));

  readonly canWriteReview = computed(() => learnerCanReviewCollege(this.collegeId()));

  readonly showForm = signal(false);
  readonly submitted = signal(false);
  readonly blockedMessage = signal('');

  readonly draftBranch = signal('');
  readonly draftBatch = signal('');
  readonly draftOverall = signal(4);
  readonly draftAcademics = signal(4);
  readonly draftHostel = signal(3);
  readonly draftPlacement = signal(4);
  readonly draftCampus = signal(4);
  readonly draftPlaced = signal(false);
  readonly draftEmployer = signal('');
  readonly draftBody = signal('');

  readonly profileHint = computed(() => {
    if (this.canWriteReview()) {
      const p = readLearnerProfileDraft();
      return `You're posting as a student of ${p?.collegeName ?? this.collegeShortName()} (campus match · demo).`;
    }
    const p = readLearnerProfileDraft();
    if (!p) {
      return 'Sign in and set Profile to review your own college only.';
    }
    if (p.role !== 'College student') {
      return `Only enrolled college students can review. Your role: ${p.role}. Browse reviews below.`;
    }
    if (!p.collegeName?.trim()) {
      return `Add your college name in Profile — it must match ${this.collegeShortName()} to post.`;
    }
    return `Reviews are only for your own campus. Profile says “${p.collegeName}” — open ${this.collegeShortName()} dossier only if that is your college.`;
  });

  formatStars = formatReviewStars;

  openForm(): void {
    if (!this.canWriteReview()) {
      this.blockedMessage.set('You can only review the college you are enrolled in (Profile → College student + college name).');
      return;
    }
    const first = this.branches()[0]?.branch ?? '';
    if (!this.draftBranch()) this.draftBranch.set(first);
    this.showForm.set(true);
    this.submitted.set(false);
    this.blockedMessage.set('');
  }

  submitReview(event: Event): void {
    event.preventDefault();
    if (!this.canWriteReview()) {
      this.blockedMessage.set('Review blocked — not your campus.');
      return;
    }
    const body = this.draftBody().trim();
    if (body.length < 30) return;
    const branch = this.draftBranch().trim() || this.branches()[0]?.branch;
    if (!branch) return;

    const saved = this.store.add({
      college_id: this.collegeId(),
      branch,
      batch_label: this.draftBatch().trim() || 'Current student',
      overall: this.draftOverall(),
      academics: this.draftAcademics(),
      hostel: this.draftHostel(),
      placement_support: this.draftPlacement(),
      campus_life: this.draftCampus(),
      placed: this.draftPlaced(),
      employer: this.draftEmployer(),
      body,
    });

    if (!saved) {
      this.blockedMessage.set('Could not save — verify Profile college name matches this dossier.');
      return;
    }

    this.draftBody.set('');
    this.draftEmployer.set('');
    this.submitted.set(true);
    this.showForm.set(false);
  }

  reviewDate(review: CollegeStudentReview): string {
    try {
      return new Date(review.created_at).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  }
}