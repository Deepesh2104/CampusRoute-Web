import { Injectable, signal } from '@angular/core';
import { DOCUMENT_CATEGORIES, type VaultDocument } from '../domain/vault-document.model';

export const DOCUMENTS_STORAGE_KEY = 'campusroute.documents.v1';

function readDocs(): VaultDocument[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(DOCUMENTS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as VaultDocument[];
  } catch {
    return [];
  }
}

function guessCategory(name: string): string {
  const n = name.toLowerCase();
  if (n.includes('jee') || n.includes('bitsat') || n.includes('score')) return 'Entrance scorecard';
  if (n.includes('10') || n.includes('tenth')) return '10th marksheet';
  if (n.includes('12') || n.includes('twelfth')) return '12th marksheet';
  if (n.includes('income')) return 'Income certificate';
  if (n.includes('caste') || n.includes('category')) return 'Category certificate';
  if (n.includes('aadhaar') || n.includes('id')) return 'Photo ID';
  return 'Other';
}

@Injectable({ providedIn: 'root' })
export class DocumentVaultStore {
  private readonly docsSignal = signal<VaultDocument[]>(readDocs());

  readonly documents = this.docsSignal.asReadonly();
  readonly categories = DOCUMENT_CATEGORIES;

  addFromFileList(files: FileList | null): void {
    if (!files?.length) return;
    const batch: VaultDocument[] = [];
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const id = `doc-${Date.now()}-${i}`;
      batch.push({
        id,
        file_name: f.name,
        uploaded_at: new Date().toISOString(),
        ocr_status: 'uploading',
        suggested_category: guessCategory(f.name),
      });
    }
    const next = [...batch, ...this.docsSignal()];
    this.persist(next);
    for (const doc of batch) {
      setTimeout(() => this.markOcrReady(doc.id), 800 + Math.random() * 1200);
    }
  }

  confirmCategory(docId: string, category: string): void {
    const next = this.docsSignal().map((d) =>
      d.id === docId ? { ...d, confirmed_category: category } : d
    );
    this.persist(next);
  }

  remove(docId: string): void {
    this.persist(this.docsSignal().filter((d) => d.id !== docId));
  }

  private markOcrReady(docId: string): void {
    const next = this.docsSignal().map((d) =>
      d.id === docId ? { ...d, ocr_status: 'ready' as const } : d
    );
    this.persist(next);
  }

  private persist(docs: VaultDocument[]): void {
    this.docsSignal.set(docs);
    localStorage.setItem(DOCUMENTS_STORAGE_KEY, JSON.stringify(docs));
  }
}
