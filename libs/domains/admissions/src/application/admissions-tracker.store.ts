import { Injectable, inject, signal } from '@angular/core';
import { COLLEGE_CATALOGUE } from '@campusroute/shared-models';
import { LearnerCompareStore, LearnerShortlistStore } from '@campusroute/shared-util';
import type { AdmissionApplication, ApplicationStatus, ChecklistItem } from '../domain/admission-application.model';

export const ADMISSIONS_STORAGE_KEY = 'campusroute.admissions.v1';

const DEFAULT_CHECKLIST: Omit<ChecklistItem, 'id'>[] = [
  { label: 'Entrance scorecard PDF', done: false },
  { label: 'Class 10 & 12 marksheets', done: false },
  { label: 'Category / income certificate', done: false },
  { label: 'Passport photos & ID', done: false },
  { label: 'Application fee receipt', done: false },
];

function seedChecklist(): ChecklistItem[] {
  return DEFAULT_CHECKLIST.map((item, i) => ({ id: `chk-${i}`, ...item }));
}

function defaultTimeline(status: ApplicationStatus): AdmissionApplication['timeline'] {
  return [
    { when: 'Step 1', title: 'Research fit', detail: 'Compare true cost + admission chance' },
    { when: 'Step 2', title: 'Collect documents', detail: 'Complete checklist before apply window' },
    {
      when: 'Step 3',
      title: 'Apply / counselling',
      detail: status === 'researching' ? 'Not started' : 'In progress on this tracker',
    },
  ];
}

function deadlineForCollege(row: (typeof COLLEGE_CATALOGUE)[number] | undefined): string {
  if (!row) return 'Check official admission calendar';
  if (row.institute_tier === 'IIT' || row.institute_tier === 'NIT' || row.institute_tier === 'IIIT') {
    return 'JoSAA / CSAB counselling rounds — lock choice order before each round';
  }
  if (row.ownership === 'Private') {
    return `${row.primary_entrance} phase-II + first fee deposit — institute portal dates`;
  }
  return 'State quota / institute counselling window — verify SCERT / college PDF';
}

function nextActionFor(status: ApplicationStatus, row: (typeof COLLEGE_CATALOGUE)[number] | undefined): string {
  switch (status) {
    case 'eligible':
      return 'Upload pending proofs · finish checklist before apply window';
    case 'applied':
      return 'Track acknowledgement & counselling / slot booking dates';
    case 'counselling':
      return 'Lock choice order · keep balance ready for seat acceptance fee';
    case 'seat_offered':
      return 'Pay seat acceptance + hostel advance before cutoff datetime';
    case 'enrolled':
      return 'Report on campus · carry originals for verification';
    default:
      return row?.ownership === 'Private'
        ? `Confirm ${row.primary_entrance} percentile + true cost on Money tab`
        : 'Complete document checklist · compare admission chance vs backup';
  }
}

function buildApp(collegeId: string, status: ApplicationStatus = 'researching'): AdmissionApplication {
  const row = COLLEGE_CATALOGUE.find((c) => c.id === collegeId);
  return {
    id: `app-${collegeId}`,
    college_id: collegeId,
    status,
    next_action: nextActionFor(status, row),
    deadline: deadlineForCollege(row),
    entrance_exam: row?.primary_entrance ?? 'Entrance',
    checklist: seedChecklist(),
    timeline: defaultTimeline(status),
    fees_paid_inr: 0,
  };
}

function readApps(): AdmissionApplication[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ADMISSIONS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AdmissionApplication[];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class AdmissionsTrackerStore {
  private readonly shortlist = inject(LearnerShortlistStore);
  private readonly compare = inject(LearnerCompareStore);

  private readonly appsSignal = signal<AdmissionApplication[]>([]);

  readonly applications = this.appsSignal.asReadonly();

  applicationFor(id: string): AdmissionApplication | undefined {
    return this.appsSignal().find((a) => a.id === id);
  }

  constructor() {
    const stored = readApps();
    if (stored.length) {
      this.appsSignal.set(stored);
    } else {
      const seeds = [...new Set([...this.compare.ids(), ...this.shortlist.ids()])].slice(0, 3);
      const initial =
        seeds.length > 0
          ? seeds.map((id, i) => buildApp(id, i === 0 ? 'eligible' : 'researching'))
          : [buildApp('vit-vellore', 'eligible'), buildApp('rvce', 'researching')];
      this.persist(initial);
    }
    this.ensureFromShortlistAndCompare();
  }

  ensureFromShortlistAndCompare(): void {
    const want = [...new Set([...this.compare.ids(), ...this.shortlist.ids()])];
    const current = this.appsSignal();
    const missing = want.filter((cid) => !current.some((a) => a.college_id === cid));
    if (!missing.length) return;
    const next = [...current, ...missing.map((id) => buildApp(id))].slice(0, 5);
    this.persist(next);
  }

  addCollege(collegeId: string): void {
    if (this.appsSignal().some((a) => a.college_id === collegeId)) return;
    this.persist([...this.appsSignal(), buildApp(collegeId)]);
  }

  setStatus(appId: string, status: ApplicationStatus): void {
    const next = this.appsSignal().map((a) =>
      a.id === appId
        ? {
            ...a,
            status,
            timeline: defaultTimeline(status),
            next_action: nextActionFor(status, COLLEGE_CATALOGUE.find((c) => c.id === a.college_id)),
          }
        : a
    );
    this.persist(next);
  }

  toggleChecklist(appId: string, itemId: string): void {
    const next = this.appsSignal().map((a) => {
      if (a.id !== appId) return a;
      return {
        ...a,
        checklist: a.checklist.map((c) => (c.id === itemId ? { ...c, done: !c.done } : c)),
      };
    });
    this.persist(next);
  }

  recordFee(appId: string, amountInr: number, ref: string): void {
    const next = this.appsSignal().map((a) =>
      a.id === appId ? { ...a, fees_paid_inr: amountInr, acknowledgement_ref: ref || undefined } : a
    );
    this.persist(next);
  }

  private persist(apps: AdmissionApplication[]): void {
    this.appsSignal.set(apps);
    localStorage.setItem(ADMISSIONS_STORAGE_KEY, JSON.stringify(apps));
  }
}
