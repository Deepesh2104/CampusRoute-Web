import { Injectable, computed, signal } from '@angular/core';
import {
  AUTH_STORAGE_KEY,
  SESSION_TTL_MS,
  type AuthSession,
  type LearnerSignupProfile,
} from '../domain/auth-session.model';

function readStored(): AuthSession | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class AuthSessionService {
  private readonly sessionSignal = signal<AuthSession | null>(readStored());

  readonly session = this.sessionSignal.asReadonly();
  readonly isAuthenticated = computed(() => this.isSessionValid(this.sessionSignal()));
  readonly emailVerified = computed(() => this.sessionSignal()?.emailVerified ?? false);
  readonly displayName = computed(() => this.sessionSignal()?.displayName ?? '');

  private isSessionValid(session: AuthSession | null): boolean {
    if (!session) return false;
    return Date.now() < new Date(session.expiresAt).getTime();
  }

  refreshActivity(): void {
    const current = this.sessionSignal();
    if (!current) return;
    const next: AuthSession = {
      ...current,
      expiresAt: new Date(Date.now() + SESSION_TTL_MS).toISOString(),
    };
    this.persist(next);
  }

  signIn(
    email: string,
    displayName: string,
    options?: {
      emailVerified?: boolean;
      intent?: string;
      phone?: string;
      learnerProfile?: LearnerSignupProfile;
    }
  ): void {
    const now = Date.now();
    const session: AuthSession = {
      email: email.trim().toLowerCase(),
      phone: (options?.phone ?? '').replace(/\D/g, '').slice(-10),
      displayName: displayName.trim() || email.split('@')[0] || 'Learner',
      emailVerified: options?.emailVerified ?? true,
      issuedAt: new Date(now).toISOString(),
      expiresAt: new Date(now + SESSION_TTL_MS).toISOString(),
      intent: options?.intent,
      learnerProfile: options?.learnerProfile,
    };
    this.persist(session);
  }

  markEmailVerified(): void {
    const current = this.sessionSignal();
    if (!current) return;
    this.persist({ ...current, emailVerified: true });
  }

  signOut(): void {
    this.sessionSignal.set(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }

  private persist(session: AuthSession): void {
    this.sessionSignal.set(session);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  }
}
