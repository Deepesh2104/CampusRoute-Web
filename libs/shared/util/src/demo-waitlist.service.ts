import { Injectable, signal } from '@angular/core';

export const WAITLIST_STORAGE_KEY = 'campusroute.waitlist.v1';

export interface WaitlistEntry {
  email: string;
  at: string;
}

function readAll(): WaitlistEntry[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(WAITLIST_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as WaitlistEntry[];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class DemoWaitlistService {
  private readonly entriesSignal = signal<WaitlistEntry[]>(readAll());

  readonly entries = this.entriesSignal.asReadonly();

  add(email: string): boolean {
    const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return false;
    const existing = this.entriesSignal().some((e) => e.email === normalized);
    if (existing) return true;
    const next: WaitlistEntry = { email: normalized, at: new Date().toISOString() };
    const list = [next, ...this.entriesSignal()].slice(0, 100);
    this.entriesSignal.set(list);
    localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(list));
    return true;
  }
}
