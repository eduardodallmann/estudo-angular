import { Component } from '@angular/core';
import { MyService } from 'src/app/services/my-service';

import { MyChild } from './my-child';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [MyChild],
  providers: [MyService],
  template: `<hr />
    <button type="button" (click)="click()">click</button><br />{{
      service.count
    }}<br /><app-my-child></app-my-child>
    <hr />`,
})
export class MyComponent {
  constructor(public readonly service: MyService) {}

  click() {
    this.service.count++;
  }
}
