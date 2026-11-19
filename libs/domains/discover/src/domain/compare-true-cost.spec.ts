import { COLLEGE_CATALOGUE } from '@campusroute/shared-models';
import { gapCoverMonthlyInr } from '@campusroute/shared-models';
import {
  buildCollegeCompareCost,
  buildCompareInsights,
  DEFAULT_HOUSEHOLD,
} from './compare-true-cost';

describe('compare-true-cost', () => {
  const vit = COLLEGE_CATALOGUE.find((c) => c.id === 'vit-vellore')!;
  const rvce = COLLEGE_CATALOGUE.find((c) => c.id === 'rvce')!;

  it('totals exceed tuition+hostel alone', () => {
    const row = buildCollegeCompareCost(vit, { pocketMoneyMonthlyInr: 5_000, lifestyleBand: 'typical' }, DEFAULT_HOUSEHOLD);
    expect(row.totalLakhs).toBeGreaterThan(row.tuitionHostelLakhs);
    expect(row.beyondTuitionLakhs).toBeGreaterThan(0);
    expect(row.lines).toHaveLength(10);
  });

  it('formats monthly gap cover in INR', () => {
    expect(gapCoverMonthlyInr(21.2)).toBe(44_167);
  });

  it('emits parameterised insights including placement discussion', () => {
    const opts = { pocketMoneyMonthlyInr: 6_000, lifestyleBand: 'typical' as const };
    const rows = [vit, rvce].map((c) => buildCollegeCompareCost(c, opts, DEFAULT_HOUSEHOLD));
    const tips = buildCompareInsights(rows, 'Software engineer');
    expect(tips.some((t) => t.parameter === 'placement')).toBe(true);
    expect(tips.some((t) => t.parameter === 'confidence')).toBe(true);
    const placement = tips.find((t) => t.parameter === 'placement')!;
    expect(placement.body).toMatch(/median/i);
  });
});
