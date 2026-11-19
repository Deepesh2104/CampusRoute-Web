import { Injectable, computed, signal } from '@angular/core';

export const INBOX_STORAGE_KEY = 'campusroute.inbox.v1';

export type InboxItem = {
  id: string;
  title: string;
  detail: string;
  createdAt: string;
  read: boolean;
  kind: 'finance' | 'discover' | 'system';
};

function readItems(): InboxItem[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(INBOX_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as InboxItem[];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class LearnerInboxStore {
  private readonly itemsSignal = signal<InboxItem[]>(readItems());

  readonly items = this.itemsSignal.asReadonly();
  readonly unreadCount = computed(() => this.itemsSignal().filter((i) => !i.read).length);

  push(item: Omit<InboxItem, 'id' | 'createdAt' | 'read'>): void {
    const entry: InboxItem = {
      ...item,
      id: `inbox-${Date.now()}`,
      createdAt: new Date().toISOString(),
      read: false,
    };
    const next = [entry, ...this.itemsSignal()].slice(0, 20);
    this.persist(next);
  }

  markAllRead(): void {
    const next = this.itemsSignal().map((i) => ({ ...i, read: true }));
    this.persist(next);
  }

  private persist(items: InboxItem[]): void {
    this.itemsSignal.set(items);
    localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify(items));
  }
}
