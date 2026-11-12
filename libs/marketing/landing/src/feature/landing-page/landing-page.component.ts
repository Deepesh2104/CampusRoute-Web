import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JOURNEY_TABS,
  JourneyChipVariant,
  JourneyTab,
} from '../../domain/journey-tabs.data';
import { ProgramKey, computeSimulator } from '../../domain/cost-simulator';
import { fmtLakh, fmtMoney } from '../../domain/money.util';

@Component({
  selector: 'cr-landing-page',
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: '../../styles/landing.scss',
  host: { class: 'cr-landing' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly fmtLakh = fmtLakh;
  readonly fmtMoney = fmtMoney;

  readonly journeyTabs = JOURNEY_TABS;
  journeyIndex = 0;
  panelAnimation = 'pin 0.5s both';

  readonly marqueeLabels = [
    'Tuition',
    'Hostel',
    'Scholarships',
    'Education loans',
    'Skills',
    'Projects',
    'Resume',
    'Interviews',
    'Offers',
    'Tuition',
    'Hostel',
    'Scholarships',
    'Education loans',
    'Skills',
    'Projects',
    'Resume',
    'Interviews',
    'Offers',
  ];

  readonly programOptions: { key: ProgramKey; label: string }[] = [
    { key: 'eng', label: 'B.Tech, private' },
    { key: 'gov', label: 'B.Tech, government' },
    { key: 'mba', label: 'MBA, private' },
    { key: 'bba', label: 'BBA, private' },
  ];

  program: ProgramKey = 'eng';
  hostel = true;
  laptop = true;
  stressFees = false;
  stressIncome = false;
  rise = 5;
  budget = 900_000;

  private displayedTotal = 0;
  private totalRaf = 0;

  sim = computeSimulator({
    program: 'eng',
    riseRate: 5,
    budget: 900_000,
    hostel: true,
    laptop: true,
    stressFees: false,
    stressIncome: false,
  });

  consentExam = true;
  consentBudget = false;
  consentShortlist = false;

  joinEmail = '';
  joinMsg = '';
  joinMsgOk = false;
  joinMsgEr = false;

  readonly bentoTiles = [
    {
      icon: '📊',
      title: 'Honest outcomes',
      text: 'Placement claims show the denominator, cohort and whether it is a median or an average.',
    },
    {
      icon: '⚖️',
      title: 'Neutral rankings',
      text: 'You adjust the factors. Sponsored listings are labelled and can never change a score.',
    },
    {
      icon: '🤖',
      title: 'AI that asks first',
      text: 'It cites sources and admits uncertainty. It never applies, pays or sends without your confirmation.',
    },
  ];

  readonly notList = [
    'A bank or lender. Lenders alone decide on sanction.',
    'A promise of admission, scholarship, visa, placement or salary.',
    'A replacement for official college, exam or government portals.',
    'A tool to monitor students or family finances.',
  ];

  readonly faqs = [
    {
      q: 'Who is CampusRoute for first?',
      a: 'Students and parents making private engineering decisions in India. We will widen based on what real users teach us.',
    },
    {
      q: 'Are the costs official?',
      a: 'Each line is labelled official or estimated, with a source and date. An unknown fee is marked unknown, never counted as zero.',
    },
    {
      q: 'Can I get a loan through CampusRoute?',
      a: 'We help you compare terms and prepare documents. The lender makes the decision, and you submit only when you confirm.',
    },
    {
      q: 'What will it cost?',
      a: 'Pricing is still being validated with early users. Join the list and help shape it.',
    },
  ];

  private revealIo?: IntersectionObserver;
  private heroMove?: (e: PointerEvent) => void;

  @ViewChild('stage') private stage?: ElementRef<HTMLElement>;
  @ViewChild('hero') private hero?: ElementRef<HTMLElement>;
  @ViewChild('journeyPanel') private journeyPanel?: ElementRef<HTMLElement>;

  get activeJourney(): JourneyTab {
    return this.journeyTabs[this.journeyIndex];
  }

  get budgetLabel(): string {
    return fmtLakh(this.sim.budget);
  }

  get totalLabel(): string {
    return fmtMoney(this.displayedTotal);
  }

  get firstYearLabel(): string {
    return fmtMoney(this.sim.yearOne);
  }

  get consentSummary(): string {
    const parts = ['name and email'];
    if (this.consentExam) parts.push('exam rank');
    if (this.consentBudget) parts.push('household budget');
    if (this.consentShortlist) parts.push('saved shortlist');
    return (
      'Sending: ' +
      parts.join(', ') +
      '. Nothing else leaves your account.'
    );
  }

  chipClass(chip: JourneyChipVariant): string {
    return chip === 'estimated' || chip === 'review' ? 'ch w' : 'ch';
  }

  chipLabel(chip: JourneyChipVariant): string {
    const labels: Record<JourneyChipVariant, string> = {
      verified: 'Verified fee',
      estimated: 'Estimated',
      qualify: 'You may qualify',
      review: 'In review',
      scheduled: 'Scheduled',
    };
    return labels[chip];
  }

  selectJourney(index: number): void {
    this.journeyIndex = index;
    this.panelAnimation = 'none';
    const panel = this.journeyPanel?.nativeElement;
    if (panel) {
      void panel.offsetHeight;
    }
    this.panelAnimation = 'pin 0.5s both';
    this.cdr.markForCheck();
  }

  setProgram(key: ProgramKey): void {
    this.program = key;
    this.recalc();
  }

  toggleHostel(): void {
    this.hostel = !this.hostel;
    this.recalc();
  }

  toggleLaptop(): void {
    this.laptop = !this.laptop;
    this.recalc();
  }

  toggleStressFees(): void {
    this.stressFees = !this.stressFees;
    this.recalc();
  }

  toggleStressIncome(): void {
    this.stressIncome = !this.stressIncome;
    this.recalc();
  }

  onRiseInput(event: Event): void {
    const el = event.target as HTMLInputElement;
    this.rise = Number(el.value);
    this.recalc();
  }

  onBudgetInput(event: Event): void {
    const el = event.target as HTMLInputElement;
    this.budget = Number(el.value);
    this.recalc();
  }

  toggleConsent(
    field: 'exam' | 'budget' | 'shortlist'
  ): void {
    if (field === 'exam') this.consentExam = !this.consentExam;
    if (field === 'budget') this.consentBudget = !this.consentBudget;
    if (field === 'shortlist') this.consentShortlist = !this.consentShortlist;
    this.cdr.markForCheck();
  }

  submitJoin(event: Event): void {
    event.preventDefault();
    const v = this.joinEmail.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      this.joinMsgOk = false;
      this.joinMsgEr = true;
      this.joinMsg = 'Enter a valid email, like name@example.com.';
      this.cdr.markForCheck();
      return;
    }
    this.joinMsgOk = true;
    this.joinMsgEr = false;
    this.joinMsg =
      'Thanks! This is a demo page, so nothing was stored.';
    this.joinEmail = '';
    this.cdr.markForCheck();
  }

  ngAfterViewInit(): void {
    this.recalc(false);
    this.setupReveal();
    this.setupHeroParallax();
    this.setupBentoSpotlight();
  }

  ngOnDestroy(): void {
    this.revealIo?.disconnect();
    if (this.heroMove && this.hero?.nativeElement) {
      this.hero.nativeElement.removeEventListener(
        'pointermove',
        this.heroMove
      );
    }
    cancelAnimationFrame(this.totalRaf);
  }

  private recalc(tween = true): void {
    this.sim = computeSimulator({
      program: this.program,
      riseRate: this.rise,
      budget: this.budget,
      hostel: this.hostel,
      laptop: this.laptop,
      stressFees: this.stressFees,
      stressIncome: this.stressIncome,
    });
    if (tween) {
      this.tweenTotal(this.sim.total);
    } else {
      this.displayedTotal = this.sim.total;
    }
    this.cdr.markForCheck();
  }

  private tweenTotal(to: number): void {
    cancelAnimationFrame(this.totalRaf);
    const from = this.displayedTotal;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / 500);
      this.displayedTotal =
        from + (to - from) * (1 - Math.pow(1 - p, 3));
      this.cdr.markForCheck();
      if (p < 1) {
        this.totalRaf = requestAnimationFrame(step);
      }
    };
    this.totalRaf = requestAnimationFrame(step);
  }

  private setupReveal(): void {
    this.revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target;
          target.classList.add('in');
          target.querySelectorAll<HTMLElement>('[data-n]').forEach((el) => {
            const goal = Number(el.dataset['n'] ?? '0');
            const suffix = el.dataset['s'] ?? '';
            const animStart = performance.now();
            const animate = (now: number) => {
              const p = Math.min(1, (now - animStart) / 1400);
              const value = Math.round(
                goal * (1 - Math.pow(1 - p, 3))
              );
              el.textContent = String(value) + suffix;
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          });
          this.revealIo?.unobserve(target);
        });
      },
      { threshold: 0.2 }
    );
    const root = this.host.nativeElement as HTMLElement;
    root.querySelectorAll('.rv').forEach((el) => this.revealIo?.observe(el));
  }

  private setupHeroParallax(): void {
    const stageEl = this.stage?.nativeElement;
    const heroEl = this.hero?.nativeElement;
    if (!stageEl || !heroEl) return;
    this.heroMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      stageEl.querySelectorAll<HTMLElement>('.fl').forEach((card) => {
        const d = Number(card.dataset['d'] ?? '0');
        card.style.transform = `translate(${x * d * 2}px,${y * d * 2}px) rotateY(${x * d * 0.5}deg) rotateX(${-y * d * 0.5}deg)`;
      });
    };
    heroEl.addEventListener('pointermove', this.heroMove);
  }

  private setupBentoSpotlight(): void {
    const root = this.host.nativeElement as HTMLElement;
    root.querySelectorAll<HTMLElement>('.bx').forEach((box) => {
        box.addEventListener('pointermove', (e: PointerEvent) => {
          const r = box.getBoundingClientRect();
          box.style.setProperty('--x', `${e.clientX - r.left}px`);
          box.style.setProperty('--y', `${e.clientY - r.top}px`);
        });
      });
  }
}
