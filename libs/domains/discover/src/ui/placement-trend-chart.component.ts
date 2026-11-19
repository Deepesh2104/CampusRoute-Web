import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { PlacementYearPoint } from '@campusroute/shared-models';

@Component({
  selector: 'cr-placement-trend-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="cr-p2-chart" [attr.data-testid]="testId()">
      <figcaption class="cr-p2-chart__caption">
        <span>Median package (LPA)</span>
        <span class="cr-p2-chart__legend"><i class="cr-p2-chart__swatch cr-p2-chart__swatch--bar"></i> LPA</span>
        <span class="cr-p2-chart__legend"><i class="cr-p2-chart__swatch cr-p2-chart__swatch--line"></i> Placed %</span>
      </figcaption>
      <svg [attr.viewBox]="'0 0 ' + width + ' ' + height" class="cr-p2-chart__svg" role="img" [attr.aria-label]="aria()">
        @for (y of yGrid(); track y) {
          <line [attr.x1]="padL" [attr.x2]="width - padR" [attr.y1]="y" [attr.y2]="y" class="cr-p2-chart__grid" />
        }
        @for (bar of bars(); track bar.year) {
          <rect
            [attr.x]="bar.x"
            [attr.y]="bar.y"
            [attr.width]="bar.w"
            [attr.height]="bar.h"
            class="cr-p2-chart__bar"
            rx="3"
          />
          <text [attr.x]="bar.x + bar.w / 2" [attr.y]="height - 6" class="cr-p2-chart__x">{{ bar.year }}</text>
          <text [attr.x]="bar.x + bar.w / 2" [attr.y]="bar.y - 4" class="cr-p2-chart__val">{{ bar.label }}</text>
        }
        <polyline [attr.points]="linePoints()" class="cr-p2-chart__line" fill="none" />
        @for (dot of lineDots(); track dot.year) {
          <circle [attr.cx]="dot.cx" [attr.cy]="dot.cy" r="3.5" class="cr-p2-chart__dot" />
        }
      </svg>
    </figure>
  `,
})
export class PlacementTrendChartComponent {
  readonly series = input.required<PlacementYearPoint[]>();
  readonly testId = input('placement-trend-chart');
  readonly compact = input(false);

  readonly width = 360;
  readonly height = 160;
  readonly padL = 36;
  readonly padR = 12;
  readonly padT = 14;
  readonly padB = 28;

  private readonly layout = computed(() => {
    const data = this.series();
    const innerW = this.width - this.padL - this.padR;
    const innerH = this.height - this.padT - this.padB;
    const maxLpa = Math.max(...data.map((d) => d.median_lpa), 1);
    const barW = innerW / data.length - 8;
    const bars = data.map((d, i) => {
      const h = (d.median_lpa / maxLpa) * innerH;
      const x = this.padL + i * (innerW / data.length) + 4;
      const y = this.padT + innerH - h;
      return { year: d.year, x, y, w: barW, h, label: `${d.median_lpa}` };
    });
    const lineDots = data.map((d, i) => {
      const cx = this.padL + i * (innerW / data.length) + 4 + barW / 2;
      const cy = this.padT + innerH - (d.placed_pct / 100) * innerH;
      return { year: d.year, cx, cy, pct: d.placed_pct };
    });
    return { bars, lineDots, innerH };
  });

  readonly bars = computed(() => this.layout().bars);
  readonly lineDots = computed(() => this.layout().lineDots);

  readonly linePoints = computed(() =>
    this.layout()
      .lineDots.map((d) => `${d.cx},${d.cy}`)
      .join(' ')
  );

  readonly yGrid = computed(() => {
    const innerH = this.height - this.padT - this.padB;
    return [0, 1, 2, 3].map((i) => this.padT + (innerH * i) / 3);
  });

  readonly aria = computed(() => {
    const data = this.series();
    return `Placement trend ${data.map((d) => `${d.year}: ${d.median_lpa} LPA, ${d.placed_pct}% placed`).join('; ')}`;
  });
}
