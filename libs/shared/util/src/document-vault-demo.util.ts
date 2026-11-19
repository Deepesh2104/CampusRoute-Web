const DOCUMENTS_STORAGE_KEY = 'campusroute.documents.v1';

/** Vault doc count for home dashboard (no domain-documents import). */
export function readDocumentVaultCount(): number {
  if (typeof localStorage === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(DOCUMENTS_STORAGE_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}