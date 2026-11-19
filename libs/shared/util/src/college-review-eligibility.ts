import { COLLEGE_CATALOGUE } from '@campusroute/shared-models';
import { readLearnerProfileDraft } from './learner-workspace.util';

/** MOD-022 demo rule — learner may post a review only for their own enrolled college. */
export function learnerCanReviewCollege(collegeId: string): boolean {
  const profile = readLearnerProfileDraft();
  if (!profile || profile.role !== 'College student') return false;

  const row = COLLEGE_CATALOGUE.find((c) => c.id === collegeId);
  if (!row) return false;

  const entered = (profile.collegeName ?? '').trim().toLowerCase();
  if (!entered) return false;

  const tokens = [
    row.id.replace(/-/g, ' '),
    row.short_name,
    row.name,
    row.city.split(',')[0].trim(),
  ].map((s) => s.toLowerCase());

  return tokens.some((t) => t.includes(entered) || entered.includes(t));
}