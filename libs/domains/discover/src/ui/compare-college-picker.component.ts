import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPARE_PICKS_MAX } from '@campusroute/shared-util';
import { DiscoverFacade } from '../application/discover.facade';
import type { DiscoverCollege } from '../domain/discover-college.model';

@Component({
  selector: 'cr-compare-college-picker',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cr-p2-compare-picker" data-testid="compare-college-picker">
      <h2 class="cr-pa-section-heading cr-pa-section-heading--md">Choose colleges (any 2–{{ maxSlots() }})</h2>
      <p class="cr-pa-muted">
        Pick from the full catalogue — shortlist optional. Search by name, city or id.
      </p>

      <div class="cr-p2-compare-picker__slots">
        @for (slot of slotIndexes(); track slot) {
          @let pickId = slotId(slot);
          @let college = collegeFor(pickId);
          <article class="cr-p2-compare-picker__slot">
            <span class="cr-p2-compare-picker__slot-n">Slot {{ slot + 1 }}</span>
            @if (college; as col) {
              <strong class="cr-p2-compare-picker__slot-name">{{ col.short_name }}</strong>
              <span class="cr-pa-muted">{{ col.city }}</span>
              <button type="button" class="cr-pa-text-link" (click)="removeSlot.emit(col.id)">Remove</button>
            } @else {
              <span class="cr-pa-muted">Empty — search below</span>
            }
          </article>
        }
      </div>

      <div class="cr-p2-compare-picker__search">
        <input
          type="search"
          class="cr-p2-input"
          placeholder="Search any college…"
          [value]="query()"
          (input)="query.set($any($event.target).value)"
          data-testid="compare-picker-search"
        />
        <button
          type="button"
          class="cr-pa-btn cr-pa-btn--ghost"
          (click)="loadShortlist.emit()"
          data-testid="compare-use-shortlist"
        >
          Use shortlist
        </button>
        <a
          class="cr-pa-btn cr-pa-btn--ghost"
          routerLink="/app/discover/colleges"
        >Catalogue</a>
      </div>

      <ul class="cr-p2-compare-picker__results" data-testid="compare-picker-results">
        @for (col of filtered(); track col.id) {
          <li>
            <button
              type="button"
              class="cr-p2-compare-picker__result"
              [disabled]="isDisabled(col.id)"
              (click)="pick.emit(col.id)"
            >
              <strong>{{ col.short_name }}</strong>
              <span class="cr-pa-muted">{{ col.city }} · {{ col.institute_tier }}</span>
              @if (isSelected(col.id)) {
                <span class="cr-p2-compare-picker__tag">In compare</span>
              } @else if (slotsFull()) {
                <span class="cr-p2-compare-picker__tag cr-p2-compare-picker__tag--full">3/3 full</span>
              }
            </button>
          </li>
        }
      </ul>
    </section>
  `,
})
export class CompareCollegePickerComponent {
  readonly discover = inject(DiscoverFacade);

  readonly selectedIds = input.required<string[]>();
  readonly removeSlot = output<string>();
  readonly pick = output<string>();
  readonly loadShortlist = output<void>();

  readonly query = signal('');
  readonly maxSlots = () => COMPARE_PICKS_MAX;

  readonly slotIndexes = computed(() => [0, 1, 2].slice(0, COMPARE_PICKS_MAX));

  readonly slotsFull = computed(() => this.selectedIds().length >= COMPARE_PICKS_MAX);

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const list = this.discover.catalogue;
    if (!q) return list;
    return list.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.short_name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.id.includes(q)
    );
  });

  slotId(index: number): string | undefined {
    return this.selectedIds()[index];
  }

  collegeFor(id: string | undefined): DiscoverCollege | undefined {
    return id ? this.discover.byId(id) : undefined;
  }

  isSelected(id: string): boolean {
    return this.selectedIds().includes(id);
  }

  isDisabled(id: string): boolean {
    return this.isSelected(id) || (this.slotsFull() && !this.isSelected(id));
  }
}
