export interface LearnerProfile {
  name: string;
  class_level: string;
  stream: string;
  goal: string;
  city: string;
  avatar_initials: string;
}

export interface College {
  id: string;
  name: string;
  short_name: string;
  city: string;
  accreditation: string;
  tuition_lakhs: number;
  hostel_lakhs: number;
  total_placement_lpa: number;
  median_placement_lpa: number;
  placement_rate: number;
  seats: number;
  admission_routes: string[];
  nirf_rank: number;
  source: string;
  confidence: string;
}

export interface CareerPath {
  id: string;
  title: string;
  tagline: string;
  salary_min_lpa: number;
  salary_max_lpa: number;
  hubs: string[];
  skills: string[];
  demand: string;
}

export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  amount_lakhs: number;
  eligibility: string;
  deadline: string;
  match_reason: string;
}

export interface JobListing {
  id: string;
  role: string;
  company: string;
  location: string;
  salary_lpa: number;
  skill: string;
  posted: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  years: number;
  focus: string;
  initials: string;
}

export interface TimelineItem {
  id: string;
  label: string;
  detail: string;
  date: string;
  status: 'done' | 'current' | 'next';
}

export interface SkillGap {
  skill: string;
  current: number;
  target: number;
  color: string;
}

export interface InterviewTask {
  id: string;
  title: string;
  detail: string;
  done: boolean;
}

export interface CampusOverview {
  learner: LearnerProfile;
  colleges: College[];
  careers: CareerPath[];
  scholarships: Scholarship[];
  jobs: JobListing[];
  mentors: Mentor[];
  timeline: TimelineItem[];
  skill_gaps: SkillGap[];
  interview_tasks: InterviewTask[];
  resume: {
    name: string;
    headline: string;
    strengths: string[];
    projects: number;
    readiness: number;
  };
}

export type PlannerStage = 'Researching' | 'Shortlisted' | 'Applied' | 'Decision';

export interface PlannerItem {
  college_id: string;
  status: PlannerStage;
  next_action: string;
}

export interface AffordabilityResult {
  total_cost_lakhs: number;
  funding_gap_lakhs: number;
  stress_score: number;
  stress_level: string;
  monthly_burden_lakhs: number;
  notes: string[];
}

export interface RoiResult {
  total_investment_lakhs: number;
  median_salary_lpa: number;
  break_even_months: number;
  roi_multiple: number;
  sample_size: number;
  disclaimer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations: string[];
  created_at: string;
}
