import type { CollegeCatalogueRow } from './college-catalogue';
import { COLLEGE_CATALOGUE } from './college-catalogue';
import { cutoffUnitLabel, formatCutoffValue, trendsForCollege, type CutoffMetric } from './college-trends';

export type BranchIntakeRow = {
  branch: string;
  seats: number;
  latest_cutoff: string;
};

export type BranchDetailRow = {
  branch: string;
  seats: number;
  median_lpa: number;
  placed_pct: number;
  cutoff_gen: string;
  cutoff_obc: string;
  cutoff_sc: string;
};

export type CategoryCutoffRow = {
  category: string;
  cse_closing: string;
  note: string;
};

export type OfficialSourceLink = {
  title: string;
  url: string;
  last_checked: string;
};

export type ScholarshipSchemeRow = {
  name: string;
  who: string;
  benefit: string;
};

export type AdmissionMilestone = {
  when: string;
  title: string;
  detail: string;
};

export type CollegeDossier = {
  overview: string;
  established: number;
  campus_area: string;
  ug_seats_approx: number;
  website: string;
  email_contact: string;
  admission_steps: string[];
  counselling_body: string;
  application_window: string;
  scholarships: string;
  hostel_life: string;
  notable_recruiters: string[];
  facilities: string[];
  branch_intake: BranchIntakeRow[];
  accreditations_extra: string;
  branch_details: BranchDetailRow[];
  category_cutoffs: CategoryCutoffRow[];
  official_sources: OfficialSourceLink[];
  scholarship_schemes: ScholarshipSchemeRow[];
  admission_milestones: AdmissionMilestone[];
  city_life: string;
  trust_notes: string[];
  document_checklist: string[];
  higher_studies_opt_out_note: string;
};

const CHECKED = 'Nov 2025 (demo)';

const DOC_CHECKLIST = [
  'JEE / entrance scorecard & rank card',
  'Class 10 & 12 marksheets + passing certificate',
  'Category / EWS / PwD certificate (if applicable)',
  'Photo ID (Aadhaar) + passport photos',
  'Bonafide / transfer certificate from school',
  'Medical fitness certificate',
  'Income certificate (scholarship / fee waiver)',
  'Anti-ragging & undertaking forms (at reporting)',
];

function scaleCategoryAir(gen: number, mult: number): number {
  return Math.round(gen * mult);
}

function buildCategoryCutoffs(row: CollegeCatalogueRow, metric: CutoffMetric, genCse: number): CategoryCutoffRow[] {
  if (metric === 'air' || metric === 'rank') {
    return [
      {
        category: 'General (GEN)',
        cse_closing: formatCutoffValue(metric, genCse),
        note: 'Illustrative closing for CSE band',
      },
      {
        category: 'OBC-NCL',
        cse_closing: formatCutoffValue(metric, scaleCategoryAir(genCse, 1.22)),
        note: 'Typically relaxed vs GEN — verify JoSAA/institute PDF',
      },
      {
        category: 'SC',
        cse_closing: formatCutoffValue(metric, scaleCategoryAir(genCse, 2.1)),
        note: 'Category matrix changes yearly',
      },
      {
        category: 'EWS',
        cse_closing: formatCutoffValue(metric, scaleCategoryAir(genCse, 1.12)),
        note: 'Separate quota where applicable',
      },
    ];
  }
  if (metric === 'percentile') {
    return [
      { category: 'GEN', cse_closing: `${genCse}`, note: 'JEE Main percentile band' },
      { category: 'OBC-NCL', cse_closing: `${Math.max(70, genCse - 4)}`, note: 'Illustrative' },
      { category: 'SC/ST', cse_closing: `${Math.max(65, genCse - 8)}`, note: 'Illustrative' },
    ];
  }
  return [
    { category: 'GEN', cse_closing: formatCutoffValue(metric, genCse), note: 'Primary exam score' },
    { category: 'MQ / higher-fee', cse_closing: 'Separate matrix', note: row.management_quota_note },
  ];
}

