import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme';
import { Button } from './components/communs/button/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Button],
  providers: [ThemeService],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  onClick() {
    this.themeService.toggleTheme();
  }
}
