import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsentStoreService, type ConsentScopeId } from '@campusroute/core-consent';
import { ClientAuditService } from '@campusroute/shared-util';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'cr-consent-page',
  imports: [SectionEyebrowComponent, DatePipe],
  templateUrl: './consent-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsentPageComponent {
  private readonly store = inject(ConsentStoreService);
  private readonly audit = inject(ClientAuditService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly settings = this.store.settings;
  readonly consent = this.store.consent;
  readonly receipts = this.store.receipts;
  readonly requiredGranted = this.store.requiredGranted;
  readonly auditEntries = this.audit.entries;

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