function buildBranchDetails(row: CollegeCatalogueRow): BranchDetailRow[] {
  const trends = trendsForCollege(row.id);
  const latest = trends?.cutoffs.at(-1);
  const metric = trends?.cutoff_metric ?? 'rank';
  const unit = cutoffUnitLabel(metric);
  const med = row.median_placement_lpa;
  const placed = row.placement_rate;
  const programs = row.programs.slice(0, 4);
  const cuts = latest ? [latest.cse, latest.ece, latest.mechanical, latest.mechanical] : [0, 0, 0, 0];
  const medians = [
    Math.round(med * 1.12 * 10) / 10,
    Math.round(med * 1.02 * 10) / 10,
    Math.round(med * 0.88 * 10) / 10,
    Math.round(med * 0.82 * 10) / 10,
  ];
  const placeds = [
    Math.min(98, placed + 2),
    placed,
    Math.max(75, placed - 4),
    Math.max(72, placed - 6),
  ];

  return programs.map((branch, i) => {
    const gen = cuts[i] || cuts[0];
    const fmt = (v: number) => `${formatCutoffValue(metric, v)} ${unit}`;
    const obc = metric === 'air' || metric === 'rank' ? scaleCategoryAir(gen, 1.22) : gen;
    const sc = metric === 'air' || metric === 'rank' ? scaleCategoryAir(gen, 2.1) : gen;
    return {
      branch,
      seats: 70 + i * 25,
      median_lpa: medians[i],
      placed_pct: placeds[i],
      cutoff_gen: fmt(gen),
      cutoff_obc: fmt(obc),
      cutoff_sc: fmt(sc),
    };
  });
}

function defaultOfficialSources(row: CollegeCatalogueRow): OfficialSourceLink[] {
  return [
    { title: 'Institute website', url: row.id === 'iit-roorkee' ? 'https://www.iitr.ac.in' : 'https://www.google.com/search?q=' + encodeURIComponent(row.name), last_checked: CHECKED },
    { title: 'UG admission / prospectus', url: row.id === 'iit-roorkee' ? 'https://www.iitr.ac.in/Admissions/index.html' : row.id === 'vit-vellore' ? 'https://vit.ac.in/admissions' : 'https://www.google.com/search?q=' + encodeURIComponent(row.short_name + ' admission 2025'), last_checked: CHECKED },
    { title: 'Placement / career cell', url: 'https://www.google.com/search?q=' + encodeURIComponent(row.short_name + ' placement report 2024'), last_checked: CHECKED },
    { title: 'Fee structure', url: 'https://www.google.com/search?q=' + encodeURIComponent(row.short_name + ' fee structure 2025'), last_checked: CHECKED },
  ];
}

function defaultScholarships(row: CollegeCatalogueRow): ScholarshipSchemeRow[] {
  return [
    {
      name: 'Merit-cum-means',
      who: 'Family income below institute threshold',
      benefit: 'Partial tuition waiver — apply with income proof',
    },
    {
      name: 'Category / national scholarships',
      who: 'SC/ST/OBC/EWS per government rules',
      benefit: 'Fee reimbursement via NSP / state portals',
    },
    {
      name: 'Entrance rank scholarship',
      who: `Top ranks in ${row.primary_entrance}`,
      benefit: 'One-time or per-semester rebate — check bulletin',
    },
  ];
}

function defaultMilestones(row: CollegeCatalogueRow): AdmissionMilestone[] {
  const exam = row.primary_entrance;
  if (row.institute_tier === 'IIT' || row.jee_advanced_rank_max) {
    return [
      { when: 'Jan–Apr', title: 'JEE Main sessions', detail: 'Register on jeemain.nta.nic.in' },
      { when: 'May', title: 'JEE Advanced', detail: 'Only qualified Mains candidates' },
      { when: 'Jun–Jul', title: 'JoSAA choice filling', detail: 'Lock choices; float/accept rules apply' },
      { when: 'Jul–Aug', title: 'Reporting at campus', detail: `${row.short_name} — fee + document verification` },
    ];
  }
  return [
    { when: 'Varies', title: `${exam} registration`, detail: 'Watch official notification — usually 3–6 months before intake' },
    { when: 'Post result', title: 'Counselling rounds', detail: row.admission_routes.join(' / ') },
    { when: 'Before term', title: 'Seat acceptance + fee', detail: 'Late payment may forfeit seat' },
  ];
}

function defaultCityLife(row: CollegeCatalogueRow): string {
  const city = row.city.split(',')[0];
  return `${city}: budget shared room ₹6–12k/mo off-campus (illustrative); campus mess usually mandatory year 1. Factor travel home in true-cost — set pocket money in Profile.`;
}

function defaultTrust(row: CollegeCatalogueRow): string[] {
  return [
    `${row.accreditation} — verify current cycle on official site.`,
    `NIRF rank #${row.nirf_rank} (reference; methodology on nirfindia.org).`,
    `Placement data: ${row.source} — insist on department PDF, not marketing slide.`,
    'No pay-to-rank: CampusRoute does not sell higher visibility.',
  ];
}

