/** Four-year true cost lines — not just brochure tuition. */
export type TrueCostBreakdown = {
  tuition_lakhs: number;
  hostel_lakhs: number;
  exam_assignment_lakhs: number;
  lab_library_lakhs: number;
  books_device_lakhs: number;
  pocket_money_lakhs: number;
  lifestyle_social_lakhs: number;
  travel_home_lakhs: number;
  insurance_medical_lakhs: number;
  setup_buffer_lakhs: number;
};

export type TrueCostLine = {
  id: string;
  label: string;
  lakhs: number;
  meta: string;
};

export type LifestyleBand = 'lean' | 'typical' | 'active';

export type TrueCostOptions = {
  /** Monthly pocket money for 4 years (default ₹5,000). */
  pocketMoneyMonthlyInr?: number;
  lifestyleBand?: LifestyleBand;
};

const LIFESTYLE_MULT: Record<LifestyleBand, number> = {
  lean: 0.85,
  typical: 1,
  active: 1.25,
};

export function estimateTrueCostBreakdown(
  tuition_lakhs: number,
  hostel_lakhs: number,
  options: TrueCostOptions = {}
): TrueCostBreakdown {
  const band = options.lifestyleBand ?? 'typical';
  const mult = LIFESTYLE_MULT[band];
  const pocketMonthly = options.pocketMoneyMonthlyInr ?? 5_000;
  const pocket_money_lakhs = Math.round(((pocketMonthly * 48) / 100_000) * 10) / 10;

  const tier = tuition_lakhs >= 20 ? 1.15 : tuition_lakhs >= 14 ? 1.05 : 1;

  const exam_assignment_lakhs = Math.round(0.85 * tier * mult * 10) / 10;
  const lab_library_lakhs = Math.round(0.55 * tier * 10) / 10;
  const books_device_lakhs = Math.round(1.85 * mult * 10) / 10;
  const lifestyle_social_lakhs = Math.round(1.35 * mult * 10) / 10;
  const travel_home_lakhs = Math.round(1.65 * mult * 10) / 10;
  const insurance_medical_lakhs = Math.round(0.45 * 10) / 10;
  const setup_buffer_lakhs = Math.round(0.85 * mult * 10) / 10;

  return {
    tuition_lakhs,
    hostel_lakhs,
    exam_assignment_lakhs,
    lab_library_lakhs,
    books_device_lakhs,
    pocket_money_lakhs,
    lifestyle_social_lakhs,
    travel_home_lakhs,
    insurance_medical_lakhs,
    setup_buffer_lakhs,
  };
}

export function totalCostLakhs(
  tuition_lakhs: number,
  hostel_lakhs: number,
  options?: TrueCostOptions
): number {
  return sumTrueCostLakhs(estimateTrueCostBreakdown(tuition_lakhs, hostel_lakhs, options));
}

export function sumTrueCostLakhs(breakdown: TrueCostBreakdown): number {
  const values = Object.values(breakdown) as number[];
  return Math.round(values.reduce((a, b) => a + b, 0) * 10) / 10;
}

/** Spread funding gap across 48 months — student-friendly INR/month (not lakh/month). */
export function gapCoverMonthlyInr(gapLakhs: number): number {
  if (gapLakhs <= 0) return 0;
  return Math.round((gapLakhs * 100_000) / 48);
}

export type AffordabilityStressResult = {
  total_cost_lakhs: number;
  funding_gap_lakhs: number;
  stress_score: number;
  stress_level: 'Low' | 'Watch' | 'High';
  monthly_burden_lakhs: number;
  notes: string[];
};

