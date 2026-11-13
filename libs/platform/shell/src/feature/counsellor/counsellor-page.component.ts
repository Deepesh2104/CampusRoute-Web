import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CampusDemoService } from '../../application/campus-demo.service';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';

const PRESETS = [
  'Which is the lower-cost path between VIT and RVCE?',
  'How should I think about placement salary data?',
  'What should I do before applying?',
  'Compare software and embedded careers',
];

@Component({
  selector: 'cr-counsellor-page',
  imports: [SectionEyebrowComponent],
  templateUrl: './counsellor-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounsellorPageComponent {
  private readonly campus = inject(CampusDemoService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly messages = this.campus.chatHistory;
  readonly presets = PRESETS;
  readonly draft = signal('');
  readonly sending = signal(false);

  async submit(preset?: string): Promise<void> {
    const text = (preset ?? this.draft()).trim();
    if (!text || this.sending()) return;
    this.draft.set('');
    this.sending.set(true);
    try {
      await this.campus.sendCounsellorMessage(text);
    } finally {
      this.sending.set(false);
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    void this.submit();
  }

  promptTestId(prompt: string): string {
    return `prompt-${prompt.slice(0, 18).toLowerCase().replaceAll(' ', '-')}`;
  }

  formatMsg(content: string): SafeHtml {
    const html = content
      .split('\n')
      .map((line) => {
        const trimmed = line.trim();
        const body = trimmed.startsWith('- ')
          ? `• ${trimmed.slice(2)}`
          : trimmed;
        return body.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      })
      .join('<br>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