const DOSSIER_BY_ID: Record<string, Omit<CollegeDossier, 'branch_intake' | 'branch_details' | 'category_cutoffs' | 'official_sources' | 'scholarship_schemes' | 'admission_milestones' | 'city_life' | 'trust_notes' | 'document_checklist' | 'higher_studies_opt_out_note'> & { branch_intake?: BranchIntakeRow[] }> = {
  'iit-roorkee': {
    overview:
      'IIT Roorkee is among India’s oldest engineering institutes (est. 1847, IIT status 2001). Strong in civil, electronics and CSE with national-level research labs and a large north-campus township in Uttarakhand.',
    established: 1847,
    campus_area: '~365 acres · Roorkee & satellite units',
    ug_seats_approx: 1_350,
    website: 'https://www.iitr.ac.in',
    email_contact: 'ask.iitr@ac.in (verify on official site)',
    admission_steps: [
      'Clear JEE Main & qualify for JEE Advanced.',
      'Appear in JEE Advanced and obtain an All India Rank (AIR).',
      'Register on JoSAA / CSAB portal with Aadhaar & category certificates.',
      'Fill choice filling — branch + IIT order; lock choices before deadline.',
      'Accept seat when allotted; report to IIT Roorkee with fee & documents.',
    ],
    counselling_body: 'JoSAA (Joint Seat Allocation Authority)',
    application_window: 'Typically June–July after JEE Advanced result · verify JoSAA calendar',
    scholarships: 'Income-based tuition waivers, SC/ST concessions, institute merit-cum-means — check IITR BWC portal.',
    hostel_life: 'Separate boys/girls hostels, mess on campus, annual hostel+mess ~₹2–2.5L band (illustrative).',
    notable_recruiters: ['Google', 'Microsoft', 'Qualcomm', 'DE Shaw', 'Adobe', 'Core sector PSUs'],
    facilities: ['Central library', 'Supercomputer (PARAM)', 'Incubation centre', 'Sports complex', 'Hospital'],
    accreditations_extra: 'Institute of National Importance · NBA on select programs',
    branch_intake: [
      { branch: 'B.Tech CSE', seats: 120, latest_cutoff: 'JoSAA 2025 closing AIR ~12,000 (Gen · demo)' },
      { branch: 'B.Tech ECE', seats: 110, latest_cutoff: 'Closing AIR ~20,100 (Gen · demo)' },
      { branch: 'B.Tech Mechanical', seats: 130, latest_cutoff: 'Closing AIR ~28,200 (Gen · demo)' },
      { branch: 'B.Tech Civil', seats: 100, latest_cutoff: 'Closing AIR ~35,000 band (Gen · demo)' },
    ],
  },
  'nit-trichy': {
    overview: 'NIT Trichy is a top NIT for CSE/ECE placements and research; large residential campus in Tamil Nadu.',
    established: 1964,
    campus_area: '~800 acres',
    ug_seats_approx: 1_050,
    website: 'https://www.nitt.edu',
    email_contact: 'admissions@nitt.edu',
    admission_steps: [
      'Qualify JEE Main and obtain percentile / rank.',
      'Register on JoSAA with home-state vs other-state quota awareness.',
      'Choice filling for NIT+ branches; lock choices.',
      'Seat acceptance and provisional admission at NIT Trichy.',
    ],
    counselling_body: 'JoSAA',
    application_window: 'June–July (illustrative)',
    scholarships: 'National Scholarship Portal + institute fee waiver for eligible categories.',
    hostel_life: 'Mandatory hostel for most first-year students; mess rebate options.',
    notable_recruiters: ['Amazon', 'Texas Instruments', 'Caterpillar', 'Ashok Leyland'],
    facilities: ['Central library', 'FAB lab', 'Indoor stadium', 'Medical centre'],
    accreditations_extra: 'Institute of National Importance',
  },
  'bits-pilani': {
    overview: 'BITS Pilani is a private deemed university with campuses at Pilani, Goa and Hyderabad; BITSAT-driven admissions.',
    established: 1964,
    campus_area: 'Multi-campus (Pilani flagship ~1,050 acres)',
    ug_seats_approx: 2_400,
    website: 'https://www.bits-pilani.ac.in',
    email_contact: 'admissions@pilani.bits-pilani.ac.in',
    admission_steps: [
      'Register for BITSAT on bitsadmission.com.',
      'Take BITSAT (online CBT).',
      'Submit 12th marks; attend iterations / seat acceptance on admission portal.',
    ],
    counselling_body: 'BITS admission office (no JoSAA)',
    application_window: 'BITSAT registration Jan–Apr; exam May–June (typical)',
    scholarships: 'Merit and need-based; check BITS brochure.',
    hostel_life: 'On-campus residence; mess plans per campus.',
    notable_recruiters: ['Microsoft', 'Goldman Sachs', 'Meta', 'Flipkart'],
    facilities: ['Practice school (internships)', 'Innovation garage', 'Sports'],
    accreditations_extra: 'NAAC A · UGC deemed',
  },
};

