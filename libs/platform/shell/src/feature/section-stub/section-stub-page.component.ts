import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'cr-section-stub-page',
  imports: [RouterLink],
  template: `
    <div class="cr-pa-page">
      <p class="cr-pa-eyebrow">Coming next</p>
      <h1 class="cr-pa-page-title">{{ title() }}</h1>
      <p class="cr-pa-muted">
        This area matches the Emergent preview shell. The home workspace is wired; deeper flows ship in the
        next iteration.
      </p>
      <a class="cr-pa-text-link" routerLink="/app">← Back to home</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionStubPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly title = toSignal(
    this.route.data.pipe(map((data) => (data['title'] as string) ?? 'Section')),
    { initialValue: (this.route.snapshot.data['title'] as string) ?? 'Section' }
  );
}
