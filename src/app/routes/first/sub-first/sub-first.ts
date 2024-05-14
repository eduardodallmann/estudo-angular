import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sub-first',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sub-first.html',
})
export class SubFirstComponent {
  title = 'First Component';
}
