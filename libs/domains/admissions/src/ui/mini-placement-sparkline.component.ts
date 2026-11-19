import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { PlacementYearPoint } from '@campusroute/shared-models';

@Component({
  selector: 'cr-admissions-mini-sparkline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg class="cr-p2-sparkline" viewBox="0 0 120 32" role="img" [attr.aria-label]="aria()">
      <polyline [attr.points]="points()" class="cr-p2-sparkline__line" fill="none" />
    </svg>
  `,
})
export class AdmissionsMiniSparklineComponent {
  readonly series = input.required<PlacementYearPoint[]>();

  readonly points = computed(() => {
    const data = this.series();
    if (!data.length) return '';
    const min = Math.min(...data.map((d) => d.median_lpa));
    const max = Math.max(...data.map((d) => d.median_lpa));
    const span = max - min || 1;
    return data
      .map((d, i) => {
        const x = 4 + (i / Math.max(1, data.length - 1)) * 112;
        const y = 28 - ((d.median_lpa - min) / span) * 24;
        return `${x},${y}`;
      })
      .join(' ');
  });

  readonly aria = computed(() => {
    const last = this.series().at(-1);
    return last ? `5y median trend ending ${last.median_lpa} LPA` : 'Placement trend';
  });
}