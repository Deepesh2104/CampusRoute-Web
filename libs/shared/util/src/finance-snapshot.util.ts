export const FINANCE_SNAPSHOT_KEY = 'campusroute.finance.snapshots.v1';

export type FinanceSnapshotSummary = {
  id: string;
  collegeLabel: string;
  stressScore: number;
  savedAt: string;
};

export function readFinanceSnapshots(): FinanceSnapshotSummary[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FINANCE_SNAPSHOT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as FinanceSnapshotSummary[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function financeSnapshotCount(): number {
  return readFinanceSnapshots().length;
}
