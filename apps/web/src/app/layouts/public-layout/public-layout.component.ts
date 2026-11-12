import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'cr-public-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayoutComponent {}
