import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoSignalsStateService } from 'src/app/store/todo-store.service';

import { Button } from '../../../../components/communs/button/button';

@Component({
  selector: 'app-sub-sub-first',
  standalone: true,
  imports: [RouterOutlet, Button],
  templateUrl: './sub-sub-first.html',
})
export class SubSubFirstComponent {
  constructor(public readonly todoState: TodoSignalsStateService) {}

  onClick() {
    this.todoState.addTodo({
      title: 'Sub Sub First Component',
      done: false,
      id: Number(Math.random().toString(36).substr(2, 9)),
    });
  }
}
