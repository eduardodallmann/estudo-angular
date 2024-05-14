import { Injectable } from '@angular/core';

type Themes = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private theme: Themes = 'light';

  constructor() {
    this.theme = 'light';
    this.setTheme(this.theme);
  }

  setTheme(theme: Themes) {
    this.theme = theme;
    document.body.className = theme;
  }

  toggleTheme() {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light');
  }

  getTheme() {
    return this.theme;
  }
}
