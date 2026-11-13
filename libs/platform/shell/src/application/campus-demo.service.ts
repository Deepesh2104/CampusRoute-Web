import { Injectable, signal } from '@angular/core';
import type {
  AffordabilityResult,
  ChatMessage,
  College,
  PlannerItem,
  PlannerStage,
  RoiResult,
} from '../domain/campus-overview.model';
import { CAMPUS_OVERVIEW_SEED } from '../domain/campus-overview.seed';

const MISCELLANEOUS_LAKHS = 3.8;

@Injectable({ providedIn: 'root' })
export class CampusDemoService {
  readonly overview = CAMPUS_OVERVIEW_SEED;

  readonly planner = signal<PlannerItem[]>([
    { college_id: 'vit-vellore', status: 'Shortlisted', next_action: 'Check entrance dates' },
    { college_id: 'rvce', status: 'Researching', next_action: 'Review COMEDK cut-offs' },
  ]);

  readonly chatHistory = signal<ChatMessage[]>([
    {
      id: 'seed-1',
      role: 'user',
      content: 'Which is the lower-cost path between VIT and RVCE?',
      citations: [],
      created_at: '2026-11-13T04:37:56.299Z',
    },
    {
      id: 'seed-2',
      role: 'assistant',
      content:
        'Between **VIT Vellore** and **RVCE Bengaluru**, **RVCE is the lower-cost path** based on the dataset.\n\n' +
        '- **VIT:** ₹14.8L tuition + ₹3.1L hostel = **₹17.9L**\n' +
        '- **RVCE:** ₹10.8L tuition + ₹2.2L hostel = **₹13.0L**\n\n' +
        '**RVCE is lower by about ₹4.9L** on listed tuition + hostel.',
      citations: ['Seeded college comparison rows', 'True Cost estimate fields'],
      created_at: '2026-11-13T04:38:02.073Z',
    },
  ]);

  collegeById(id: string): College | undefined {
    return this.overview.colleges.find((c) => c.id === id);
  }

  totalCostLakhs(college: College): number {
    return Math.round((college.tuition_lakhs + college.hostel_lakhs + MISCELLANEOUS_LAKHS) * 10) / 10;
  }

  isShortlisted(collegeId: string): boolean {
    return this.planner().some((p) => p.college_id === collegeId && p.status === 'Shortlisted');
  }

  shortlistCollege(collegeId: string): void {
    const list = this.planner();
    const existing = list.find((p) => p.college_id === collegeId);
    if (existing) {
      this.planner.set(
        list.map((p) =>
          p.college_id === collegeId
            ? { ...p, status: 'Shortlisted', next_action: 'Check entrance dates' }
            : p
        )
      );
      return;
    }
    this.planner.set([
      ...list,
      { college_id: collegeId, status: 'Shortlisted', next_action: 'Check entrance dates' },
    ]);
  }

  updatePlannerStatus(collegeId: string, status: PlannerStage, nextAction?: string): void {
    this.planner.set(
      this.planner().map((p) =>
        p.college_id === collegeId
          ? { ...p, status, next_action: nextAction ?? p.next_action }
          : p
      )
    );
  }

  simulateAffordability(
    collegeId: string,
    monthlyIncome: number,
    savings: number,
    existingEmi: number
  ): AffordabilityResult {
    const college = this.collegeById(collegeId) ?? this.overview.colleges[0];
    const total = this.totalCostLakhs(college);
    const fundingGap = Math.max(0, Math.round((total - savings / 100_000) * 10) / 10);
    const stressScore = Math.min(
      98,
      Math.max(8, Math.round((fundingGap / total) * 65 + (existingEmi / monthlyIncome) * 45))
    );
    let stressLevel = 'Low';
    if (stressScore > 30) stressLevel = 'Watch';
    if (stressScore > 60) stressLevel = 'High';

    return {
      total_cost_lakhs: total,
      funding_gap_lakhs: fundingGap,
      stress_score: stressScore,
      stress_level: stressLevel,
      monthly_burden_lakhs: Math.round((fundingGap / 4) * 10) / 10,
      notes: [
        'A 10% fee increase would add approximately ₹' + (total * 0.1).toFixed(1) + 'L to the four-year plan.',
        'Scholarships or a lower-cost campus could reduce the gap before borrowing.',
      ],
    };
  }

