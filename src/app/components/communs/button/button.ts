import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  styleUrl: './button.scss',
  template: `<button type="button">
    <ng-content></ng-content>
  </button>`,
})
export class Button {}
