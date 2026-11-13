import { Injectable, signal } from '@angular/core';

export interface SharePreviewRequest {
  title: string;
  detail: string;
  scopes: string[];
  resolve: (approved: boolean) => void;
}

@Injectable({ providedIn: 'root' })
export class ConsentSharePreviewService {
  private readonly activeSignal = signal<SharePreviewRequest | null>(null);

  readonly active = this.activeSignal.asReadonly();

  request(title: string, detail: string, scopes: string[]): Promise<boolean> {
    return new Promise((resolve) => {
      this.activeSignal.set({ title, detail, scopes, resolve });
    });
  }

  confirm(): void {
    const req = this.activeSignal();
    req?.resolve(true);
    this.activeSignal.set(null);
  }

  cancel(): void {
    const req = this.activeSignal();
    req?.resolve(false);
    this.activeSignal.set(null);
  }
}