export function runAffordabilityStress(
  tuition_lakhs: number,
  hostel_lakhs: number,
  monthlyIncome: number,
  savingsInr: number,
  existingEmi: number,
  costOptions?: TrueCostOptions
): AffordabilityStressResult {
  const breakdown = estimateTrueCostBreakdown(tuition_lakhs, hostel_lakhs, costOptions);
  const total = sumTrueCostLakhs(breakdown);
  const fundingGap = Math.max(0, Math.round((total - savingsInr / 100_000) * 10) / 10);
  const stressScore = Math.min(
    98,
    Math.max(8, Math.round((fundingGap / total) * 65 + (existingEmi / monthlyIncome) * 45))
  );
  let stressLevel: AffordabilityStressResult['stress_level'] = 'Low';
  if (stressScore > 30) stressLevel = 'Watch';
  if (stressScore > 60) stressLevel = 'High';

  const nonTuition =
    breakdown.exam_assignment_lakhs +
    breakdown.pocket_money_lakhs +
    breakdown.lifestyle_social_lakhs +
    breakdown.travel_home_lakhs;

  return {
    total_cost_lakhs: total,
    funding_gap_lakhs: fundingGap,
    stress_score: stressScore,
    stress_level: stressLevel,
    monthly_burden_lakhs: Math.round((fundingGap / 4) * 10) / 10,
    notes: [
      `Beyond tuition: ~₹${nonTuition.toFixed(1)}L on exams, pocket money, travel and lifestyle over 4 years.`,
      `A 10% tuition rise adds ~₹${(breakdown.tuition_lakhs * 0.1).toFixed(1)}L — ancillary fees often move with it.`,
      'Scholarships or a leaner lifestyle band reduce pressure before borrowing.',
    ],
  };
}

export function trueCostLines(
  breakdown: TrueCostBreakdown,
  source: string,
  confidence: string
): TrueCostLine[] {
  return [
    {
      id: 'tuition',
      label: 'Tuition & academic fees',
      lakhs: breakdown.tuition_lakhs,
      meta: `${source} · ${confidence} confidence`,
    },
    {
      id: 'hostel',
      label: 'Hostel + mess',
      lakhs: breakdown.hostel_lakhs,
      meta: 'Campus estimate 2025 · Medium confidence',
    },
    {
      id: 'exam',
      label: 'Exam, re-exam & assignment fees',
      lakhs: breakdown.exam_assignment_lakhs,
      meta: 'Lab kits, portals, photocopy · Planning band',
    },
    {
      id: 'lab',
      label: 'Lab, library & department charges',
      lakhs: breakdown.lab_library_lakhs,
      meta: 'Department estimate · Medium confidence',
    },
    {
      id: 'books',
      label: 'Books, laptop & study gear',
      lakhs: breakdown.books_device_lakhs,
      meta: '4-year device refresh assumed',
    },
    {
      id: 'pocket',
      label: 'Pocket money & daily spends',
      lakhs: breakdown.pocket_money_lakhs,
      meta: 'From your monthly pocket setting',
    },
    {
      id: 'lifestyle',
      label: 'Fashion, events & social',
      lakhs: breakdown.lifestyle_social_lakhs,
      meta: 'Lifestyle band · illustrative',
    },
    {
      id: 'travel',
      label: 'Travel home & local commute',
      lakhs: breakdown.travel_home_lakhs,
      meta: '2–3 home trips a year assumed',
    },
    {
      id: 'medical',
      label: 'Medical & insurance buffer',
      lakhs: breakdown.insurance_medical_lakhs,
      meta: 'Basic health cover · Planning assumption',
    },
    {
      id: 'setup',
      label: 'One-time setup & misc buffer',
      lakhs: breakdown.setup_buffer_lakhs,
      meta: 'Admission kit, deposits, surprises',
    },
  ];
}

export type StressMeaningInput = {
  campusName: string;
  medianLpa: number;
  placementRate: number;
  placementMethodology: string;
  totalCostLakhs: number;
  fundingGapLakhs: number;
  stressLevel: AffordabilityStressResult['stress_level'];
};

/** Short “what this means” lines for stress card / simulator (rule-based, not AI). */
export function buildStressMeaningLines(input: StressMeaningInput): string[] {
  const monthly = gapCoverMonthlyInr(input.fundingGapLakhs);
  const payback = input.medianLpa > 0 ? Math.round((input.totalCostLakhs / input.medianLpa) * 10) / 10 : 0;
  return [
    `Family budget: after savings you still need about ₹${monthly.toLocaleString('en-IN')}/month across 4 years to close the gap — stress level ${input.stressLevel}.`,
    `Placement: ${input.campusName} reports median ${input.medianLpa} LPA and ${input.placementRate}% placed; median is the middle offer, not your branch guarantee. ${input.placementMethodology}`,
    payback > 0
      ? `Career ratio: full-life cost ₹${input.totalCostLakhs}L vs median ≈ ${payback} years of that package band — compare campuses, do not treat as a job promise.`
      : 'Career ratio: add placement data for payback context.',
  ];
}
