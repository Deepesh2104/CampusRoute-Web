export const PROFILE_STORAGE_KEY = 'campusroute.profile.v1';

export type LearnerProfileRole =
  | 'School student'
  | 'College student'
  | 'Parent or guardian'
  | 'Teacher or counsellor';

export type LifestyleBand = 'lean' | 'typical' | 'active';

export type LearnerProfileDraft = {
  displayName: string;
  email: string;
  phone: string;
  role: LearnerProfileRole;
  schoolName?: string;
  standard?: string;
  collegeName?: string;
  semester?: string;
  goal: string;
  stream: string;
  city: string;
  /** Monthly pocket money assumption for 4-year true cost (INR). */
  pocketMoneyMonthlyInr?: number;
  lifestyleBand?: LifestyleBand;
  /** 10+2 PCM % — admission chance demo. */
  boardPcmPct?: number;
  /** JEE Main percentile — admission chance demo. */
  jeeMainPercentile?: number;
  /** JEE Advanced AIR if attempted. */
  jeeAdvancedRank?: number;
  /** Proxy for institute-specific exams (BITSAT / VITEEE / MET prep). 0–100 */
  entranceReadinessPct?: number;
};

export type LearnerAdmissionSnapshot = {
  pcmPct: number;
  jeeMainPercentile: number;
  jeeAdvancedRank?: number;
  entranceReadinessPct: number;
};

export function readLearnerAdmissionSnapshot(): LearnerAdmissionSnapshot {
  const d = readLearnerProfileDraft();
  return {
    pcmPct: d?.boardPcmPct ?? 82,
    jeeMainPercentile: d?.jeeMainPercentile ?? 94,
    jeeAdvancedRank: d?.jeeAdvancedRank,
    entranceReadinessPct: d?.entranceReadinessPct ?? 72,
  };
}

export function readLearnerProfileDraft(): LearnerProfileDraft | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LearnerProfileDraft;
  } catch {
    return null;
  }
}

/** Post-login destination: honour safe in-app returnUrl, else simulator intent, else home. */
export function resolvePostAuthUrl(explicitReturn?: string | null, intent?: string | null): string {
  const trimmed = explicitReturn?.trim();
  if (trimmed && trimmed.startsWith('/app') && !trimmed.startsWith('//')) {
    return trimmed;
  }
  if (intent === 'simulator') {
    return '/app/finance/simulator';
  }
  return '/app';
}
