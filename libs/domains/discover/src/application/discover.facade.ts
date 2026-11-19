import { Injectable, computed, inject, signal } from '@angular/core';
import { LearnerCompareStore, LearnerShortlistStore } from '@campusroute/shared-util';
import {
  COLLEGE_CATALOGUE,
  totalCostLakhs as collegeTrueCost,
  type CollegeOwnership,
} from '@campusroute/shared-models';
import type { DiscoverCollege } from '../domain/discover-college.model';

export type OwnershipFilter = 'all' | CollegeOwnership;

/** Spotlight grid on catalogue — search/filters unlock the full list. */
export const CATALOGUE_SPOTLIGHT_COUNT = 6;

@Injectable({ providedIn: 'root' })
export class DiscoverFacade {
  private readonly shortlist = inject(LearnerShortlistStore);
  readonly comparePicks = inject(LearnerCompareStore);

  readonly catalogue = COLLEGE_CATALOGUE;
  readonly query = signal('');
  readonly cityFilter = signal('');
  readonly ownershipFilter = signal<OwnershipFilter>('all');
  readonly programFilter = signal('');

  readonly catalogueSearching = computed(() => {
    return (
      !!this.query().trim() ||
      !!this.cityFilter().trim() ||
      this.ownershipFilter() !== 'all' ||
      !!this.programFilter().trim()
    );
  });

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const city = this.cityFilter().trim().toLowerCase();
    const ownership = this.ownershipFilter();
    const program = this.programFilter().trim().toLowerCase();
    return this.catalogue.filter((c) => {
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.short_name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.programs.some((p) => p.toLowerCase().includes(q));
      const matchesCity = !city || c.city.toLowerCase().includes(city);
      const matchesOwnership = ownership === 'all' || c.ownership === ownership;
      const matchesProgram =
        !program ||
        c.programs.some((p) => p.toLowerCase().includes(program)) ||
        c.admission_routes.some((r) => r.toLowerCase().includes(program));
      return matchesQuery && matchesCity && matchesOwnership && matchesProgram;
    });
  });

  readonly gridColleges = computed(() => {
    const list = this.filtered();
    if (this.catalogueSearching()) return list;
    return list.slice(0, CATALOGUE_SPOTLIGHT_COUNT);
  });

  readonly spotlightColleges = computed(() => this.catalogue.slice(0, CATALOGUE_SPOTLIGHT_COUNT));

  readonly hiddenBySpotlightCount = computed(() => {
    if (this.catalogueSearching()) return 0;
    return Math.max(0, this.filtered().length - this.gridColleges().length);
  });

  readonly shortlistIds = this.shortlist.ids;
  readonly shortlistCount = this.shortlist.count;

  byId(id: string): DiscoverCollege | undefined {
    return this.catalogue.find((c) => c.id === id);
  }

  collegesByIds(ids: string[]): DiscoverCollege[] {
    return ids.map((id) => this.byId(id)).filter((c): c is DiscoverCollege => !!c);
  }

  totalCostLakhs(college: DiscoverCollege): number {
    return collegeTrueCost(college.tuition_lakhs, college.hostel_lakhs);
  }

  toggleShortlist(id: string): void {
    this.shortlist.toggle(id);
  }

  isShortlisted(id: string): boolean {
    return this.shortlist.isShortlisted(id);
  }

  toggleComparePick(id: string): boolean {
    if (this.comparePicks.isSelected(id)) {
      this.comparePicks.remove(id);
      return true;
    }
    return this.comparePicks.add(id);
  }

  isComparePick(id: string): boolean {
    return this.comparePicks.isSelected(id);
  }

  compareQueryIds(extraId?: string): string {
    return this.comparePicks.toQueryValue(extraId);
  }

  findCollegeId(query: string): string | undefined {
    const q = query.trim().toLowerCase();
    if (!q) return undefined;
    const hit = this.catalogue.find(
      (c) =>
        c.id.includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.short_name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q)
    );
    return hit?.id;
  }
}
