import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DiscoverFacade } from '../application/discover.facade';
import type { DiscoverCollege } from '../domain/discover-college.model';
import { formatReviewStars, trendsForCollege } from '@campusroute/shared-models';
import { CollegeReviewStore } from '@campusroute/shared-util';
import { admissionProbClass, estimateAdmissionChance } from '../domain/admission-chance';
import { ProvenanceBadgeComponent } from '../ui/provenance-badge.component';
import { MiniPlacementSparklineComponent } from '../ui/mini-placement-sparkline.component';
@Component({
  selector: 'cr-discover-colleges-page',
  imports: [RouterLink, ProvenanceBadgeComponent, MiniPlacementSparklineComponent],
  templateUrl: './colleges-catalogue-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollegesCataloguePageComponent {
  readonly discover = inject(DiscoverFacade);

  onComparePick(collegeId: string): void {
    this.discover.toggleComparePick(collegeId);
  }
  private readonly reviewStore = inject(CollegeReviewStore);
  private readonly reviewTick = this.reviewStore.learnerReviews;

  reviewLine(collegeId: string): string | null {
    this.reviewTick();
    const agg = this.reviewStore.summaryFor(collegeId);
    if (agg.total_reviews === 0) return null;
    return `★ ${formatReviewStars(agg.averages?.overall)} · ${agg.total_reviews} student reviews`;
  }

  totalCost(college: DiscoverCollege): number {
    return this.discover.totalCostLakhs(college);
  }

  admissionChance(college: DiscoverCollege) {
    return estimateAdmissionChance(college);
  }

  probClass = admissionProbClass;

  placementTrend(collegeId: string) {
    return trendsForCollege(collegeId)?.placement;
  }
}
