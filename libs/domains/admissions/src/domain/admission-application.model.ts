export type ApplicationStatus =
  | 'researching'
  | 'eligible'
  | 'applied'
  | 'counselling'
  | 'seat_offered'
  | 'enrolled';

export type ChecklistItem = {
  id: string;
  label: string;
  done: boolean;
};

export type TimelineEvent = {
  when: string;
  title: string;
  detail: string;
};

export type AdmissionApplication = {
  id: string;
  college_id: string;
  status: ApplicationStatus;
  next_action: string;
  deadline: string;
  entrance_exam: string;
  checklist: ChecklistItem[];
  timeline: TimelineEvent[];
  fees_paid_inr: number;
  acknowledgement_ref?: string;
};

export const APPLICATION_STATUS_LABEL: Record<ApplicationStatus, string> = {
  researching: 'Researching',
  eligible: 'Eligible — docs pending',
  applied: 'Applied',
  counselling: 'Counselling / choice fill',
  seat_offered: 'Seat offered',
  enrolled: 'Enrolled',
};

export const STATUS_FLOW: ApplicationStatus[] = [
  'researching',
  'eligible',
  'applied',
  'counselling',
  'seat_offered',
  'enrolled',
];
