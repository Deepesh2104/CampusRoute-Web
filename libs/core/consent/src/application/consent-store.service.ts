import { Injectable, computed, inject, signal } from '@angular/core';
import { ClientAuditService } from '@campusroute/shared-util';
import {
  CONSENT_SETTINGS,
  CONSENT_STORAGE_KEY,
  type ConsentReceipt,
  type ConsentScopeId,
} from '../domain/consent.model';

const DEFAULTS: Record<ConsentScopeId, boolean> = {
  personal: true,
  academic: true,
  budget: false,
};

function readConsent(): Record<ConsentScopeId, boolean> {
  if (typeof localStorage === 'undefined') return { ...DEFAULTS };
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...(JSON.parse(raw) as Record<ConsentScopeId, boolean>) };
  } catch {
    return { ...DEFAULTS };
  }
}

@Injectable({ providedIn: 'root' })
export class ConsentStoreService {
  private readonly audit = inject(ClientAuditService);

  private readonly values = signal<Record<ConsentScopeId, boolean>>(readConsent());
  private readonly receiptsSignal = signal<ConsentReceipt[]>([]);

  readonly settings = CONSENT_SETTINGS;
  readonly consent = this.values.asReadonly();
  readonly receipts = this.receiptsSignal.asReadonly();

  readonly requiredGranted = computed(() =>
    CONSENT_SETTINGS.filter((s) => s.required).every((s) => this.values()[s.id])
  );

  toggle(id: ConsentScopeId, enabled: boolean): void {
    this.values.update((c) => ({ ...c, [id]: enabled }));
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(this.values()));
    const action = `consent.${id}.${enabled ? 'granted' : 'revoked'}`;
    this.audit.log(action, { scope: 'consent' });
    this.appendReceipt(action, id);
  }

  appendReceipt(action: string, scope: string): void {
    const receipt: ConsentReceipt = {
      id: crypto.randomUUID(),
      action,
      scope,
      at: new Date().toISOString(),
    };
    this.receiptsSignal.update((r) => [receipt, ...r].slice(0, 20));
  }

  scopesForShare(extra: string[]): string[] {
    const labels = CONSENT_SETTINGS.filter((s) => this.values()[s.id]).map((s) => s.label);
    return [...labels, ...extra];
  }
}
