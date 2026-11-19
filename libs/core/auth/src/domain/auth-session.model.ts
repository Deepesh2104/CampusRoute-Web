export type SignupLearnerRole =
  | 'School student'
  | 'College student'
  | 'Parent or guardian'
  | 'Teacher or counsellor';

/** Captured at sign-up — feeds MOD-002 profile and journey routing (school → college vs college → career). */
export interface LearnerSignupProfile {
  role: SignupLearnerRole;
  schoolName?: string;
  standard?: string;
  collegeName?: string;
  semester?: string;
}

export interface AuthSession {
  email: string;
  phone?: string;
  displayName: string;
  emailVerified: boolean;
  issuedAt: string;
  expiresAt: string;
  intent?: string;
  learnerProfile?: LearnerSignupProfile;
}

export const AUTH_STORAGE_KEY = 'campusroute.auth.v1';
export const SESSION_TTL_MS = 30 * 60 * 1000;
