import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApplyHubNavComponent } from '@campusroute/domains-admissions';
import { DocumentVaultStore } from '../application/document-vault.store';

@Component({
  selector: 'cr-document-vault-page',
  imports: [RouterLink, ApplyHubNavComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cr-pa-page">
      <cr-apply-hub-nav section="documents" />
      <div class="cr-pa-page-hero">
        <p class="cr-pa-eyebrow">Documents · MOD-015 demo</p>
        <h1 class="cr-pa-page-title-xl">Admission document vault</h1>
        <p class="cr-pa-lede">
          Upload stays on this device. OCR suggests a category — <strong>you confirm</strong> before we use it on applications.
        </p>
      </div>

      <label class="cr-pa-btn cr-pa-btn--emerald cr-p3-upload-btn">
        Upload files
        <input type="file" multiple class="cr-p3-upload-input" (change)="onFiles($event)" data-testid="vault-upload" />
      </label>

      @if (vault.documents().length === 0) {
        <p class="cr-pa-muted">No documents yet — add PDFs or images from your checklist.</p>
      } @else {
        <table class="cr-p2-trend-table cr-p3-vault-table" data-testid="vault-table">
          <thead>
            <tr>
              <th>File</th>
              <th>OCR</th>
              <th>Suggested</th>
              <th>Your label (confirm)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (doc of vault.documents(); track doc.id) {
              <tr>
                <td>{{ doc.file_name }}</td>
                <td>{{ doc.ocr_status === 'ready' ? 'Ready' : 'Processing…' }}</td>
                <td>{{ doc.suggested_category ?? '—' }}</td>
                <td>
                  @if (doc.ocr_status === 'ready') {
                    <select
                      class="cr-p2-input"
                      [value]="doc.confirmed_category ?? doc.suggested_category ?? ''"
                      (change)="vault.confirmCategory(doc.id, $any($event.target).value)"
                    >
                      @for (cat of vault.categories; track cat) {
                        <option [value]="cat">{{ cat }}</option>
                      }
                    </select>
                  } @else {
                    <span class="cr-pa-muted">Wait for OCR</span>
                  }
                </td>
                <td>
                  <button type="button" class="cr-pa-text-link" (click)="vault.remove(doc.id)">Remove</button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }

    </div>
  `,
})
export class DocumentVaultPageComponent {
  readonly vault = inject(DocumentVaultStore);

  onFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.vault.addFromFileList(input.files);
    input.value = '';
  }
}
