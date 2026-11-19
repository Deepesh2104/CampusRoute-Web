import { Injectable, inject, signal } from '@angular/core';
import { LearnerShortlistStore } from '@campusroute/shared-util';
import type {
  AffordabilityResult,
  ChatMessage,
  College,
  PlannerItem,
  PlannerStage,
  RoiResult,
} from '../domain/campus-overview.model';
import { CAMPUS_OVERVIEW_SEED } from '../domain/campus-overview.seed';

import {
  COLLEGE_CATALOGUE,
  runAffordabilityStress,
  totalCostLakhs as estimateCollegeTrueCost,
  type CollegeCatalogueRow,
  type TrueCostOptions,
} from '@campusroute/shared-models';

@Injectable({ providedIn: 'root' })
export class CampusDemoService {
  private readonly shortlist = inject(LearnerShortlistStore);

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

  readonly catalogueColleges = COLLEGE_CATALOGUE;

  collegeById(id: string): College | undefined {
    const fromSeed = this.overview.colleges.find((c) => c.id === id);
    if (fromSeed) return fromSeed;
    const row = COLLEGE_CATALOGUE.find((c) => c.id === id);
    return row ? catalogueRowToCollege(row) : undefined;
  }

  totalCostLakhs(college: College, options?: TrueCostOptions): number {
    return estimateCollegeTrueCost(college.tuition_lakhs, college.hostel_lakhs, options);
  }

  isShortlisted(collegeId: string): boolean {
    return this.shortlist.isShortlisted(collegeId);
  }

  shortlistCollege(collegeId: string): void {
    this.shortlist.toggle(collegeId);
    const list = this.planner();
    const existing = list.find((p) => p.college_id === collegeId);
    if (this.shortlist.isShortlisted(collegeId)) {
      if (!existing) {
        this.planner.set([
          ...list,
          { college_id: collegeId, status: 'Shortlisted', next_action: 'Check entrance dates' },
        ]);
      }
      return;
    }
    if (existing) {
      this.planner.set(list.filter((p) => p.college_id !== collegeId));
    }
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
    existingEmi: number,
    costOptions?: TrueCostOptions
  ): AffordabilityResult {
    const college = this.collegeById(collegeId) ?? this.overview.colleges[0];
    return runAffordabilityStress(
      college.tuition_lakhs,
      college.hostel_lakhs,
      monthlyIncome,
      savings,
      existingEmi,
      costOptions
    );
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
      assistantTone: reply.tone,
    };
    this.chatHistory.update((h) => [...h, assistantMsg]);
  }

  private buildCounsellorReply(
    message: string
  ): { text: string; citations: string[]; tone?: ChatMessage['assistantTone'] } {
    const lower = message.toLowerCase();
    if (
      /guarantee|100\s*%|sure admission|definitely get|promise.*(job|placement|salary)|approve my loan/i.test(
        lower
      )
    ) {
      return {
        tone: 'refusal',
        text:
          'I can’t guarantee admissions, scholarships, jobs, salaries, or loan approval. CampusRoute only surfaces **evidence with source and date** so you can decide — nothing here is a promise.',
        citations: ['MOD-068 safety boundary'],
      };
    }
    if (/maybe|might|not sure|uncertain|predict|what will happen|chances of/i.test(lower)) {
      return {
        tone: 'uncertain',
        text:
          'That outcome isn’t knowable from this demo dataset alone. I can compare **listed costs and placement signals** with citations — but I’ll flag unknowns instead of guessing.',
        citations: ['MOD-068 uncertainty template'],
      };
    }
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

function catalogueRowToCollege(row: CollegeCatalogueRow): College {
  return {
    id: row.id,
    name: row.name,
    short_name: row.short_name,
    city: row.city,
    accreditation: row.accreditation,
    tuition_lakhs: row.tuition_lakhs,
    hostel_lakhs: row.hostel_lakhs,
    total_placement_lpa: row.median_placement_lpa * 1.08,
    median_placement_lpa: row.median_placement_lpa,
    placement_rate: row.placement_rate,
    seats: 720,
    admission_routes: row.admission_routes,
    nirf_rank: row.nirf_rank,
    source: row.source,
    confidence: row.confidence,
  };
}
