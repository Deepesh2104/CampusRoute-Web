import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'cr-learner-shell',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="bar">
      <a routerLink="/">CampusRoute</a>
      <nav>
        <a routerLink="/app">Dashboard</a>
      </nav>
    </header>
    <router-outlet />
  `,
  styles: `
    .bar {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--cr-line);
    }
    a { color: var(--cr-tx); text-decoration: none; }
    nav { display: flex; gap: 1rem; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnerShellComponent {}
