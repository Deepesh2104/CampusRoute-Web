import {

  estimateTrueCostBreakdown,

  gapCoverMonthlyInr,

  runAffordabilityStress,

  sumTrueCostLakhs,

  trueCostLines,

  type TrueCostLine,

  type TrueCostOptions,

} from '@campusroute/shared-models';

import type { DiscoverCollege } from './discover-college.model';
import { readLearnerAdmissionSnapshot } from '@campusroute/shared-util';
import { estimateAdmissionChance } from './admission-chance';



export type HouseholdAssumptions = {

  monthlyIncome: number;

  savingsInr: number;

  existingEmi: number;

};



export const DEFAULT_HOUSEHOLD: HouseholdAssumptions = {

  monthlyIncome: 115_000,

  savingsInr: 700_000,

  existingEmi: 12_000,

};



export type CollegeCompareCost = {

  college: DiscoverCollege;

  lines: TrueCostLine[];

  totalLakhs: number;

  tuitionHostelLakhs: number;

  beyondTuitionLakhs: number;

  affordability: ReturnType<typeof runAffordabilityStress>;

};



export function buildCollegeCompareCost(

  college: DiscoverCollege,

  costOptions: TrueCostOptions,

  household: HouseholdAssumptions

): CollegeCompareCost {

  const breakdown = estimateTrueCostBreakdown(college.tuition_lakhs, college.hostel_lakhs, costOptions);

  const lines = trueCostLines(breakdown, college.source, college.confidence);

  const totalLakhs = sumTrueCostLakhs(breakdown);

  const tuitionHostelLakhs = Math.round((breakdown.tuition_lakhs + breakdown.hostel_lakhs) * 10) / 10;

  const beyondTuition = Math.round((totalLakhs - tuitionHostelLakhs) * 10) / 10;

  const affordability = runAffordabilityStress(

    college.tuition_lakhs,

    college.hostel_lakhs,

    household.monthlyIncome,

    household.savingsInr,

    household.existingEmi,

    costOptions

  );

  return {

    college,

    lines,

    totalLakhs,

    tuitionHostelLakhs,

    beyondTuitionLakhs: beyondTuition,

    affordability,

  };

}



export type CompareInsightParameter =
  | 'decision'
  | 'full_cost'
  | 'family_budget'
  | 'placement'
  | 'campus_life'
  | 'roi_payback'
  | 'admission_fit'
  | 'trade_off'
  | 'goal'
  | 'action_plan'
  | 'confidence';

export type CompareInsight = {
  id: string;
  parameter: CompareInsightParameter;
  label: string;
  headline: string;
  body: string;
  bullets?: string[];
  winner?: string;
  tone: 'insight' | 'caution' | 'career' | 'neutral';
};

export type CompareCollegeScorecard = {
  id: string;
  name: string;
  totalLakhs: number;
  gapLakhs: number;
  gapMonthlyInr: number;
  stress: number;
  medianLpa: number;
  placedPct: number;
  paybackYears: number;
  beyondTuitionLakhs: number;
  admissionPct: number;
  costPerLpa: number;
};



export type CompareDecisionPick = {
  cost: string;
  gap: string;
  placement: string;
  roi: string;
  admission: string;
  planningConfidence: number;
  leanPick: string;
};



export function buildCompareDecisionPicks(rows: CollegeCompareCost[]): CompareDecisionPick {

  const byCost = [...rows].sort((a, b) => a.totalLakhs - b.totalLakhs)[0];

  const byGap = [...rows].sort((a, b) => a.affordability.funding_gap_lakhs - b.affordability.funding_gap_lakhs)[0];

  const byPlace = [...rows].sort((a, b) => b.college.median_placement_lpa - a.college.median_placement_lpa)[0];
  const byRoi = [...rows].sort(
    (a, b) =>
      a.totalLakhs / Math.max(0.1, a.college.median_placement_lpa) -
      b.totalLakhs / Math.max(0.1, b.college.median_placement_lpa)
  )[0];
  const learner = readLearnerAdmissionSnapshot();
  const byAdm = [...rows]
    .map((r) => ({ row: r, chance: estimateAdmissionChance(r.college, learner) }))
    .sort((a, b) => b.chance.headline_pct - a.chance.headline_pct)[0];

  const sameWinner =

    byCost.college.id === byGap.college.id && byGap.college.id === byPlace.college.id;

  const avgStress = Math.round(rows.reduce((s, r) => s + r.affordability.stress_score, 0) / rows.length);

  let confidence = Math.max(35, Math.min(92, 88 - avgStress / 2 + (sameWinner ? 12 : 0)));



  let leanPick: string;

  if (sameWinner) {

    leanPick = `${byCost.college.short_name} — cost, family gap and placement signal align in this compare set.`;

  } else if (byCost.college.id === byGap.college.id) {

    leanPick = `${byCost.college.short_name} for wallet; weigh ${byPlace.college.short_name} if placement upside matters more than ₹${Math.round((byPlace.totalLakhs - byCost.totalLakhs) * 10) / 10}L extra full-life cost.`;

  } else {

    leanPick = `${byGap.college.short_name} eases family pressure; ${byPlace.college.short_name} leads packages — pick based on rank realism and backup plan.`;

  }



  return {
    cost: byCost.college.short_name,
    gap: byGap.college.short_name,
    placement: byPlace.college.short_name,
    roi: byRoi.college.short_name,
    admission: byAdm.row.college.short_name,
    planningConfidence: confidence,
    leanPick,
  };
}

