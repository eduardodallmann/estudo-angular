import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { Button } from './components/communs/button/button';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Button],
  providers: [ThemeService],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly themeService: ThemeService) {}

  onClick() {
    this.themeService.toggleTheme();
  }
}
