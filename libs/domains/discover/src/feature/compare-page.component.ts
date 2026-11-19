import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { COMPARE_PICKS_MAX, readLearnerProfileDraft } from '@campusroute/shared-util';
import type { TrueCostOptions } from '@campusroute/shared-models';
import { DiscoverFacade } from '../application/discover.facade';
import {
  DEFAULT_HOUSEHOLD,
  buildCollegeCompareCost,
  buildCompareInsights,
  buildCompareDecisionPicks,
  buildCompareScorecard,
} from '../domain/compare-true-cost';
import { gapCoverMonthlyInr } from '@campusroute/shared-models';
import { ProvenanceBadgeComponent } from '../ui/provenance-badge.component';
import { CompareCollegePickerComponent } from '../ui/compare-college-picker.component';

function parseIdsParam(raw: string): string[] {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, COMPARE_PICKS_MAX);
}

@Component({
  selector: 'cr-discover-compare-page',
  imports: [RouterLink, ProvenanceBadgeComponent, CompareCollegePickerComponent],
  templateUrl: './compare-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComparePageComponent {
  readonly facade = inject(DiscoverFacade);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly idsParam = toSignal(
    this.route.queryParamMap.pipe(map((p) => p.get('ids') ?? '')),
    { initialValue: this.route.snapshot.queryParamMap.get('ids') ?? '' }
  );

  readonly compareIds = this.facade.comparePicks.ids;

  constructor() {
    effect(() => {
      const fromUrl = parseIdsParam(this.idsParam());
      if (fromUrl.length) {
        this.facade.comparePicks.setAll(fromUrl);
        return;
      }
      const stored = this.facade.comparePicks.ids();
      if (stored.length && !fromUrl.length) {
        queueMicrotask(() => this.syncUrl());
      }
    });
  }

  readonly selected = computed(() => {
    const ids = this.compareIds();
    if (ids.length) return this.facade.collegesByIds(ids);
    return this.facade.collegesByIds(parseIdsParam(this.idsParam()));
  });

  readonly selectedIds = computed(() => this.selected().map((c) => c.id));

  readonly costOptions = computed((): TrueCostOptions => {
    const profile = readLearnerProfileDraft();
    return {
      pocketMoneyMonthlyInr: profile?.pocketMoneyMonthlyInr ?? 5_000,
      lifestyleBand: profile?.lifestyleBand ?? 'typical',
    };
  });

  readonly household = computed(() => DEFAULT_HOUSEHOLD);

  readonly compareRows = computed(() => {
    const options = this.costOptions();
    const household = this.household();
    return this.selected().map((c) => buildCollegeCompareCost(c, options, household));
  });

  readonly lineIds = computed(() => {
    const first = this.compareRows()[0];
    return first ? first.lines.map((l) => l.id) : [];
  });

  readonly decisionPicks = computed(() => buildCompareDecisionPicks(this.compareRows()));

  readonly insights = computed(() => {
    const goal = readLearnerProfileDraft()?.goal;
    return buildCompareInsights(this.compareRows(), goal);
  });

  readonly scorecard = computed(() => buildCompareScorecard(this.compareRows()));

  gapMonthlyInr(gapLakhs: number): number {
    return gapCoverMonthlyInr(gapLakhs);
  }

  lineLabel(lineId: string): string {
    const row = this.compareRows()[0];
    return row?.lines.find((l) => l.id === lineId)?.label ?? lineId;
  }

  lineMeta(lineId: string): string {
    const row = this.compareRows()[0];
    return row?.lines.find((l) => l.id === lineId)?.meta ?? '';
  }

  lineAmount(row: ReturnType<typeof buildCollegeCompareCost>, lineId: string): number {
    return row.lines.find((l) => l.id === lineId)?.lakhs ?? 0;
  }

  onPickCollege(collegeId: string): void {
    if (!this.facade.comparePicks.add(collegeId)) return;
    this.syncUrl();
  }

  onRemoveCollege(collegeId: string): void {
    this.facade.comparePicks.remove(collegeId);
    this.syncUrl();
  }

  useShortlistAsCompare(): void {
    const ids = this.facade.shortlistIds().slice(0, COMPARE_PICKS_MAX);
    if (!ids.length) return;
    this.facade.comparePicks.setAll(ids);
    this.syncUrl();
  }

  private syncUrl(): void {
    const ids = this.facade.comparePicks.ids().join(',');
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: ids ? { ids } : { ids: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
