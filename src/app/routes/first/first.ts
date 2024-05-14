import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoState } from './first-state';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  providers: [TodoState],
  templateUrl: './first.html',
})
export class FirstComponent {
  count: number = 0;
  loading = false;

  constructor(private todoState: TodoState) {
    this.todoState.todos.subscribe((todos) => {
      this.count = todos.length;
    });
    this.todoState.loading.subscribe((loading) => {
      this.loading = loading;
    });

    this.todoState.init();
  }
}
