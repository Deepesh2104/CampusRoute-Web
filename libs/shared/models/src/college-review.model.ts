/** Student / alumni voice on a college dossier (demo + learner-submitted). */

export type CollegeReviewSource = 'seed' | 'learner';

export type CollegeStudentReview = {
  id: string;
  college_id: string;
  branch: string;
  batch_label: string;
  author_label: string;
  verified_campus: boolean;
  overall: number;
  academics: number;
  hostel: number;
  placement_support: number;
  campus_life: number;
  placed: boolean;
  employer?: string;
  body: string;
  created_at: string;
  source: CollegeReviewSource;
};

export type CollegeReviewDimensionAverages = {
  overall: number;
  academics: number;
  hostel: number;
  placement_support: number;
  campus_life: number;
};

export type BranchReviewSnapshot = {
  branch: string;
  review_count: number;
  averages: CollegeReviewDimensionAverages | null;
  placed_reported_count: number;
  latest_snippet: string | null;
};

export type CollegeReviewAggregate = {
  total_reviews: number;
  verified_count: number;
  would_recommend_pct: number;
  averages: CollegeReviewDimensionAverages | null;
  by_branch: BranchReviewSnapshot[];
  latest_at: string | null;
};

const DIMS = ['overall', 'academics', 'hostel', 'placement_support', 'campus_life'] as const;