  simulateRoi(collegeId: string, loanShare: number): RoiResult {
    const college = this.collegeById(collegeId) ?? this.overview.colleges[0];
    const total = this.totalCostLakhs(college);
    const invested = total * (loanShare / 100 + (100 - loanShare) / 100);
    const median = college.median_placement_lpa;
    const roiMultiple = Math.round((median * 4.2) / invested * 10) / 10;

    return {
      total_investment_lakhs: total,
      median_salary_lpa: median,
      break_even_months: Math.round((invested / median) * 12),
      roi_multiple: roiMultiple || 1.6,
      sample_size: college.seats,
      disclaimer:
        'Indicative model based on reported batch medians — not a placement or salary guarantee.',
    };
  }

  async sendCounsellorMessage(message: string): Promise<void> {
    const trimmed = message.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmed,
      citations: [],
      created_at: new Date().toISOString(),
    };
    this.chatHistory.update((h) => [...h, userMsg]);

    await new Promise((r) => setTimeout(r, 600));

    const reply = this.buildCounsellorReply(trimmed);
    const assistantMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: reply.text,
      citations: reply.citations,
      created_at: new Date().toISOString(),
    };
    this.chatHistory.update((h) => [...h, assistantMsg]);
  }

  private buildCounsellorReply(message: string): { text: string; citations: string[] } {
    const lower = message.toLowerCase();
    if (lower.includes('vit') && lower.includes('rvce')) {
      return {
        text:
          'Between **VIT Vellore** and **RVCE Bengaluru**, **RVCE is the lower-cost path** based on the dataset.\n\n' +
          '- **VIT:** ₹14.8L tuition + ₹3.1L hostel = **₹17.9L**\n' +
          '- **RVCE:** ₹10.8L tuition + ₹2.2L hostel = **₹13.0L**\n\n' +
          '**RVCE is lower by about ₹4.9L** on listed tuition + hostel.',
        citations: ['Seeded college comparison rows', 'True Cost estimate fields'],
      };
    }
    if (lower.includes('placement') || lower.includes('salary')) {
      return {
        text:
          'Treat placement numbers as **signals**, not guarantees. Compare **median** LPA, sample size, and the **source** field on each college row. BITS and RVCE show stronger medians in this seed.',
        citations: ['NIRF + placement reports in seed data'],
      };
    }
    if (lower.includes('apply') || lower.includes('before applying')) {
      return {
        text:
          'Before fees: shortlist **two** colleges in Explore, run **Money & ROI** with your household numbers, then move Planner items to **Applied** only when entrance dates are verified.',
        citations: ['Planner defaults', 'True Cost engine'],
      };
    }
    if (lower.includes('software') || lower.includes('embedded') || lower.includes('career')) {
      return {
        text:
          'Software paths show the widest salary band; embedded is steadier with strong hardware hubs in Bengaluru and Chennai. Open Home → “Three routes worth exploring” for demand tags.',
        citations: ['Career path cards in overview'],
      };
    }
    const looksLikeNoise = message.length < 4 || !/[a-z]{3,}/i.test(lower);
    if (looksLikeNoise) {
      return {
        text:
          `Hi Aarav — I'm not sure what you want to know from “${message}”. If you want, I can help with any of these based on the dataset:\n` +
          '- compare colleges\n' +
          '- estimate total cost in INR lakhs\n' +
          '- check admission routes\n' +
          '- compare placements\n' +
          '- suggest colleges for Software / Data & AI / Embedded Systems\n\n' +
          'Just send your question in one line.',
        citations: ['Seeded college comparison rows'],
      };
    }
    return {
      text:
        'I only answer from the curated CampusRoute demo dataset. Try: “Compare VIT and RVCE cost” or “How should I read placement data?”',
      citations: ['Seeded college comparison rows'],
    };
  }
}