function defaultDossier(row: CollegeCatalogueRow): CollegeDossier {
  const trends = trendsForCollege(row.id);
  const latest = trends?.cutoffs.at(-1);
  const metric = trends?.cutoff_metric ?? 'rank';
  const unit = cutoffUnitLabel(metric);
  const genCse = latest?.cse ?? 5000;

  const branch_intake: BranchIntakeRow[] = row.programs.slice(0, 4).map((p, i) => {
    const cutoffVal =
      latest && i === 0
        ? formatCutoffValue(metric, latest.cse)
        : latest && i === 1
          ? formatCutoffValue(metric, latest.ece)
          : latest
            ? formatCutoffValue(metric, latest.mechanical)
            : '—';
    return {
      branch: p,
      seats: 80 + i * 20,
      latest_cutoff: latest ? `2025 closing ${cutoffVal} ${unit} (illustrative)` : 'See official bulletin',
    };
  });

  const existing = DOSSIER_BY_ID[row.id];

  return {
    overview:
      existing?.overview ??
      `${row.short_name} offers ${row.programs.slice(0, 2).join(' & ')} and more. Verify all numbers with the institute’s latest prospectus.`,
    established: existing?.established ?? 1990,
    campus_area: existing?.campus_area ?? row.city,
    ug_seats_approx: existing?.ug_seats_approx ?? 900,
    website: existing?.website ?? 'https://example.edu (verify)',
    email_contact: existing?.email_contact ?? 'admissions desk via official website',
    admission_steps: existing?.admission_steps ?? [
      `Meet eligibility: PCM ≥ ${row.pcm_min_pct}%, primary exam ${row.primary_entrance}.`,
      `Apply through ${row.admission_routes.join(' / ')}.`,
      'Attend counselling / seat acceptance as per institute calendar.',
      'Pay admission fee and report with documents.',
    ],
    counselling_body: existing?.counselling_body ?? row.admission_routes.join(', '),
    application_window: existing?.application_window ?? 'See institute admission calendar 2025',
    scholarships: existing?.scholarships ?? 'Merit / category scholarships per institute policy.',
    hostel_life:
      existing?.hostel_life ??
      `Hostel + mess ~₹${row.hostel_lakhs}L over 4y in our cost model — verify billed fees on campus.`,
    notable_recruiters: existing?.notable_recruiters ?? ['IT services', 'Core engineering', 'Startups'],
    facilities: existing?.facilities ?? ['Library', 'Labs', 'Hostel', 'Sports'],
    branch_intake: existing?.branch_intake ?? branch_intake,
    accreditations_extra: existing?.accreditations_extra ?? row.accreditation,
    branch_details: buildBranchDetails(row),
    category_cutoffs: buildCategoryCutoffs(row, metric, genCse),
    official_sources: defaultOfficialSources(row),
    scholarship_schemes: defaultScholarships(row),
    admission_milestones: defaultMilestones(row),
    city_life: defaultCityLife(row),
    trust_notes: defaultTrust(row),
    document_checklist: DOC_CHECKLIST,
    higher_studies_opt_out_note:
      row.placement_methodology.includes('opt-out') || row.placement_methodology.includes('excludes')
        ? row.placement_methodology
        : `Institute headline placement rate may exclude higher-studies opt-outs — ask T&P cell for UG-only sheet.`,
  };
}

export function dossierForCollege(collegeId: string): CollegeDossier | undefined {
  const row = COLLEGE_CATALOGUE.find((c) => c.id === collegeId);
  if (!row) return undefined;
  return defaultDossier(row);
}

/** Same entrance or tier — peers to open without leaving CampusRoute. */
export function similarColleges(collegeId: string, limit = 3): CollegeCatalogueRow[] {
  const base = COLLEGE_CATALOGUE.find((c) => c.id === collegeId);
  if (!base) return [];
  return COLLEGE_CATALOGUE.filter(
    (c) =>
      c.id !== collegeId &&
      (c.primary_entrance === base.primary_entrance ||
        c.institute_tier === base.institute_tier ||
        c.ownership === base.ownership)
  )
    .sort((a, b) => a.nirf_rank - b.nirf_rank)
    .slice(0, limit);
}

export function buildFamilySummaryText(input: {
  name: string;
  admissionPct: number;
  totalLakhs: number;
  gapLakhs: number;
  gapMonthlyInr: number;
  medianLpa: number;
  primaryExam: string;
}): string {
  return [
    `CampusRoute family summary — ${input.name}`,
    `Admission fit (demo): ${input.admissionPct}% · Exam: ${input.primaryExam}`,
    `Full 4-year cost (profile): ₹${input.totalLakhs}L`,
    `Funding gap after savings: ₹${input.gapLakhs}L (~₹${input.gapMonthlyInr.toLocaleString('en-IN')}/mo over 4y)`,
    `Median placement signal: ${input.medianLpa} LPA (verify branch PDF)`,
    'Illustrative only — confirm fees & cutoffs on official sites before paying seat fee.',
  ].join('\n');
}
