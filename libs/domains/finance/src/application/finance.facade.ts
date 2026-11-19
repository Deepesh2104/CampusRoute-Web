import { Injectable } from '@angular/core';
import {
  COLLEGE_CATALOGUE,
  estimateTrueCostBreakdown,
  sumTrueCostLakhs,
  trueCostLines,
  type LifestyleBand,
  type TrueCostOptions,
} from '@campusroute/shared-models';
import { runAffordability, runRoi, totalCostLakhs } from '../domain/cost-engine';

@Injectable({ providedIn: 'root' })
export class FinanceFacade {
  readonly colleges = COLLEGE_CATALOGUE;

  collegeById(id: string) {
    return this.colleges.find((c) => c.id === id) ?? this.colleges[0];
  }

  breakdownForCollege(collegeId: string, options?: TrueCostOptions) {
    const c = this.collegeById(collegeId);
    const breakdown = estimateTrueCostBreakdown(c.tuition_lakhs, c.hostel_lakhs, options);
    return {
      breakdown,
      lines: trueCostLines(breakdown, c.source, c.confidence),
      total: sumTrueCostLakhs(breakdown),
    };
  }

  totalForCollegeId(collegeId: string, options?: TrueCostOptions): number {
    const c = this.collegeById(collegeId);
    return totalCostLakhs(c.tuition_lakhs, c.hostel_lakhs, options);
  }

  affordability(
    collegeId: string,
    income: number,
    savings: number,
    emi: number,
    costOptions?: TrueCostOptions
  ) {
    const c = this.collegeById(collegeId);
    return runAffordability({
      tuition_lakhs: c.tuition_lakhs,
      hostel_lakhs: c.hostel_lakhs,
      costOptions,
      monthlyIncome: income,
      savingsInr: savings,
      existingEmi: emi,
    });
  }

  roi(collegeId: string, loanShare: number, costOptions?: TrueCostOptions) {
    const c = this.collegeById(collegeId);
    return runRoi({
      totalCostLakhs: this.totalForCollegeId(collegeId, costOptions),
      medianPlacementLpa: c.median_placement_lpa,
      loanSharePct: loanShare,
    });
  }

  defaultCostOptions(pocketMonthly: number, lifestyle: LifestyleBand): TrueCostOptions {
    return { pocketMoneyMonthlyInr: pocketMonthly, lifestyleBand: lifestyle };
  }
}
