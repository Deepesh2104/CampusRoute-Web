export interface AuthSession {
  email: string;
  displayName: string;
  emailVerified: boolean;
  issuedAt: string;
  expiresAt: string;
  intent?: string;
}

export const AUTH_STORAGE_KEY = 'campusroute.auth.v1';
export const SESSION_TTL_MS = 30 * 60 * 1000;
