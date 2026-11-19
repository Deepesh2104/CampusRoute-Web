import type { CollegeCatalogueRow } from '@campusroute/shared-models';
import { readLearnerAdmissionSnapshot, type LearnerAdmissionSnapshot } from '@campusroute/shared-util';

export type AdmissionChanceStatus = 'Strong' | 'Possible' | 'Reach' | 'Long shot';

export type AdmissionChanceResult = {
  exam_path_pct: number;
  management_path_pct: number;
  /** Best realistic path for demo (exam vs MQ/donation). */
  headline_pct: number;
  status: AdmissionChanceStatus;
  status_label: string;
  exam_summary: string;
  fallback_summary: string;
  requirements_line: string;
};

export function statusFromPct(pct: number): AdmissionChanceStatus {
  if (pct >= 80) return 'Strong';
  if (pct >= 60) return 'Possible';
  if (pct >= 40) return 'Reach';
  return 'Long shot';
}

export function statusLabel(status: AdmissionChanceStatus): string {
  const map: Record<AdmissionChanceStatus, string> = {
    Strong: 'Strong chance',
    Possible: 'Possible — prepare backup',
    Reach: 'Reach — needs rank jump',
    'Long shot': 'Backup / MQ route only',
  };
  return map[status];
}

export function formatRequirements(college: CollegeCatalogueRow): string {
  const parts: string[] = [`${college.institute_tier}`, `PCM ≥ ${college.pcm_min_pct}%`];
  if (college.jee_advanced_rank_max) {
    parts.push(`JEE Advanced rank ~${college.jee_advanced_rank_max.toLocaleString('en-IN')} (CSE band)`);
  } else if (college.jee_main_percentile_min > 0) {
    parts.push(`JEE Main ~${college.jee_main_percentile_min}+ percentile`);
  }
  parts.push(college.primary_entrance);
  return parts.join(' · ');
}

export function estimateAdmissionChance(
  college: CollegeCatalogueRow,
  learner: LearnerAdmissionSnapshot = readLearnerAdmissionSnapshot()
): AdmissionChanceResult {
  const boardRatio = Math.min(1.15, learner.pcmPct / Math.max(1, college.pcm_min_pct));

  let examRatio: number;
  if (college.jee_advanced_rank_max && learner.jeeAdvancedRank) {
    examRatio = Math.min(1.2, college.jee_advanced_rank_max / Math.max(1, learner.jeeAdvancedRank));
  } else if (college.jee_main_percentile_min > 0) {
    examRatio = Math.min(1.15, learner.jeeMainPercentile / college.jee_main_percentile_min);
  } else {
    const readiness =
      (learner.pcmPct / 100) * 0.35 + (learner.jeeMainPercentile / 100) * 0.45 + (learner.entranceReadinessPct / 100) * 0.2;
    examRatio = Math.min(1.1, readiness / 0.85);
  }

  const examPath = Math.round(Math.min(97, boardRatio * 42 + examRatio * 52));
  let mgmtPath = 0;
  if (college.management_quota_available) {
    mgmtPath = Math.round(
      Math.min(90, college.management_fallback_probability_pct * (0.55 + boardRatio * 0.45))
    );
  }

  const headline = Math.max(examPath, mgmtPath);
  const status = statusFromPct(headline);

  const exam_summary =
    college.jee_advanced_rank_max && learner.jeeAdvancedRank
      ? `Exam route (${college.primary_entrance}): ~${examPath}% on your JEE Advanced rank ${learner.jeeAdvancedRank.toLocaleString('en-IN')} vs demo cut ~${college.jee_advanced_rank_max.toLocaleString('en-IN')}.`
      : college.jee_main_percentile_min > 0
        ? `Exam route (${college.primary_entrance}): ~${examPath}% with ${learner.jeeMainPercentile} percentile vs typical ${college.jee_main_percentile_min}+.`
        : `Exam route (${college.primary_entrance}): ~${examPath}% from board PCM ${learner.pcmPct}% and entrance readiness ${learner.entranceReadinessPct}/100 (add real ${college.primary_entrance} score in production).`;

  const fallback_summary = college.management_quota_available
    ? `If exam cut is missed: management / higher-fee quota path ~${mgmtPath}% — ${college.management_quota_note}`
    : 'No management-quota path in this demo profile — merit / entrance only.';

  return {
    exam_path_pct: examPath,
    management_path_pct: mgmtPath,
    headline_pct: headline,
    status,
    status_label: statusLabel(status),
    exam_summary,
    fallback_summary,
    requirements_line: formatRequirements(college),
  };
}

export function admissionProbClass(pct: number): string {
  if (pct >= 80) return 'cr-p2-admission-prob--strong';
  if (pct >= 60) return 'cr-p2-admission-prob--watch';
  return 'cr-p2-admission-prob--low';
}
