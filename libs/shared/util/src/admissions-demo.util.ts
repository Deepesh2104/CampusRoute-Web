import { COLLEGE_CATALOGUE } from '@campusroute/shared-models';

const ADMISSIONS_STORAGE_KEY = 'campusroute.admissions.v1';

type StoredChecklist = { done?: boolean };

type StoredApplication = {
  id?: string;
  college_id?: string;
  next_action?: string;
  deadline?: string;
  checklist?: StoredChecklist[];
};

export type AdmissionsApplyPriority = {
  applicationId: string;
  collegeLabel: string;
  nextAction: string;
  deadline: string;
};

export type AdmissionsDemoSummary = {
  applicationCount: number;
  pendingChecklistItems: number;
  priority: AdmissionsApplyPriority | null;
};

function collegeLabel(collegeId: string | undefined): string {
  if (!collegeId) return 'Application';
  const row = COLLEGE_CATALOGUE.find((c) => c.id === collegeId);
  return row?.short_name ?? row?.name ?? collegeId;
}

function pendingCount(app: StoredApplication): number {
  return (app.checklist ?? []).filter((c) => !c.done).length;
}

function pickPriority(apps: StoredApplication[]): AdmissionsApplyPriority | null {
  if (apps.length === 0) return null;
  const sorted = [...apps].sort((a, b) => pendingCount(b) - pendingCount(a));
  const app = sorted[0];
  const collegeId = app.college_id;
  if (!collegeId) return null;
  return {
    applicationId: app.id ?? `app-${collegeId}`,
    collegeLabel: collegeLabel(collegeId),
    nextAction: app.next_action ?? 'Open tracker for next step',
    deadline: app.deadline ?? 'Check official admission calendar',
  };
}

/** Read-only demo counts for home dashboard (no domain-admissions import). */
export function readAdmissionsDemoSummary(): AdmissionsDemoSummary {
  if (typeof localStorage === 'undefined') {
    return { applicationCount: 0, pendingChecklistItems: 0, priority: null };
  }
  try {
    const raw = localStorage.getItem(ADMISSIONS_STORAGE_KEY);
    if (!raw) return { applicationCount: 0, pendingChecklistItems: 0, priority: null };
    const apps = JSON.parse(raw) as StoredApplication[];
    if (!Array.isArray(apps)) return { applicationCount: 0, pendingChecklistItems: 0, priority: null };
    let pending = 0;
    for (const app of apps) {
      const list = app.checklist ?? [];
      pending += list.filter((c) => !c.done).length;
    }
    return {
      applicationCount: apps.length,
      pendingChecklistItems: pending,
      priority: pickPriority(apps),
    };
  } catch {
    return { applicationCount: 0, pendingChecklistItems: 0, priority: null };
  }
}