function avgDim(reviews: CollegeStudentReview[], key: (typeof DIMS)[number]): number | null {
  if (!reviews.length) return null;
  const sum = reviews.reduce((a, r) => a + r[key], 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

function dimensionAverages(reviews: CollegeStudentReview[]): CollegeReviewDimensionAverages | null {
  if (!reviews.length) return null;
  return {
    overall: avgDim(reviews, 'overall')!,
    academics: avgDim(reviews, 'academics')!,
    hostel: avgDim(reviews, 'hostel')!,
    placement_support: avgDim(reviews, 'placement_support')!,
    campus_life: avgDim(reviews, 'campus_life')!,
  };
}

export function aggregateCollegeReviews(
  reviews: CollegeStudentReview[],
  branchOrder: string[] = []
): CollegeReviewAggregate {
  const total = reviews.length;
  const verified_count = reviews.filter((r) => r.verified_campus).length;
  const wouldRecommend =
    total === 0 ? 0 : Math.round((reviews.filter((r) => r.overall >= 4).length / total) * 100);
  const latest_at =
    total === 0
      ? null
      : reviews
          .map((r) => r.created_at)
          .sort()
          .at(-1) ?? null;

  const branches = new Set<string>([...branchOrder, ...reviews.map((r) => r.branch)]);
  const by_branch: BranchReviewSnapshot[] = [...branches].map((branch) => {
    const branchReviews = reviews.filter((r) => r.branch === branch);
    const sorted = [...branchReviews].sort((a, b) => b.created_at.localeCompare(a.created_at));
    return {
      branch,
      review_count: branchReviews.length,
      averages: dimensionAverages(branchReviews),
      placed_reported_count: branchReviews.filter((r) => r.placed).length,
      latest_snippet: sorted[0]?.body.slice(0, 140) ?? null,
    };
  });

  by_branch.sort((a, b) => {
    if (b.review_count !== a.review_count) return b.review_count - a.review_count;
    return a.branch.localeCompare(b.branch);
  });

  return {
    total_reviews: total,
    verified_count,
    would_recommend_pct: wouldRecommend,
    averages: dimensionAverages(reviews),
    by_branch,
    latest_at,
  };
}

export function formatReviewStars(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return '—';
  return value.toFixed(1);
}

export const SEED_COLLEGE_REVIEWS: CollegeStudentReview[] = [
  {
    id: 'seed-iitr-cse-1',
    college_id: 'iit-roorkee',
    branch: 'B.Tech CSE',
    batch_label: 'BTech 2020–24',
    author_label: 'Riya S.',
    verified_campus: true,
    overall: 5,
    academics: 5,
    hostel: 4,
    placement_support: 5,
    campus_life: 4,
    placed: true,
    employer: 'Product · Bay Area',
    body: 'CSE workload is real but faculty office hours help. Placement cell pushes internships from 3rd year — verify your own branch PDF, not Instagram reels.',
    created_at: '2025-08-12T10:00:00.000Z',
    source: 'seed',
  },
  {
    id: 'seed-iitr-cse-2',
    college_id: 'iit-roorkee',
    branch: 'B.Tech CSE',
    batch_label: 'BTech 2021–25',
    author_label: 'Arjun M.',
    verified_campus: true,
    overall: 4,
    academics: 5,
    hostel: 3,
    placement_support: 4,
    campus_life: 4,
    placed: true,
    employer: 'SDE · Bangalore',
    body: 'Hostel renovation is patchy by block — ask seniors which wing you land in. Academics: strong algorithms & systems electives if you fight for slot.',
    created_at: '2025-09-03T14:00:00.000Z',
    source: 'seed',
  },
  {
    id: 'seed-iitr-ece-1',
    college_id: 'iit-roorkee',
    branch: 'B.Tech ECE',
    batch_label: 'BTech 2019–23',
    author_label: 'Neha K.',
    verified_campus: true,
    overall: 4,
    academics: 4,
    hostel: 4,
    placement_support: 4,
    campus_life: 5,
    placed: true,
    employer: 'Core · Semiconductor',
    body: 'ECE median is below CSE but core roles exist if you target VLSI/embedded early. Sports culture on campus is excellent.',
    created_at: '2025-07-20T09:30:00.000Z',
    source: 'seed',
  },
  {
    id: 'seed-vit-cse-1',
    college_id: 'vit-vellore',
    branch: 'B.Tech CSE',
    batch_label: 'BTech 2021–25',
    author_label: 'Karan P.',
    verified_campus: true,
    overall: 4,
    academics: 4,
    hostel: 4,
    placement_support: 5,
    campus_life: 5,
    placed: true,
    employer: 'IT services → product switch',
    body: 'FFCS takes a semester to learn — block your basics early. Companies flood campus; still need projects for product shortlists.',
    created_at: '2025-10-01T11:00:00.000Z',
    source: 'seed',
  },
  {
    id: 'seed-vit-cse-2',
    college_id: 'vit-vellore',
    branch: 'B.Tech CSE',
    batch_label: 'BTech 2022–26',
    author_label: 'Divya R.',
    verified_campus: true,
    overall: 3,
    academics: 3,
    hostel: 3,
    placement_support: 4,
    campus_life: 4,
    placed: false,
    body: 'Still intern hunting — curriculum feels broad, depth is on you. Mess quality varies; budget extra pocket money.',
    created_at: '2025-10-18T16:00:00.000Z',
    source: 'seed',
  },
  {
    id: 'seed-rvce-cse-1',
    college_id: 'rvce',
    branch: 'B.Tech CSE',
    batch_label: 'BTech 2020–24',
    author_label: 'Vikram H.',
    verified_campus: true,
    overall: 4,
    academics: 4,
    hostel: 3,
    placement_support: 4,
    campus_life: 4,
    placed: true,
    employer: 'Startup · Bangalore',
    body: 'Bangalore ecosystem is the win — commute/hostel costs add up vs government colleges. COMEDK rank matters a lot for CSE.',
    created_at: '2025-06-15T12:00:00.000Z',
    source: 'seed',
  },
  {
    id: 'seed-nitt-cse-1',
    college_id: 'nit-trichy',
    branch: 'B.Tech CSE',
    batch_label: 'BTech 2019–23',
    author_label: 'Sahil T.',
    verified_campus: true,
    overall: 5,
    academics: 4,
    hostel: 4,
    placement_support: 5,
    campus_life: 4,
    placed: true,
    employer: 'FAANG track',
    body: 'NIT Trichy CSE punches above tier — peer group matters. Mess is decent; summers are brutally hot, plan ac/budget.',
    created_at: '2025-08-28T08:00:00.000Z',
    source: 'seed',
  },
];
