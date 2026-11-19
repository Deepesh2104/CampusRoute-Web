export type PlacementYearPoint = {
  year: number;
  median_lpa: number;
  placed_pct: number;
};

export type CutoffMetric = 'air' | 'percentile' | 'score' | 'rank';

export type CutoffYearPoint = {
  year: number;
  cse: number;
  ece: number;
  mechanical: number;
};

export type CollegeTrendSeries = {
  placement: PlacementYearPoint[];
  cutoff_metric: CutoffMetric;
  cutoff_label: string;
  cutoffs: CutoffYearPoint[];
  cutoff_source: string;
};

const Y = [2021, 2022, 2023, 2024, 2025] as const;

function placementSeries(
  median2025: number,
  rate2025: number,
  drift = 0.8
): PlacementYearPoint[] {
  return Y.map((year, i) => {
    const t = i / (Y.length - 1);
    const median = Math.round((median2025 - drift * (1 - t) * 3.5) * 10) / 10;
    const placed = Math.min(98, Math.round(rate2025 - (1 - t) * 4));
    return { year, median_lpa: median, placed_pct: placed };
  });
}

/** Illustrative 5-year demo trends — verify with official brochures before decisions. */
export const COLLEGE_TRENDS: Record<string, CollegeTrendSeries> = {
  'iit-roorkee': {
    placement: placementSeries(22.8, 92, 1.1),
    cutoff_metric: 'air',
    cutoff_label: 'Closing AIR (JoSAA · CSE/ECE/Mech)',
    cutoffs: [
      { year: 2021, cse: 14_200, ece: 22_400, mechanical: 31_500 },
      { year: 2022, cse: 13_600, ece: 21_800, mechanical: 30_200 },
      { year: 2023, cse: 12_900, ece: 21_100, mechanical: 29_400 },
      { year: 2024, cse: 12_400, ece: 20_600, mechanical: 28_800 },
      { year: 2025, cse: 12_000, ece: 20_100, mechanical: 28_200 },
    ],
    cutoff_source: 'JoSAA opening/closing · illustrative CSE band',
  },
  'nit-trichy': {
    placement: placementSeries(18.5, 90, 0.9),
    cutoff_metric: 'air',
    cutoff_label: 'Closing AIR (JoSAA · Home state OS)',
    cutoffs: [
      { year: 2021, cse: 3_800, ece: 6_200, mechanical: 9_400 },
      { year: 2022, cse: 3_650, ece: 5_950, mechanical: 9_100 },
      { year: 2023, cse: 3_520, ece: 5_800, mechanical: 8_850 },
      { year: 2024, cse: 3_400, ece: 5_650, mechanical: 8_600 },
      { year: 2025, cse: 3_280, ece: 5_500, mechanical: 8_400 },
    ],
    cutoff_source: 'JoSAA · demo ranks; branch splits vary by quota',
  },
  'bits-pilani': {
    placement: placementSeries(16.4, 91, 0.7),
    cutoff_metric: 'score',
    cutoff_label: 'BITSAT score (Pilani campus · closing)',
    cutoffs: [
      { year: 2021, cse: 382, ece: 358, mechanical: 310 },
      { year: 2022, cse: 386, ece: 361, mechanical: 312 },
      { year: 2023, cse: 390, ece: 365, mechanical: 315 },
      { year: 2024, cse: 394, ece: 368, mechanical: 318 },
      { year: 2025, cse: 398, ece: 372, mechanical: 320 },
    ],
    cutoff_source: 'BITS admission report · illustrative',
  },
  'vit-vellore': {
    placement: placementSeries(8.5, 88, 0.35),
    cutoff_metric: 'rank',
    cutoff_label: 'VITEEE rank (CSE category)',
    cutoffs: [
      { year: 2021, cse: 4_800, ece: 9_200, mechanical: 18_500 },
      { year: 2022, cse: 4_650, ece: 8_950, mechanical: 17_900 },
      { year: 2023, cse: 4_500, ece: 8_700, mechanical: 17_400 },
      { year: 2024, cse: 4_350, ece: 8_450, mechanical: 16_900 },
      { year: 2025, cse: 4_200, ece: 8_200, mechanical: 16_500 },
    ],
    cutoff_source: 'VIT counselling · illustrative',
  },
  manipal: {
    placement: placementSeries(11.2, 86, 0.5),
    cutoff_metric: 'rank',
    cutoff_label: 'MET rank (MIT Manipal)',
    cutoffs: [
      { year: 2021, cse: 5_200, ece: 8_800, mechanical: 14_200 },
      { year: 2022, cse: 5_050, ece: 8_550, mechanical: 13_900 },
      { year: 2023, cse: 4_900, ece: 8_300, mechanical: 13_600 },
      { year: 2024, cse: 4_750, ece: 8_050, mechanical: 13_300 },
      { year: 2025, cse: 4_600, ece: 7_800, mechanical: 13_000 },
    ],
    cutoff_source: 'MET brochure · illustrative',
  },
  thapar: {
    placement: placementSeries(10.4, 84, 0.45),
    cutoff_metric: 'percentile',
    cutoff_label: 'JEE Main percentile (CSE window)',
    cutoffs: [
      { year: 2021, cse: 96.2, ece: 94.1, mechanical: 91.5 },
      { year: 2022, cse: 96.5, ece: 94.4, mechanical: 91.8 },
      { year: 2023, cse: 96.8, ece: 94.7, mechanical: 92.0 },
      { year: 2024, cse: 97.0, ece: 94.9, mechanical: 92.2 },
      { year: 2025, cse: 97.2, ece: 95.1, mechanical: 92.4 },
    ],
    cutoff_source: 'TIET matrix · illustrative',
  },
  amrita: {
    placement: placementSeries(9.1, 89, 0.4),
    cutoff_metric: 'rank',
    cutoff_label: 'AEEE rank (Coimbatore)',
    cutoffs: [
      { year: 2021, cse: 6_500, ece: 11_200, mechanical: 19_800 },
      { year: 2022, cse: 6_350, ece: 10_950, mechanical: 19_400 },
      { year: 2023, cse: 6_200, ece: 10_700, mechanical: 19_000 },
      { year: 2024, cse: 6_050, ece: 10_450, mechanical: 18_600 },
      { year: 2025, cse: 5_900, ece: 10_200, mechanical: 18_200 },
    ],
    cutoff_source: 'AEEE cutoffs · illustrative',
  },
  rvce: {
    placement: placementSeries(14.5, 94, 0.65),
    cutoff_metric: 'rank',
    cutoff_label: 'KCET rank (CSE · Karnataka)',
    cutoffs: [
      { year: 2021, cse: 820, ece: 1_450, mechanical: 3_200 },
      { year: 2022, cse: 780, ece: 1_380, mechanical: 3_050 },
      { year: 2023, cse: 740, ece: 1_320, mechanical: 2_920 },
      { year: 2024, cse: 710, ece: 1_260, mechanical: 2_800 },
      { year: 2025, cse: 680, ece: 1_200, mechanical: 2_680 },
    ],
    cutoff_source: 'KEA / KCET · illustrative',
  },
};

export function trendsForCollege(collegeId: string): CollegeTrendSeries | undefined {
  return COLLEGE_TRENDS[collegeId];
}

export function formatCutoffValue(metric: CutoffMetric, value: number): string {
  if (metric === 'percentile') return `${value}`;
  if (metric === 'score') return `${value}`;
  return value.toLocaleString('en-IN');
}

export function cutoffUnitLabel(metric: CutoffMetric): string {
  switch (metric) {
    case 'air':
      return 'AIR';
    case 'percentile':
      return 'percentile';
    case 'score':
      return 'score';
    default:
      return 'rank';
  }
}
