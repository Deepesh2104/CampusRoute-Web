import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthSessionService } from '@campusroute/core-auth';
import { ConsentStoreService, type ConsentScopeId } from '@campusroute/core-consent';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';

const ACCESS_LOG = [
  { kind: 'eye', title: 'Aarav profile', detail: 'You · just now' },
  { kind: 'key', title: 'Career signals', detail: 'CampusRoute demo · today' },
  { kind: 'check', title: 'Budget simulator', detail: 'Local only · never shared' },
] as const;

@Component({
  selector: 'cr-consent-page',
  imports: [SectionEyebrowComponent],
  templateUrl: './consent-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsentPageComponent {
  private readonly store = inject(ConsentStoreService);
  private readonly auth = inject(AuthSessionService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly settings = this.store.settings;
  readonly consent = this.store.consent;
  readonly requiredGranted = this.store.requiredGranted;
  readonly accessLog = computed(() => {
    const first = this.auth.displayName().split(' ')[0] || 'Learner';
    return ACCESS_LOG.map((row, i) =>
      i === 0 ? { ...row, title: `${first} profile` } : { ...row }
    );
  });

  readonly returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  readonly blockedReason = this.route.snapshot.queryParamMap.get('reason');

  toggle(id: string, checked: boolean): void {
    this.store.toggle(id as ConsentScopeId, checked);
  }

  continueToApp(): void {
    if (!this.requiredGranted()) return;
    const target = this.returnUrl && this.returnUrl.startsWith('/app') ? this.returnUrl : '/app';
    void this.router.navigateByUrl(target);
  }
}
