import { Injectable, signal } from '@angular/core';

export interface ClientAuditEntry {
  id: string;
  action: string;
  scope: string;
  at: string;
}

const AUDIT_KEY = 'campusroute.audit.v1';
const MAX_ENTRIES = 50;

@Injectable({ providedIn: 'root' })
export class ClientAuditService {
  private readonly entriesSignal = signal<ClientAuditEntry[]>(this.read());

  readonly entries = this.entriesSignal.asReadonly();

  log(action: string, meta: { scope: string }): void {
    const entry: ClientAuditEntry = {
      id: crypto.randomUUID(),
      action,
      scope: meta.scope,
      at: new Date().toISOString(),
    };
    const next = [entry, ...this.entriesSignal()].slice(0, MAX_ENTRIES);
    this.entriesSignal.set(next);
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(AUDIT_KEY, JSON.stringify(next));
    }
  }

  private read(): ClientAuditEntry[] {
    if (typeof sessionStorage === 'undefined') return [];
    try {
      const raw = sessionStorage.getItem(AUDIT_KEY);
      return raw ? (JSON.parse(raw) as ClientAuditEntry[]) : [];
    } catch {
      return [];
    }
  }
}
