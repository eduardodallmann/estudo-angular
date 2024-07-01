import { Component } from '@angular/core';
import { MyComponent } from 'src/app/components/my-component/my-component';

@Component({
  selector: 'app-second',
  standalone: true,
  templateUrl: './second.html',
  imports: [MyComponent],
})
export class SecondComponent {
  title = 'Second Component';
}
