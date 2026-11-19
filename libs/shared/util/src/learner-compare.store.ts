import { Injectable, computed, signal } from '@angular/core';

export const COMPARE_PICKS_STORAGE_KEY = 'campusroute.compare-picks.v1';
export const COMPARE_PICKS_MAX = 3;

function readIds(): string[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(COMPARE_PICKS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((x) => typeof x === 'string').slice(0, COMPARE_PICKS_MAX)
      : [];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class LearnerCompareStore {
  private readonly idsSignal = signal<string[]>(readIds());

  readonly ids = this.idsSignal.asReadonly();
  readonly count = computed(() => this.idsSignal().length);
  readonly isFull = computed(() => this.idsSignal().length >= COMPARE_PICKS_MAX);

  isSelected(collegeId: string): boolean {
    return this.idsSignal().includes(collegeId);
  }

  /** Add if not present; returns false if full or duplicate. */
  add(collegeId: string): boolean {
    const current = this.idsSignal();
    if (current.includes(collegeId) || current.length >= COMPARE_PICKS_MAX) return false;
    this.persist([...current, collegeId]);
    return true;
  }

  remove(collegeId: string): void {
    this.persist(this.idsSignal().filter((id) => id !== collegeId));
  }

  toggle(collegeId: string): void {
    if (this.isSelected(collegeId)) this.remove(collegeId);
    else this.add(collegeId);
  }

  setAll(ids: string[]): void {
    const next = [...new Set(ids.filter(Boolean))].slice(0, COMPARE_PICKS_MAX);
    this.persist(next);
  }

  /** Merge URL or detail-page intent with current tray (max 3). */
  idsWithExtra(extraId?: string): string[] {
    const base = [...this.idsSignal()];
    if (extraId && !base.includes(extraId)) base.push(extraId);
    return base.slice(0, COMPARE_PICKS_MAX);
  }

  toQueryValue(extraId?: string): string {
    return this.idsWithExtra(extraId).join(',');
  }

  private persist(ids: string[]): void {
    this.idsSignal.set(ids);
    localStorage.setItem(COMPARE_PICKS_STORAGE_KEY, JSON.stringify(ids));
  }
}
