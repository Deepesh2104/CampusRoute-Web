import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthSessionService } from '@campusroute/core-auth';
import { COLLEGE_CATALOGUE, type CollegeCatalogueRow } from '@campusroute/shared-models';
import {
  COMPARE_PICKS_MAX,
  LearnerCompareStore,
  LearnerInboxStore,
  LearnerShortlistStore,
  financeSnapshotCount,
  readAdmissionsDemoSummary,
  readDocumentVaultCount,
  readFinanceSnapshots,
  readLearnerAdmissionSnapshot,
  readLearnerProfileDraft,
} from '@campusroute/shared-util';
import { DEMO_CAMPUS_OVERVIEW } from '../../domain/demo-overview.data';
import { formatLpaRange } from '../../domain/format-money';

type HomeNextStep = {
  title: string;
  body: string;
  link: string;
  label: string;
  testId: string;
};

@Component({
  selector: 'cr-dashboard-page',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {
  private readonly auth = inject(AuthSessionService);
  private readonly shortlist = inject(LearnerShortlistStore);
  private readonly compare = inject(LearnerCompareStore);
  private readonly inbox = inject(LearnerInboxStore);

  readonly inboxUnread = this.inbox.unreadCount;

  readonly overview = DEMO_CAMPUS_OVERVIEW;
  readonly catalogueSize = COLLEGE_CATALOGUE.length;
  readonly featuredScholarships = this.overview.scholarships.slice(0, 2);
  readonly timelineDoneCount = this.overview.timeline.filter((t) => t.status === 'done').length;

  private collegeRow(id: string): CollegeCatalogueRow | undefined {
    return COLLEGE_CATALOGUE.find((c) => c.id === id);
  }

  readonly admissionsDemo = computed(() => {
    this.shortlist.count();
    this.compare.count();
    this.inbox.unreadCount();
    return readAdmissionsDemoSummary();
  });

  readonly documentVaultCount = computed(() => {
    this.inbox.unreadCount();
    return readDocumentVaultCount();
  });

  readonly savedSnapshotCount = computed(() => {
    this.compare.count();
    return financeSnapshotCount();
  });

  readonly latestSnapshot = computed(() => readFinanceSnapshots()[0]);

  readonly isAspirant = computed(() => {
    const draft = readLearnerProfileDraft();
    const role = this.auth.session()?.learnerProfile?.role ?? draft?.role;
    return role !== 'College student';
  });

  readonly heroGreeting = computed(() => {
    const first = this.learnerName().split(/\s+/)[0] ?? 'there';
    if (!this.isAspirant()) {
      return `Hi ${first} — career and skills from here`;
    }
    return `Hi ${first} — discover, fund, then apply`;
  });

  readonly northStar = computed(() => {
    const draft = readLearnerProfileDraft();
    if (draft?.goal?.trim()) return draft.goal.trim();
    return 'Strong fit, sensible cost';
  });

  readonly shortlistColleges = computed(() =>
    this.shortlist.ids().map((id) => this.collegeRow(id)).filter((c): c is CollegeCatalogueRow => !!c)
  );

  readonly compareColleges = computed(() =>
    this.compare.ids().map((id) => this.collegeRow(id)).filter((c): c is CollegeCatalogueRow => !!c)
  );

  readonly compareTuitionBand = computed(() => {
    const rows = this.compareColleges();
    if (rows.length === 0) return null;
    const totals = rows.map((r) => +(r.tuition_lakhs + r.hostel_lakhs).toFixed(1));
    return {
      min: Math.min(...totals),
      max: Math.max(...totals),
      label: rows.map((r) => r.short_name).join(' vs '),
    };
  });

  readonly admissionSignals = computed(() => {
    this.profileAdmissionReady();
    const snap = readLearnerAdmissionSnapshot();
    const draft = readLearnerProfileDraft();
    const fromProfile = !!draft && (draft.boardPcmPct ?? 0) > 0 && (draft.jeeMainPercentile ?? 0) > 0;
    return {
      pcmPct: snap.pcmPct,
      jeeMainPercentile: snap.jeeMainPercentile,
      entranceReadinessPct: snap.entranceReadinessPct,
      fromProfile,
    };
  });

  readonly journeyStages = computed(() => {
    const discoverDone = this.shortlist.count() > 0 || this.compare.count() > 0;
    const fundDone = this.savedSnapshotCount() > 0;
    const applyDone = this.admissionsDemo().applicationCount > 0;
    return [
      {
        id: 'discover',
        label: 'Discover',
        detail: discoverDone
          ? `${this.shortlist.count()} shortlisted · ${this.compare.count()}/${this.compareMax} compare`
          : 'Catalogue + shortlist',
        link: '/app/discover/colleges',
        state: discoverDone ? ('done' as const) : ('next' as const),
      },
      {
        id: 'fund',
        label: 'Fund',
        detail: fundDone
          ? `${this.savedSnapshotCount()} stress snapshot(s)`
          : this.compareTuitionBand()
            ? `Tuition+hostel band ₹${this.compareTuitionBand()!.min}–${this.compareTuitionBand()!.max}L (compare)`
            : 'True cost + family stress',
        link: this.compareTuitionBand() ? '/app/finance/simulator' : '/app/money',
        state: fundDone ? ('done' as const) : discoverDone ? ('next' as const) : ('idle' as const),
      },
      {
        id: 'apply',
        label: 'Apply',
        detail: applyDone
          ? `${this.admissionsDemo().applicationCount} tracker(s) · ${this.admissionsDemo().pendingChecklistItems} checklist open`
          : 'Tracker · planner · vault',
        link: '/app/admissions',
        state: applyDone ? ('done' as const) : fundDone || discoverDone ? ('next' as const) : ('idle' as const),
      },
    ];
  });

  readonly inboxPreview = computed(() => this.inbox.items().slice(0, 2));

  readonly learnerName = computed(() => this.auth.displayName() || this.overview.learner.name);

  readonly profileInitials = computed(() => {
    const name = this.learnerName();
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  });

  readonly learnerRole = computed(() => {
    const draft = readLearnerProfileDraft();
    const role = this.auth.session()?.learnerProfile?.role ?? draft?.role;
    if (role === 'School student') return 'School student · aspirant';
    if (role === 'College student') return 'College student · enrolled';
    return 'Learner · demo workspace';
  });

  readonly profileSummary = computed(() => {
    const lp = this.auth.session()?.learnerProfile;
    const draft = readLearnerProfileDraft();
    const role = lp?.role ?? draft?.role;
    if (role === 'School student') {
      const std = lp?.standard ?? draft?.standard ?? this.overview.learner.class_level;
      const school = lp?.schoolName ?? draft?.schoolName ?? 'Your school';
      const stream = draft?.stream ?? this.overview.learner.stream;
      return `${std} · ${stream} · ${school}`;
    }
    if (role === 'College student') {
      const sem = lp?.semester ?? draft?.semester ?? 'Current semester';
      const college = lp?.collegeName ?? draft?.collegeName ?? 'Your college';
      const city = draft?.city || this.overview.learner.city;
      return `${sem} · ${college}${city ? ` · ${city}` : ''}`;
    }
    const city = draft?.city ?? this.overview.learner.city;
    return `${this.overview.learner.stream} · ${city}`;
  });

  readonly goalText = computed(() => {
    const draft = readLearnerProfileDraft();
    if (draft?.goal) return draft.goal;
    const role = this.auth.session()?.learnerProfile?.role ?? draft?.role;
    if (role === 'School student') return 'Shortlist colleges that fit your class and budget';
    if (role === 'College student') return 'Plan skills and career routes from your semester';
    return this.overview.learner.goal;
  });

  readonly journeyCta = computed(() => {
    const role = this.auth.session()?.learnerProfile?.role ?? readLearnerProfileDraft()?.role;
    if (role === 'School student') {
      return { label: 'Browse colleges', link: '/app/discover/colleges' };
    }
    if (role === 'College student') {
      return { label: 'Explore careers', link: '/app/explore' };
    }
    return { label: 'Explore workspace', link: '/app/explore' };
  });

  readonly moneyLink = computed(() =>
    this.auth.session()?.intent === 'simulator' ? '/app/finance/simulator' : '/app/money'
  );

  readonly moneyLinkLabel = computed(() =>
    this.auth.session()?.intent === 'simulator' ? 'Open cost simulator →' : 'Run money check →'
  );

  readonly shortlistCount = this.shortlist.count;
  readonly compareCount = this.compare.count;
  readonly compareMax = COMPARE_PICKS_MAX;

  readonly profileAdmissionReady = computed(() => {
    const d = readLearnerProfileDraft();
    if (!d) return false;
    return (d.boardPcmPct ?? 0) > 0 && (d.jeeMainPercentile ?? 0) > 0;
  });

  readonly decisionScore = computed(() => {
    let score = 18;
    if (this.profileAdmissionReady()) score += 14;
    score += Math.min(this.shortlist.count() * 5, 15);
    score += Math.min(this.compare.count() * 8, 20);
    if (this.savedSnapshotCount() > 0) score += 16;
    if (this.admissionsDemo().applicationCount > 0) score += 12;
    if (this.documentVaultCount() > 0) score += 5;
    return Math.min(score, 100);
  });

  readonly decisionPillars = computed(() => {
    const discover = Math.min(
      100,
      (this.shortlist.count() > 0 ? 38 : 12) + this.compare.count() * 22
    );
    const money = this.savedSnapshotCount() > 0 ? 88 : this.compare.count() > 0 ? 42 : 14;
    const apply =
      this.admissionsDemo().applicationCount > 0
        ? Math.min(92, 28 + this.admissionsDemo().applicationCount * 12)
        : 10;
    const profile = this.profileAdmissionReady() ? 94 : 26;
    return [
      { label: 'Discover', pct: discover },
      { label: 'Money', pct: money },
      { label: 'Apply', pct: apply },
      { label: 'Profile', pct: profile },
    ];
  });

  readonly decisionScoreNote = computed(() => {
    const pillars = this.decisionPillars();
    const weakest = [...pillars].sort((a, b) => a.pct - b.pct)[0];
    if (weakest.pct >= 80) {
      return 'Strong evidence across discover, money, and apply. Keep tracker deadlines current this week.';
    }
    if (weakest.label === 'Profile') {
      return 'Admission % and scholarship match need PCM + JEE on Profile — then compare and Apply cards unlock full context.';
    }
    if (weakest.label === 'Money') {
      return 'You have colleges in play but no family stress snapshot yet — model EMI before counselling fees.';
    }
    if (weakest.label === 'Apply') {
      return 'Shortlist is taking shape. Seed applications from Compare or open Apply when you are ready to track proofs.';
    }
    return 'Add colleges to shortlist and compare tray so decision score reflects real options, not defaults.';
  });

  readonly showPriorityStrip = computed(
    () =>
      this.inbox.unreadCount() > 0 ||
      this.admissionsDemo().pendingChecklistItems > 0 ||
      !this.profileAdmissionReady() ||
      (this.admissionsDemo().priority !== null && this.admissionsDemo().applicationCount > 0)
  );

  readonly nextStep = computed((): HomeNextStep => {
    const priority = this.admissionsDemo().priority;
    if (!this.profileAdmissionReady()) {
      return {
        title: 'Tune admission chance',
        body: 'Add board PCM % and JEE Main percentile so compare and Apply cards can show a grounded admission band.',
        link: '/app/profile',
        label: 'Open Profile →',
        testId: 'next-step-profile-link',
      };
    }
    if (this.shortlist.count() === 0 && this.compare.count() === 0) {
      return {
        title: 'Build a shortlist',
        body: 'Start from the catalogue, save colleges you like, then compare true cost side by side.',
        link: '/app/discover/colleges',
        label: 'Browse colleges →',
        testId: 'next-step-colleges-link',
      };
    }
    if (this.admissionsDemo().pendingChecklistItems > 0 && priority) {
      return {
        title: `Checklist open · ${priority.collegeLabel}`,
        body: `${priority.nextAction} Deadline note: ${priority.deadline}`,
        link: `/app/admissions/${priority.applicationId}`,
        label: 'Open tracker →',
        testId: 'next-step-tracker-link',
      };
    }
    if (this.compare.count() > 0 && this.savedSnapshotCount() === 0) {
      return {
        title: 'Stress-test the shortlist',
        body: 'A college can look affordable on paper and still feel tight month to month. Model income, savings, and EMI before you commit.',
        link: '/app/finance/simulator',
        label: 'Run family stress test →',
        testId: 'next-step-stress-link',
      };
    }
    if (this.admissionsDemo().applicationCount > 0) {
      return {
        title: 'Keep applications moving',
        body: 'Use Planner for stage view or open a tracker for checklist and counselling dates.',
        link: '/app/admissions',
        label: 'Apply workspace →',
        testId: 'next-step-apply-link',
      };
    }
    return {
      title: 'Stress-test the shortlist',
      body: 'Model income, savings, and EMI pressure on the colleges you shortlisted.',
      link: this.moneyLink(),
      label: this.moneyLinkLabel(),
      testId: 'next-step-money-link',
    };
  });

  formatRange(min: number, max: number): string {
    return formatLpaRange(min, max);
  }

  careerDemandTone(demand: string): 'very-high' | 'rising' | 'steady' {
    const d = demand.toLowerCase();
    if (d.includes('very')) return 'very-high';
    if (d.includes('rising')) return 'rising';
    return 'steady';
  }

  careerHubsPreview(hubs: string[]): string {
    if (hubs.length <= 2) return hubs.join(' · ');
    return `${hubs.slice(0, 2).join(' · ')} +${hubs.length - 2}`;
  }
}