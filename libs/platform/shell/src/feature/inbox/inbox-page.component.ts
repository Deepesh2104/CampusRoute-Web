import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LearnerInboxStore } from '@campusroute/shared-util';

@Component({
  selector: 'cr-inbox-page',
  imports: [RouterLink],
  template: `
    <div class="cr-pa-page">
      <div class="cr-pa-page-hero">
        <p class="cr-pa-eyebrow">Inbox · MOD-037</p>
        <h1 class="cr-pa-page-title-xl">Your workspace signals</h1>
        <p class="cr-pa-lede">Demo notifications when finance snapshots save or product events fire.</p>
      </div>

      @if (inbox.items().length === 0) {
        <article class="cr-pa-card cr-p2-empty">
          <p class="cr-pa-muted">Nothing yet. Save a cost snapshot from the simulator.</p>
          <a routerLink="/app/finance/simulator" class="cr-pa-btn cr-pa-btn--emerald">Open simulator</a>
        </article>
      } @else {
        <ul class="cr-p2-inbox-list">
          @for (item of inbox.items(); track item.id) {
            <li class="cr-pa-card" [class.cr-p2-inbox-item--unread]="!item.read">
              <div class="cr-pa-card__inner">
                <p class="cr-pa-eyebrow">{{ item.kind }}</p>
                <strong>{{ item.title }}</strong>
                <p class="cr-pa-muted">{{ item.detail }}</p>
                <time class="cr-p2-inbox-time">{{ formatWhen(item.createdAt) }}</time>
              </div>
            </li>
          }
        </ul>
        <button type="button" class="cr-pa-btn cr-pa-btn--ghost" (click)="inbox.markAllRead()">Mark all read</button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboxPageComponent {
  readonly inbox = inject(LearnerInboxStore);

  formatWhen(iso: string): string {
    try {
      return new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
    } catch {
      return iso;
    }
  }
}
