import { fmtLakh, fmtMoney } from './money.util';

export type ProgramKey = 'eng' | 'gov' | 'mba' | 'bba';

/** years, tuition per year, other fees per year */
export const PROGRAM_COSTS: Record<
  ProgramKey,
  readonly [years: number, tuition: number, other: number]
> = {
  eng: [4, 180_000, 25_000],
  gov: [4, 60_000, 15_000],
  mba: [2, 350_000, 40_000],
  bba: [3, 120_000, 20_000],
};

export const DONUT_COLORS = [
  '#7C5CFF',
  '#22D3EE',
  '#FFB020',
  '#34D399',
  '#A5AFD0',
  '#FF5C7A',
] as const;

export interface CostLine {
  label: string;
  amount: number;
  color: string;
}

export interface SimulatorResult {
  risePercent: number;
  budget: number;
  total: number;
  yearOne: number;
  lines: CostLine[];
  donutGradient: string;
  coveragePercent: number;
  meterColor: string;
  verdictText: string;
  verdictBad: boolean;
}

function sumYears(base: number, years: number, rise: number): number {
  let total = 0;
  for (let i = 0; i < years; i++) {
    total += base * Math.pow(1 + rise, i);
  }
  return total;
}

export function computeSimulator(input: {
  program: ProgramKey;
  riseRate: number;
  budget: number;
  hostel: boolean;
  laptop: boolean;
  stressFees: boolean;
  stressIncome: boolean;
}): SimulatorResult {
  const p = PROGRAM_COSTS[input.program];
  const rise =
    input.riseRate / 100 + (input.stressFees ? 0.08 : 0);
  const hostel = input.hostel;
  const laptop = input.laptop;

  const items: { label: string; amount: number }[] = [
    { label: 'Tuition', amount: sumYears(p[1], p[0], rise) },
    { label: 'Other fees', amount: sumYears(p[2], p[0], rise) },
    {
      label: 'Hostel and mess',
      amount: hostel ? sumYears(115_000, p[0], rise) : 0,
    },
    { label: 'Books and travel', amount: sumYears(15_000, p[0], rise) },
    { label: 'Laptop', amount: laptop ? 60_000 : 0 },
  ];

  const subtotal = items.reduce((a, b) => a + b.amount, 0);
  const buffer = subtotal * 0.1;
  items.push({ label: 'Safety buffer', amount: buffer });
  const total = subtotal * 1.1;

  const yearOne =
    (p[1] + p[2] + (hostel ? 115_000 : 0) + 15_000 + (laptop ? 60_000 : 0)) *
    1.1;

  const budget = input.budget * (input.stressIncome ? 0.7 : 1);
  const gap = Math.max(0, total - budget);
  const coverage = Math.min(100, (budget / total) * 100);

  const gradientStops: string[] = [];
  let angle = 0;
  items.forEach((line, i) => {
    if (!line.amount) return;
    const start = angle;
    angle += (line.amount / total) * 100;
    gradientStops.push(
      `${DONUT_COLORS[i]} ${start}% ${angle}%`
    );
  });

  const meterColor =
    coverage >= 100 ? '#34D399' : coverage > 60 ? '#FFB020' : '#FF5C7A';

  let verdictText: string;
  let verdictBad = false;
  if (gap <= 0) {
    verdictText = `Covered, with ${fmtLakh(budget - total)} to spare. Keep it as your buffer.`;
  } else {
    const q = 0.105 / 12;
    const emi = (gap * q) / (1 - Math.pow(1 + q, -120));
    verdictBad = true;
    verdictText = `Funding gap ${fmtLakh(gap)}. As an illustrative 10.5% loan over 10 years, that is about ${fmtMoney(emi)} a month. Scholarships could shrink it.`;
  }

  const indexed = items.map((line, i) => ({
    ...line,
    color: DONUT_COLORS[i],
  }));
  const activeLines = indexed.filter((x) => x.amount);

  return {
    risePercent: Math.round(rise * 100),
    budget,
    total,
    yearOne,
    lines: activeLines,
    donutGradient: `conic-gradient(${gradientStops.join(', ')})`,
    coveragePercent: Math.round(coverage),
    meterColor,
    verdictText,
    verdictBad,
  };
}

export function lineColorFor(line: CostLine): string {
  return line.color;
}
