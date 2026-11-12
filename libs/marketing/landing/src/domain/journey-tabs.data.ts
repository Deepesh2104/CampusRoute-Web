export type JourneyChipVariant = 'verified' | 'estimated' | 'qualify' | 'review' | 'scheduled';

export type JourneyRow =
  | { kind: 'chip'; label: string; chip: JourneyChipVariant }
  | { kind: 'bold'; label: string; text: string }
  | { kind: 'progress'; label: string; widthPercent: number };

export interface JourneyTab {
  title: string;
  description: string;
  rows: JourneyRow[];
}

export const JOURNEY_TABS: JourneyTab[] = [
  {
    title: 'Choose',
    description:
      'Compare programmes and colleges on like-for-like, verified facts.',
    rows: [
      { kind: 'chip', label: 'Sample Tech, Pune', chip: 'verified' },
      { kind: 'chip', label: 'Demo Institute, Hyderabad', chip: 'estimated' },
      { kind: 'chip', label: 'Example University, Chennai', chip: 'verified' },
    ],
  },
  {
    title: 'Fund',
    description:
      'Itemise every cost, match scholarships and compare loan terms before you commit.',
    rows: [
      { kind: 'chip', label: 'State merit scholarship', chip: 'qualify' },
      { kind: 'bold', label: 'Loan: 10.5% · 10 yrs', text: '₹21,600/mo' },
      { kind: 'bold', label: 'Documents ready', text: '6 of 8' },
    ],
  },
  {
    title: 'Build',
    description:
      'Turn a target role into a skill roadmap with projects and evidence recruiters can check.',
    rows: [
      { kind: 'progress', label: 'Data structures', widthPercent: 80 },
      { kind: 'progress', label: 'Backend project', widthPercent: 55 },
      { kind: 'progress', label: 'System design', widthPercent: 20 },
    ],
  },
  {
    title: 'Get hired',
    description:
      'Polish your resume, practise interviews, track applications and compare offers side by side.',
    rows: [
      { kind: 'chip', label: 'Applied · 6', chip: 'review' },
      { kind: 'chip', label: 'Interview · 2', chip: 'scheduled' },
      { kind: 'bold', label: 'Offer · 1', text: 'Compare' },
    ],
  },
];
