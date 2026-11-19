import {
  estimateTrueCostBreakdown,
  runAffordabilityStress,
  sumTrueCostLakhs,
  type AffordabilityStressResult,
  type TrueCostOptions,
} from '@campusroute/shared-models';

export type AffordabilityInput = {
  tuition_lakhs: number;
  hostel_lakhs: number;
  costOptions?: TrueCostOptions;
  monthlyIncome: number;
  savingsInr: number;
  existingEmi: number;
};

export type AffordabilityOutput = AffordabilityStressResult;

export type RoiInput = {
  totalCostLakhs: number;
  medianPlacementLpa: number;
  loanSharePct: number;
};

export type RoiOutput = {
  roi_multiple: number;
  payback_years: number;
  headline: string;
};

export function totalCostLakhs(
  tuition: number,
  hostel: number,
  options?: TrueCostOptions
): number {
  return sumTrueCostLakhs(estimateTrueCostBreakdown(tuition, hostel, options));
}

export function runAffordability(input: AffordabilityInput): AffordabilityOutput {
  return runAffordabilityStress(
    input.tuition_lakhs,
    input.hostel_lakhs,
    input.monthlyIncome,
    input.savingsInr,
    input.existingEmi,
    input.costOptions
  );
}

export function runRoi(input: RoiInput): RoiOutput {
  const invested = input.totalCostLakhs;
  const median = input.medianPlacementLpa;
  const roiMultiple = Math.round(((median * 4.2) / invested) * 10) / 10;
  const payback = Math.round((invested / median) * 10) / 10;
  return {
    roi_multiple: roiMultiple,
    payback_years: payback,
    headline:
      roiMultiple >= 1.2
        ? 'Earnings potential supports this full-life cost band.'
        : 'Stress-test scholarships, leaner spends, or lower-cost campuses.',
  };
}
