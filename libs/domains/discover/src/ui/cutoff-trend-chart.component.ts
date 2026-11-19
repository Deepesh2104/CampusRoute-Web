import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  cutoffUnitLabel,
  formatCutoffValue,
  type CutoffMetric,
  type CutoffYearPoint,
} from '@campusroute/shared-models';

@Component({
  selector: 'cr-cutoff-trend-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="cr-p2-chart" [attr.data-testid]="testId()">
      <figcaption class="cr-p2-chart__caption">
        <span>{{ label() }}</span>
        <span class="cr-p2-chart__metric-tag">Unit: {{ unitLabel() }}</span>
        <span class="cr-p2-chart__legend"><i class="cr-p2-chart__swatch cr-p2-chart__swatch--cse"></i> CSE</span>
        <span class="cr-p2-chart__legend"><i class="cr-p2-chart__swatch cr-p2-chart__swatch--ece"></i> ECE</span>
        <span class="cr-p2-chart__legend"><i class="cr-p2-chart__swatch cr-p2-chart__swatch--mech"></i> Mech</span>
      </figcaption>
      <svg [attr.viewBox]="'0 0 ' + width + ' ' + height" class="cr-p2-chart__svg" role="img" [attr.aria-label]="aria()">
        @for (yl of yLabels(); track yl.value) {
          <text [attr.x]="4" [attr.y]="yl.y + 3" class="cr-p2-chart__y">{{ yl.text }}</text>
        }
        @for (y of yGrid(); track y) {
          <line [attr.x1]="padL" [attr.x2]="width - padR" [attr.y1]="y" [attr.y2]="y" class="cr-p2-chart__grid" />
        }
        <polyline [attr.points]="paths().cse" class="cr-p2-chart__line cr-p2-chart__line--cse" fill="none" />
        <polyline [attr.points]="paths().ece" class="cr-p2-chart__line cr-p2-chart__line--ece" fill="none" />
        <polyline [attr.points]="paths().mech" class="cr-p2-chart__line cr-p2-chart__line--mech" fill="none" />
        @for (dot of allDots(); track dot.key) {
          <circle [attr.cx]="dot.cx" [attr.cy]="dot.cy" r="3" [class]="dot.class" />
          <text [attr.x]="dot.cx" [attr.y]="dot.cy - 6" class="cr-p2-chart__dot-val">{{ dot.label }}</text>
        }
        @for (pt of axisLabels(); track pt.year) {
          <text [attr.x]="pt.x" [attr.y]="height - 6" class="cr-p2-chart__x">{{ pt.year }}</text>
        }
      </svg>
      <p class="cr-p2-chart__foot cr-pa-muted">{{ source() }}</p>
    </figure>
  `,
})
export class CutoffTrendChartComponent {
  readonly series = input.required<CutoffYearPoint[]>();
  readonly metric = input.required<CutoffMetric>();
  readonly label = input('Admission cutoff (5 years)');
  readonly source = input('');
  readonly testId = input('cutoff-trend-chart');

  readonly width = 400;
  readonly height = 180;
  readonly padL = 48;
  readonly padR = 12;
  readonly padT = 22;
  readonly padB = 28;

  readonly unitLabel = computed(() => cutoffUnitLabel(this.metric()));

  private readonly scaled = computed(() => {
    const data = this.series();
    const metric = this.metric();
    const innerW = this.width - this.padL - this.padR;
    const innerH = this.height - this.padT - this.padB;
    const allVals = data.flatMap((d) => [d.cse, d.ece, d.mechanical]);
    const minV = Math.min(...allVals);
    const maxV = Math.max(...allVals);
    const span = maxV - minV || 1;
    const toY = (v: number) => this.padT + innerH - ((v - minV) / span) * innerH;
    const toX = (i: number) => this.padL + (i / Math.max(1, data.length - 1)) * innerW;

    const branch = (key: 'cse' | 'ece' | 'mechanical', cls: string) =>
      data.map((d, i) => ({
        x: toX(i),
        y: toY(d[key]),
        year: d.year,
        v: d[key],
        cls,
        key: `${key}-${d.year}`,
      }));

    return {
      cse: branch('cse', 'cr-p2-chart__dot--cse'),
      ece: branch('ece', 'cr-p2-chart__dot--ece'),
      mech: branch('mechanical', 'cr-p2-chart__dot--mech'),
      minV,
      maxV,
      metric,
    };
  });

  readonly paths = computed(() => {
    const s = this.scaled();
    const toPoints = (pts: { x: number; y: number }[]) => pts.map((p) => `${p.x},${p.y}`).join(' ');
    return { cse: toPoints(s.cse), ece: toPoints(s.ece), mech: toPoints(s.mech) };
  });

  readonly axisLabels = computed(() => this.scaled().cse.map((p) => ({ year: p.year, x: p.x })));

  readonly yGrid = computed(() => {
    const innerH = this.height - this.padT - this.padB;
    return [0, 1, 2].map((i) => this.padT + (innerH * i) / 2);
  });

  readonly yLabels = computed(() => {
    const { minV, maxV, metric } = this.scaled();
    const mid = Math.round((minV + maxV) / 2);
    const innerH = this.height - this.padT - this.padB;
    const toY = (v: number) => this.padT + innerH - ((v - minV) / (maxV - minV || 1)) * innerH;
    const fmt = (v: number) => formatCutoffValue(metric, v);
    return [
      { value: maxV, y: toY(maxV), text: fmt(maxV) },
      { value: mid, y: toY(mid), text: fmt(mid) },
      { value: minV, y: toY(minV), text: fmt(minV) },
    ];
  });

  readonly allDots = computed(() => {
    const s = this.scaled();
    const metric = s.metric;
    const lastYear = this.series().at(-1)?.year;
    return [...s.cse, ...s.ece, ...s.mech]
      .filter((d) => d.year === lastYear)
      .map((d) => ({
        cx: d.x,
        cy: d.y,
        class: d.cls,
        key: d.key,
        label: formatCutoffValue(metric, d.v),
      }));
  });

  readonly aria = computed(() => {
    const m = this.metric();
    const last = this.series().at(-1);
    if (!last) return 'Cutoff trend';
    return `Latest ${last.year}: CSE ${formatCutoffValue(m, last.cse)}, ECE ${formatCutoffValue(m, last.ece)}, Mechanical ${formatCutoffValue(m, last.mechanical)}`;
  });
}
