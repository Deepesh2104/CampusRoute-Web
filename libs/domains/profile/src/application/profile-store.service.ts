import { Injectable, computed, inject, signal } from '@angular/core';
import { AuthSessionService, type LearnerSignupProfile } from '@campusroute/core-auth';
import {
  PROFILE_STORAGE_KEY,
  readLearnerProfileDraft,
  type LearnerProfileDraft,
} from '@campusroute/shared-util';

export type { LearnerProfileDraft } from '@campusroute/shared-util';

@Injectable({ providedIn: 'root' })
export class ProfileStoreService {
  private readonly auth = inject(AuthSessionService);

  private readonly draftSignal = signal<LearnerProfileDraft>(this.bootstrap());

  readonly profile = this.draftSignal.asReadonly();

  readonly journeyLabel = computed(() => {
    const role = this.draftSignal().role;
    if (role === 'School student') return 'College choice';
    if (role === 'College student') return 'Career planning';
    return 'Family guidance';
  });

  private bootstrap(): LearnerProfileDraft {
    const session = this.auth.session();
    const stored = readLearnerProfileDraft();
    const lp: LearnerSignupProfile | undefined = session?.learnerProfile;
    const role = lp?.role ?? stored?.role ?? 'College student';
    return {
      displayName: session?.displayName ?? stored?.displayName ?? 'Learner',
      email: session?.email ?? stored?.email ?? '',
      phone: session?.phone ?? stored?.phone ?? '',
      role,
      schoolName: lp?.schoolName ?? stored?.schoolName,
      standard: lp?.standard ?? stored?.standard,
      collegeName: lp?.collegeName ?? stored?.collegeName,
      semester: lp?.semester ?? stored?.semester,
      goal:
        stored?.goal ??
        (role === 'School student' ? 'Shortlist colleges that fit my class' : 'Plan career from current semester'),
      stream: stored?.stream ?? 'PCM',
      city: stored?.city ?? '',
      pocketMoneyMonthlyInr: stored?.pocketMoneyMonthlyInr ?? 5_000,
      lifestyleBand: stored?.lifestyleBand ?? 'typical',
      boardPcmPct: stored?.boardPcmPct ?? 82,
      jeeMainPercentile: stored?.jeeMainPercentile ?? 94,
      jeeAdvancedRank: stored?.jeeAdvancedRank,
      entranceReadinessPct: stored?.entranceReadinessPct ?? 72,
    };
  }

  patch(partial: Partial<LearnerProfileDraft>): void {
    const next = { ...this.draftSignal(), ...partial };
    this.draftSignal.set(next);
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(next));
  }
}
