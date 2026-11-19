import { Injectable, computed, signal } from '@angular/core';

export const SHORTLIST_STORAGE_KEY = 'campusroute.shortlist.v1';

/** Aligns with platform planner seed (VIT + RVCE) for first-time demo. */
const DEMO_SHORTLIST_IDS = ['vit-vellore', 'rvce'] as const;

function readIds(): string[] {
  if (typeof localStorage === 'undefined') return [...DEMO_SHORTLIST_IDS];
  try {
    const raw = localStorage.getItem(SHORTLIST_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(SHORTLIST_STORAGE_KEY, JSON.stringify(DEMO_SHORTLIST_IDS));
      return [...DEMO_SHORTLIST_IDS];
    }
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class LearnerShortlistStore {
  private readonly idsSignal = signal<string[]>(readIds());

  readonly ids = this.idsSignal.asReadonly();
  readonly count = computed(() => this.idsSignal().length);

  isShortlisted(collegeId: string): boolean {
    return this.idsSignal().includes(collegeId);
  }

  toggle(collegeId: string): void {
    const current = this.idsSignal();
    const next = current.includes(collegeId)
      ? current.filter((id) => id !== collegeId)
      : [...current, collegeId];
    this.persist(next);
  }

  setAll(ids: string[]): void {
    this.persist([...new Set(ids)]);
  }

  private persist(ids: string[]): void {
    this.idsSignal.set(ids);
    localStorage.setItem(SHORTLIST_STORAGE_KEY, JSON.stringify(ids));
  }
}
