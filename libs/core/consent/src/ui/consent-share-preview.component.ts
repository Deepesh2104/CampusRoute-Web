import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ConsentSharePreviewService } from '../application/consent-share-preview.service';

@Component({
  selector: 'cr-consent-share-preview',
  template: `
    @if (share.active(); as req) {
      <div class="cr-share-overlay" role="dialog" aria-modal="true" data-testid="consent-share-preview">
        <div class="cr-share-modal">
          <p class="cr-share-eyebrow">Share preview</p>
          <h2>{{ req.title }}</h2>
          <p class="cr-share-detail">{{ req.detail }}</p>
          <p class="cr-share-label">Sending:</p>
          <ul class="cr-share-scopes">
            @for (s of req.scopes; track s) {
              <li>{{ s }}</li>
            }
          </ul>
          <p class="cr-share-note">Nothing else leaves your account without a new preview.</p>
          <div class="cr-share-actions">
            <button type="button" class="cr-share-cancel" data-testid="consent-share-cancel" (click)="share.cancel()">
              Cancel
            </button>
            <button type="button" class="cr-share-confirm" data-testid="consent-share-confirm" (click)="share.confirm()">
              Continue
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: `
    .cr-share-overlay {
      position: fixed;
      inset: 0;
      z-index: 200;
      display: grid;
      place-items: center;
      padding: 1rem;
      background: rgb(15 23 42 / 0.45);
    }
    .cr-share-modal {
      width: min(100%, 28rem);
      padding: 1.5rem;
      border-radius: 1rem;
      background: #fff;
      box-shadow: 0 20px 40px rgb(0 0 0 / 0.12);
    }
    .cr-share-eyebrow {
      margin: 0;
      font-family: ui-monospace, monospace;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #047857;
    }
    h2 {
      margin: 0.5rem 0 0;
      font-size: 1.25rem;
    }
    .cr-share-detail {
      margin: 0.5rem 0 0;
      font-size: 0.875rem;
      color: #64748b;
    }
    .cr-share-label {
      margin: 1rem 0 0.35rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: #334155;
    }
    .cr-share-scopes {
      margin: 0;
      padding-left: 1.25rem;
      font-size: 0.875rem;
      color: #0f172a;
    }
    .cr-share-note {
      margin: 1rem 0 0;
      font-size: 0.75rem;
      color: #64748b;
    }
    .cr-share-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      margin-top: 1.25rem;
    }
    .cr-share-cancel,
    .cr-share-confirm {
      padding: 0.5rem 0.875rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
    }
    .cr-share-cancel {
      border: 1px solid #e2e8f0;
      background: #fff;
    }
    .cr-share-confirm {
      border: none;
      background: #047857;
      color: #fff;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsentSharePreviewComponent {
  readonly share = inject(ConsentSharePreviewService);
}
