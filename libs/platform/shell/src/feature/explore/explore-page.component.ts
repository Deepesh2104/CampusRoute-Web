import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentSharePreviewService, ConsentStoreService } from '@campusroute/core-consent';
import { ClientAuditService } from '@campusroute/shared-util';
import { CampusDemoService } from '../../application/campus-demo.service';import { formatLakhs, formatLpaRange } from '../../domain/format-money';
import { ConfidenceBadgeComponent } from '../../ui/confidence-badge/confidence-badge.component';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'cr-explore-page',
  imports: [RouterLink, SectionEyebrowComponent, ConfidenceBadgeComponent],
  templateUrl: './explore-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExplorePageComponent {
  private readonly campus = inject(CampusDemoService);
  private readonly consent = inject(ConsentStoreService);
  private readonly sharePreview = inject(ConsentSharePreviewService);
  private readonly audit = inject(ClientAuditService);
  readonly overview = this.campus.overview;
  readonly selectedId = signal('vit-vellore');

  formatLakhs = formatLakhs;
  formatLpaRange = formatLpaRange;

  selectCollege(id: string): void {
    this.selectedId.set(id);
  }

  isShortlisted(id: string): boolean {
    return this.campus.isShortlisted(id);
  }

  shortlist(id: string): void {
    this.campus.shortlistCollege(id);
  }

  async shareWithCollege(): Promise<void> {
    const college = this.selectedCollege();
    if (!college) return;
    const scopes = this.consent.scopesForShare([`College lens: ${college.short_name}`]);
    const approved = await this.sharePreview.request(
      'Share this lens with a college?',
      'Preview exactly what leaves your account before any enquiry is sent.',
      scopes
    );
    if (!approved) return;
    this.audit.log('consent.share.college.preview-approved', { scope: 'consent' });
    this.consent.appendReceipt('share.college.lens', college.short_name);
  }
  selectedCollege() {
    return this.campus.collegeById(this.selectedId());
  }

  totalCost(id: string): number {
    const c = this.campus.collegeById(id);
    return c ? this.campus.totalCostLakhs(c) : 0;
  }

  skillSlug(skill: string): string {
    return skill.toLowerCase().replaceAll(' ', '-');
  }
}
