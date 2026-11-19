import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cr-marketing-doc-page',
  imports: [RouterLink],
  template: `
    <div class="cr-mkt-doc">
      <header class="cr-mkt-doc__head">
        <a routerLink="/" class="cr-mkt-doc__brand">← CampusRoute</a>
        <h1>{{ title() }}</h1>
        @if (eyebrow()) {
          <p class="cr-mkt-doc__eyebrow">{{ eyebrow() }}</p>
        }
      </header>
      <article class="cr-mkt-doc__body">
        <ng-content />
      </article>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketingDocPageComponent {
  readonly title = input.required<string>();
  readonly eyebrow = input('');
}
