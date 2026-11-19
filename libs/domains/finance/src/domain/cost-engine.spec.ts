import { runAffordability, runRoi, totalCostLakhs } from './cost-engine';

describe('cost-engine', () => {
  it('totalCostLakhs includes non-tuition lines', () => {
    const total = totalCostLakhs(14.8, 3.1, { pocketMoneyMonthlyInr: 5_000, lifestyleBand: 'typical' });
    expect(total).toBeGreaterThan(14.8 + 3.1);
  });

  it('runAffordability returns stress tier', () => {
    const result = runAffordability({
      tuition_lakhs: 25,
      hostel_lakhs: 3,
      monthlyIncome: 80_000,
      savingsInr: 200_000,
      existingEmi: 15_000,
    });
    expect(['Low', 'Watch', 'High']).toContain(result.stress_level);
    expect(result.notes.length).toBeGreaterThan(0);
  });

  it('runRoi compares placement band to cost', () => {
    const result = runRoi({
      totalCostLakhs: 20,
      medianPlacementLpa: 10,
      loanSharePct: 50,
    });
    expect(result.roi_multiple).toBeGreaterThan(0);
    expect(result.headline).toBeTruthy();
  });
});
