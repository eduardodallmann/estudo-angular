import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoSignalsStateService } from 'src/app/store/todo-store.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './first.html',
})
export class FirstComponent {
  constructor(public todoState: TodoSignalsStateService) {
    this.todoState.init();
  }
}
