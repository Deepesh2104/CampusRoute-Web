export type ScholarshipMatch = {
  id: string;
  name: string;
  provider: string;
  who: string;
  benefit: string;
  deadline: string;
  eligibility_match_pct: number;
  reasons: string[];
  apply_url: string;
};

export const SCHOLARSHIP_DEMO: ScholarshipMatch[] = [
  {
    id: 'nsp-post-matric',
    name: 'National Scholarship Portal — post-matric',
    provider: 'Ministry of Education',
    who: 'SC/ST/OBC with income certificate',
    benefit: 'Tuition + maintenance (category-based)',
    deadline: '15 Dec 2025 (illustrative)',
    eligibility_match_pct: 72,
    reasons: ['Income certificate likely required', 'Category not set in Profile — verify'],
    apply_url: 'https://scholarships.gov.in',
  },
  {
    id: 'merit-cum-means',
    name: 'Institute merit-cum-means',
    provider: 'College (per shortlist)',
    who: 'Family income below threshold + merit rank',
    benefit: '25–100% tuition waiver',
    deadline: 'Within 2 weeks of seat acceptance',
    eligibility_match_pct: 64,
    reasons: ['Matches PCM/JEE band in Profile', 'Need fee receipt after admission'],
    apply_url: 'https://www.google.com/search?q=merit+cum+means+scholarship+2025',
  },
  {
    id: 'state-tech',
    name: 'State technical education scholarship',
    provider: 'State SCERT / technical dept',
    who: 'Govt quota state domicile',
    benefit: '₹25k–₹50k per year (illustrative)',
    deadline: 'Mar 2026 (illustrative)',
    eligibility_match_pct: 58,
    reasons: ['City in Profile may qualify for domicile', 'Confirm with state portal'],
    apply_url: 'https://www.google.com/search?q=state+scholarship+technical+education',
  },
  {
    id: 'entrance-rank',
    name: 'Entrance rank scholarship (private)',
    provider: 'VIT / BITS-style rebates',
    who: 'Top percentile in institute entrance',
    benefit: 'One-time ₹50k–₹2L fee rebate',
    deadline: 'Before first fee deposit',
    eligibility_match_pct: 81,
    reasons: ['Entrance readiness % in Profile ≥ 70', 'Applies if shortlist includes private deemed'],
    apply_url: 'https://www.google.com/search?q=entrance+scholarship+fee+rebate',
  },
];
