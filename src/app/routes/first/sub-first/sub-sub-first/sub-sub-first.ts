import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Button } from '../../../../components/communs/button/button';
import { TodoState } from '../../first-state';

@Component({
  selector: 'app-sub-sub-first',
  standalone: true,
  imports: [RouterOutlet, Button],
  providers: [TodoState],
  templateUrl: './sub-sub-first.html',
})
export class SubSubFirstComponent {
  constructor(private readonly todoState: TodoState) {}

  onClick() {
    this.todoState.addTodo({
      title: 'Sub Sub First Component',
      done: false,
      id: Number(Math.random().toString(36).substr(2, 9)),
    });
  }
}
