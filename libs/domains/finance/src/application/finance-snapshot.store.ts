import { Injectable, inject, signal } from '@angular/core';
import { FINANCE_SNAPSHOT_KEY, LearnerInboxStore } from '@campusroute/shared-util';

export { FINANCE_SNAPSHOT_KEY };

export type FinanceSnapshot = {
  id: string;
  collegeId: string;
  collegeLabel: string;
  income: number;
  savings: number;
  emi: number;
  loanShare: number;
  stressScore: number;
  savedAt: string;
};

function readAll(): FinanceSnapshot[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FINANCE_SNAPSHOT_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as FinanceSnapshot[];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class FinanceSnapshotStore {
  private readonly snapshotsSignal = signal<FinanceSnapshot[]>(readAll());
  private readonly inbox = inject(LearnerInboxStore);

  readonly snapshots = this.snapshotsSignal.asReadonly();

  save(snapshot: Omit<FinanceSnapshot, 'id' | 'savedAt'>): void {
    const entry: FinanceSnapshot = {
      ...snapshot,
      id: `snap-${Date.now()}`,
      savedAt: new Date().toISOString(),
    };
    const next = [entry, ...this.snapshotsSignal()].slice(0, 10);
    this.snapshotsSignal.set(next);
    localStorage.setItem(FINANCE_SNAPSHOT_KEY, JSON.stringify(next));
    this.inbox.push({
      kind: 'finance',
      title: 'Cost snapshot saved',
      detail: `${snapshot.collegeLabel} · stress ${snapshot.stressScore}`,
    });
  }
}
