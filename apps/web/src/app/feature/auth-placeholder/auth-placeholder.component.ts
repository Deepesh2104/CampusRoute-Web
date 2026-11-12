import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cr-auth-placeholder',
  template: `<h1>{{ title() }}</h1><p>Wire to core-auth library (MOD-001).</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPlaceholderComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly title = signal('Auth');

  ngOnInit(): void {
    const t = this.route.snapshot.data['title'] as string | undefined;
    if (t) this.title.set(t);
  }
}