export function buildCompareScorecard(rows: CollegeCompareCost[]): CompareCollegeScorecard[] {
  const learner = readLearnerAdmissionSnapshot();
  return rows.map((r) => {
    const payback =
      r.college.median_placement_lpa > 0
        ? Math.round((r.totalLakhs / r.college.median_placement_lpa) * 10) / 10
        : 0;
    const adm = estimateAdmissionChance(r.college, learner);
    return {
      id: r.college.id,
      name: r.college.short_name,
      totalLakhs: r.totalLakhs,
      gapLakhs: r.affordability.funding_gap_lakhs,
      gapMonthlyInr: gapCoverMonthlyInr(r.affordability.funding_gap_lakhs),
      stress: r.affordability.stress_score,
      medianLpa: r.college.median_placement_lpa,
      placedPct: r.college.placement_rate,
      paybackYears: payback,
      beyondTuitionLakhs: r.beyondTuitionLakhs,
      admissionPct: adm.headline_pct,
      costPerLpa: Math.round((r.totalLakhs / Math.max(0.1, r.college.median_placement_lpa)) * 10) / 10,
    };
  });
}



/** Grounded, rule-based insights — counsellor / AI can extend later. */

export function buildCompareInsights(rows: CollegeCompareCost[], learnerGoal?: string): CompareInsight[] {

  if (rows.length < 2) return [];



  const picks = buildCompareDecisionPicks(rows);

  const byCost = [...rows].sort((a, b) => a.totalLakhs - b.totalLakhs);

  const cheapest = byCost[0];

  const priciest = byCost[byCost.length - 1];

  const delta = Math.round((priciest.totalLakhs - cheapest.totalLakhs) * 10) / 10;



  const byGap = [...rows].sort((a, b) => a.affordability.funding_gap_lakhs - b.affordability.funding_gap_lakhs);

  const lowestGap = byGap[0];

  const worstGap = byGap[byGap.length - 1];



  const byPlacement = [...rows].sort((a, b) => b.college.median_placement_lpa - a.college.median_placement_lpa);

  const topPay = byPlacement[0];

  const paybackYears = Math.round((topPay.totalLakhs / topPay.college.median_placement_lpa) * 10) / 10;

  const monthlyCover = gapCoverMonthlyInr(lowestGap.affordability.funding_gap_lakhs);



  const out: CompareInsight[] = [];



  out.push({

    id: 'decision',

    parameter: 'decision',

    label: 'Decision lens',

    headline: picks.leanPick,

    body:

      'This is not “which college is best overall” — it is which trade-off fits your rank, family budget and career target. Use the three chips (cost · gap · placement) as separate answers, then read Placement and Family budget below before you finalise.',

    winner: picks.cost === picks.gap && picks.gap === picks.placement ? picks.cost : undefined,

    tone: 'neutral',

  });



  out.push({

    id: 'full_cost',

    parameter: 'full_cost',

    label: 'Full cost',

    headline: `${cheapest.college.short_name} is lightest on the full 4-year bill (₹${cheapest.totalLakhs}L).`,

    body: `Brochure fees hide ₹${cheapest.beyondTuitionLakhs}L–₹${priciest.beyondTuitionLakhs}L of “campus life” spend (exams, pocket money, travel, gear) across these options. ${cheapest.college.short_name} saves about ₹${delta}L vs ${priciest.college.short_name} on your current profile settings — that gap often equals one year of family EMI headroom.`,

    winner: cheapest.college.short_name,

    tone: 'insight',

  });



  const stressLine =

    lowestGap.affordability.stress_level === 'High'

      ? `Even ${lowestGap.college.short_name} sits at ${lowestGap.affordability.stress_level} stress — scholarships or a leaner lifestyle band should come before more loan.`

      : `All options sit in “${lowestGap.affordability.stress_level}” territory on your demo household numbers; ${lowestGap.college.short_name} still needs the least extra funding (₹${lowestGap.affordability.funding_gap_lakhs}L gap vs ₹${worstGap.affordability.funding_gap_lakhs}L at ${worstGap.college.short_name}).`;



  out.push({

    id: 'family_budget',

    parameter: 'family_budget',

    label: 'Family budget',

    headline: `Plan ~₹${monthlyCover.toLocaleString('en-IN')}/month for ${lowestGap.affordability.funding_gap_lakhs}L gap over 4 years (after savings).`,

    body: `Stress scores here (${rows.map((r) => `${r.college.short_name} ${r.affordability.stress_score}`).join(', ')}) mix gap size and existing EMIs — not a bank approval. ${stressLine} Tune income, savings and EMI in the simulator so this row matches your real household.`,

    winner: lowestGap.college.short_name,

    tone: lowestGap.affordability.stress_level === 'High' ? 'caution' : 'insight',

  });



  const placementPeers = rows

    .filter((r) => r.college.id !== topPay.college.id)

    .map((r) => `${r.college.short_name} (${r.college.median_placement_lpa} LPA, ${r.college.placement_rate}% placed)`)

    .join('; ');



  out.push({

    id: 'placement',

    parameter: 'placement',

    label: 'Placement',

    headline: `${topPay.college.short_name}: median ${topPay.college.median_placement_lpa} LPA, ${topPay.college.placement_rate}% placed (catalogue signal).`,

    body: `Median package is the middle campus offer — branch (CSE vs core) can swing hard. Methodology for ${topPay.college.short_name}: ${topPay.college.placement_methodology}`,
    bullets: [
      `Payback ratio (illustrative): ₹${topPay.totalLakhs}L full-life ÷ ${topPay.college.median_placement_lpa} LPA ≈ ${paybackYears} years — not take-home or a job promise.`,
      `Gross salary does not clear ₹${topPay.affordability.funding_gap_lakhs}L family gap in year one after tax, rent and EMIs.`,
      `Others here: ${placementPeers}.`,
      'Ask seniors for branch-wise PDFs — institute headline is only a starting point.',
    ],
    winner: topPay.college.short_name,
    tone: 'career',
  });



  if (picks.cost !== picks.placement) {

    const costRow = rows.find((r) => r.college.short_name === picks.cost)!;

    const placeRow = rows.find((r) => r.college.short_name === picks.placement)!;

    out.push({

      id: 'trade_off',

      parameter: 'trade_off',

      label: 'Trade-off',

      headline: 'Cheapest campus and strongest placement headline are not the same pick.',

      body: `${costRow.college.short_name} wins on money (₹${costRow.totalLakhs}L total, ₹${costRow.affordability.funding_gap_lakhs}L gap). ${placeRow.college.short_name} leads median pay (${placeRow.college.median_placement_lpa} LPA). Ask: “If I land ${placeRow.college.short_name}, can family carry ₹${Math.round((placeRow.affordability.funding_gap_lakhs - costRow.affordability.funding_gap_lakhs) * 10) / 10}L more gap?” If not, prioritise affordability and treat the other as a rank-based reach.`,

      tone: 'caution',

    });

  }



  if (learnerGoal?.trim()) {
    out.push({
      id: 'goal',
      parameter: 'goal',
      label: 'Your goal',
      headline: `You said: “${learnerGoal.trim()}”.`,
      body: 'Map that goal to branch-level placement splits and internships — not institute marketing alone.',
      bullets: [
        'Open each college dossier → Placement table + branch cutoffs before you trust headline medians.',
        'Keep one lower-cost backup if entrance ranks slip.',
        'Pair placement ambition with Family budget stress — a dream package cannot fix High stress alone.',
      ],
      tone: 'career',
    });
  }

  const scorecard = buildCompareScorecard(rows);
  const bestRoi = [...scorecard].sort((a, b) => a.paybackYears - b.paybackYears)[0];
  const heavyLife = [...scorecard].sort((a, b) => b.beyondTuitionLakhs - a.beyondTuitionLakhs)[0];

  out.push({
    id: 'campus_life',
    parameter: 'campus_life',
    label: 'Hidden campus spend',
    headline: `${heavyLife.name} needs the most outside-brochure spend (~₹${heavyLife.beyondTuitionLakhs}L over 4y).`,
    body: 'Exams, pocket money, travel and lifestyle move the needle as much as tuition — especially if lifestyle band is “active” on your profile.',
    bullets: scorecard.map(
      (s) =>
        `${s.name}: brochure+hostel vs full-life gap ₹${s.beyondTuitionLakhs}L extra · pocket/exam/travel bundled in true-cost engine.`
    ),
    tone: 'insight',
  });

  out.push({
    id: 'roi_payback',
    parameter: 'roi_payback',
    label: 'Cost vs earnings',
    headline: `${bestRoi.name} has the leanest payback ratio (~${bestRoi.paybackYears} years of median band vs ₹${bestRoi.totalLakhs}L full-life cost).`,
    body: 'Ratio = full-life cost ÷ median LPA — directional only, not tax-adjusted salary or branch guarantee.',
    bullets: scorecard.map(
      (s) =>
        `${s.name}: ₹${s.totalLakhs}L ÷ ${s.medianLpa} LPA ≈ ${s.paybackYears}y · cost/LPA index ${s.costPerLpa} (lower is lighter).`
    ),
    winner: bestRoi.name,
    tone: 'career',
  });

  const admRows = rows
    .map((r) => ({
      name: r.college.short_name,
      chance: estimateAdmissionChance(r.college, readLearnerAdmissionSnapshot()),
    }))
    .sort((a, b) => b.chance.headline_pct - a.chance.headline_pct);

  out.push({
    id: 'admission_fit',
    parameter: 'admission_fit',
    label: 'Admission fit (you)',
    headline: `${admRows[0].name} shows the highest exam-path fit (${admRows[0].chance.headline_pct}%) on your PCM/JEE profile.`,
    body: 'This is demo probability — verify with real ranks, cutoffs and counselling rules on each dossier.',
    bullets: admRows.map(
      (a) =>
        `${a.name}: ${a.chance.headline_pct}% headline · exam ${a.chance.exam_path_pct}% · MQ/higher-fee ${a.chance.management_path_pct}% · ${a.chance.status_label}.`
    ),
    winner: admRows[0].name,
    tone: admRows[0].chance.headline_pct >= 80 ? 'insight' : 'caution',
  });

  out.push({
    id: 'action_plan',
    parameter: 'action_plan',
    label: 'Next 7 days',
    headline: 'Turn this compare into a family conversation — not a WhatsApp forward.',
    body: 'Work top to bottom: money, admission realism, then placement story.',
    bullets: [
      `Run stress test for ${worstGap.college.short_name} (largest gap ₹${worstGap.affordability.funding_gap_lakhs}L) in Money simulator.`,
      `Open dossiers: ${rows.map((r) => r.college.short_name).join(', ')} → cutoff tables + placement 5y rows.`,
      `If ${picks.placement} is your stretch pick, confirm family can fund extra ₹${Math.round((rows.find((r) => r.college.short_name === picks.placement)!.affordability.funding_gap_lakhs - lowestGap.affordability.funding_gap_lakhs) * 10) / 10}L gap vs ${picks.gap}.`,
      'Lock a backup + a reach before counselling day — write both on paper.',
    ],
    tone: 'neutral',
  });

  out.push({
    id: 'confidence',
    parameter: 'confidence',
    label: 'Planning confidence',
    headline: `${picks.planningConfidence}% — grounded compare (not admission certainty).`,
    body: 'Confidence rises when cost, gap, placement and admission fit agree; it drops when trade-offs split or stress is High.',
    bullets: [
      'Validate fees on official sites; placement with department seniors; loans with your lender.',
      'Re-run compare after you change pocket money, lifestyle or PCM/JEE in Profile.',
      'Use Counsellor for a cited narrative before you pay seat acceptance fees.',
    ],
    tone: 'neutral',
  });

  return out;

}



/** @deprecated use buildCompareInsights */

export function buildCompareSuggestions(

  rows: CollegeCompareCost[],

  learnerGoal?: string

): { id: string; text: string; tone: CompareInsight['tone'] }[] {

  return buildCompareInsights(rows, learnerGoal).map((i) => ({

    id: i.id,

    text: `${i.headline} ${i.body}`,

    tone: i.tone,

  }));

}


