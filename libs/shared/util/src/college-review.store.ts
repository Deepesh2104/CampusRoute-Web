import { Injectable, computed, signal } from '@angular/core';
import {
  SEED_COLLEGE_REVIEWS,
  aggregateCollegeReviews,
  type CollegeReviewAggregate,
  type CollegeStudentReview,
} from '@campusroute/shared-models';
import { learnerCanReviewCollege } from './college-review-eligibility';
import { readLearnerProfileDraft } from './learner-workspace.util';

export const COLLEGE_REVIEWS_STORAGE_KEY = 'campusroute.college-reviews.v1';

export type NewCollegeReviewInput = {
  college_id: string;
  branch: string;
  batch_label: string;
  overall: number;
  academics: number;
  hostel: number;
  placement_support: number;
  campus_life: number;
  placed: boolean;
  employer?: string;
  body: string;
};

function readLearnerReviews(): CollegeStudentReview[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(COLLEGE_REVIEWS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as CollegeStudentReview[]) : [];
  } catch {
    return [];
  }
}

function authorLabel(): string {
  const d = readLearnerProfileDraft();
  const name = d?.displayName?.trim();
  if (!name) return 'You';
  const parts = name.split(/\s+/);
  if (parts.length === 1) return `${parts[0].slice(0, 1)}.`;
  return `${parts[0]} ${parts[parts.length - 1].slice(0, 1)}.`;
}

@Injectable({ providedIn: 'root' })
export class CollegeReviewStore {
  private readonly learnerSignal = signal<CollegeStudentReview[]>(readLearnerReviews());

  readonly learnerReviews = this.learnerSignal.asReadonly();

  allForCollege(collegeId: string): CollegeStudentReview[] {
    const seeds = SEED_COLLEGE_REVIEWS.filter((r) => r.college_id === collegeId);
    const learner = this.learnerSignal().filter((r) => r.college_id === collegeId);
    return [...seeds, ...learner].sort((a, b) => b.created_at.localeCompare(a.created_at));
  }

  aggregate(collegeId: string, branchOrder: string[] = []): CollegeReviewAggregate {
    return aggregateCollegeReviews(this.allForCollege(collegeId), branchOrder);
  }

  /** Lightweight summary for catalogue cards. */
  summary = computed(() => {
    const learner = this.learnerSignal();
    const byCollege = new Map<string, CollegeStudentReview[]>();
    for (const r of [...SEED_COLLEGE_REVIEWS, ...learner]) {
      const list = byCollege.get(r.college_id) ?? [];
      list.push(r);
      byCollege.set(r.college_id, list);
    }
    return byCollege;
  });

  summaryFor(collegeId: string): CollegeReviewAggregate {
    return aggregateCollegeReviews(this.summary().get(collegeId) ?? []);
  }

  add(input: NewCollegeReviewInput): CollegeStudentReview | null {
    if (!learnerCanReviewCollege(input.college_id)) return null;
    const review: CollegeStudentReview = {
      id: `learner-${input.college_id}-${Date.now()}`,
      college_id: input.college_id,
      branch: input.branch,
      batch_label: input.batch_label.trim() || 'Current student',
      author_label: authorLabel(),
      verified_campus: false,
      overall: input.overall,
      academics: input.academics,
      hostel: input.hostel,
      placement_support: input.placement_support,
      campus_life: input.campus_life,
      placed: input.placed,
      employer: input.employer?.trim() || undefined,
      body: input.body.trim(),
      created_at: new Date().toISOString(),
      source: 'learner',
    };
    const next = [...this.learnerSignal(), review];
    this.learnerSignal.set(next);
    localStorage.setItem(COLLEGE_REVIEWS_STORAGE_KEY, JSON.stringify(next));
    return review;
  }
}
