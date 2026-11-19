export type OcrStatus = 'uploading' | 'ready';

export type VaultDocument = {
  id: string;
  file_name: string;
  uploaded_at: string;
  ocr_status: OcrStatus;
  suggested_category?: string;
  confirmed_category?: string;
};

export const DOCUMENT_CATEGORIES = [
  '10th marksheet',
  '12th marksheet',
  'Entrance scorecard',
  'Category certificate',
  'Income certificate',
  'Photo ID',
  'Other',
] as const;
