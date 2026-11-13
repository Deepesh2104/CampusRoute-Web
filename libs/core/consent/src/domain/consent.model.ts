export type ConsentScopeId = 'personal' | 'academic' | 'budget';

export interface ConsentSetting {
  id: ConsentScopeId;
  label: string;
  detail: string;
  required: boolean;
}

export interface ConsentReceipt {
  id: string;
  action: string;
  scope: string;
  at: string;
}

export const CONSENT_SETTINGS: ConsentSetting[] = [
  { id: 'personal', label: 'Personal profile', detail: 'Name, city, class and goal', required: true },
  { id: 'academic', label: 'Academic context', detail: 'Stream and entrance-plan signals', required: true },
  { id: 'budget', label: 'Budget context', detail: 'Only used in this device’s simulator', required: false },
];

export const CONSENT_STORAGE_KEY = 'campusroute.consent.v1';
