/** MOD-011–013 education loan discovery demo — lender does sanction, not CampusRoute. */

export type EducationLoanMatch = {
  id: string;
  lender: string;
  type: 'Public sector bank' | 'Private bank' | 'NBFC' | 'Government portal';
  rate_band: string;
  processing_fee: string;
  max_amount: string;
  collateral: string;
  moratorium: string;
  co_applicant: string;
  profile_match_pct: number;
  why_match: string[];
  apply_url: string;
  source_note: string;
};

export const EDUCATION_LOAN_DEMO: EducationLoanMatch[] = [
  {
    id: 'vidya-lakshmi',
    lender: 'Vidya Lakshmi portal',
    type: 'Government portal',
    rate_band: 'As per lender on portal',
    processing_fee: 'Varies by bank',
    max_amount: 'Up to course need (multiple lenders)',
    collateral: 'Depends on bank & amount',
    moratorium: 'Course period + 6–12 months typical',
    co_applicant: 'Parent / guardian usually required',
    profile_match_pct: 88,
    why_match: ['Single application to multiple PSU banks', 'Aligns with MOD-011 handoff in feature map'],
    apply_url: 'https://www.vidyalakshmi.co.in',
    source_note: 'Official aggregator · verify current lenders list',
  },
  {
    id: 'sbi-skill',
    lender: 'SBI · Global Ed-Vantage (illustrative)',
    type: 'Public sector bank',
    rate_band: '8.5%–9.8% p.a. (band · demo)',
    processing_fee: '₹10k + GST (typical)',
    max_amount: '₹1.5 Cr abroad / high domestic',
    collateral: 'Collateral for higher ticket',
    moratorium: 'Course + 12 months',
    co_applicant: 'Mandatory co-borrower',
    profile_match_pct: 76,
    why_match: ['Government / IIT track in shortlist', 'Long moratorium matches 4-year UG'],
    apply_url: 'https://www.google.com/search?q=SBI+education+loan+2025',
    source_note: 'Brochure PDF only — not an offer',
  },
  {
    id: 'credila',
    lender: 'HDFC Credila',
    type: 'NBFC',
    rate_band: '10%–12.5% p.a. (illustrative)',
    processing_fee: 'Up to 1% of loan',
    max_amount: 'Full cost minus scholarship',
    collateral: 'Unsecured up to limit; else property',
    moratorium: 'EMI starts after course + grace',
    co_applicant: 'Co-borrower + income proof',
    profile_match_pct: 71,
    why_match: ['Private college fee gap on profile', 'Faster processing vs PSU queue'],
    apply_url: 'https://www.credila.com',
    source_note: 'Compare with stress-test gap before apply',
  },
  {
    id: 'axis',
    lender: 'Axis Bank education loan',
    type: 'Private bank',
    rate_band: '9.5%–11% p.a. (illustrative)',
    processing_fee: 'Negotiable with branch',
    max_amount: '₹75L+ for premier institutes',
    collateral: 'Third-party guarantee or collateral',
    moratorium: 'Study period + 1 year',
    co_applicant: 'Parent co-applicant',
    profile_match_pct: 68,
    why_match: ['NIRF tier colleges in compare tray', 'Good for metro private campuses'],
    apply_url: 'https://www.google.com/search?q=Axis+education+loan+India',
    source_note: 'Branch-specific terms',
  },
  {
    id: 'prodigy',
    lender: 'Prodigy Finance',
    type: 'NBFC',
    rate_band: 'Floating · school-linked (demo)',
    processing_fee: 'Included in APR disclosure',
    max_amount: 'Share of tuition + living',
    collateral: 'No collateral (future earning based)',
    moratorium: 'Repay after placement window',
    co_applicant: 'Often no Indian co-signer for abroad',
    profile_match_pct: 42,
    why_match: ['Only if your route is abroad PG — hide for pure India UG demo'],
    apply_url: 'https://prodigyfinance.com',
    source_note: 'Low match for India UG — shown for comparison',
  },
];