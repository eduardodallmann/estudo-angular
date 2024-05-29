import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  styleUrl: './button.css',
  template: `<button type="button">
    <ng-content></ng-content>
  </button>`,
})
export class Button {}
