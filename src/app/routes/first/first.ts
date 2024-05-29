import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TodoState } from './first-state';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [TodoState],
  templateUrl: './first.html',
})
export class FirstComponent {
  constructor(public todoState: TodoState) {
    this.todoState.init();
  }
}
