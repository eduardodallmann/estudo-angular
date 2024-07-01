import { Component } from '@angular/core';
import { MyService } from 'src/app/services/my-service';

@Component({
  selector: 'app-my-child',
  standalone: true,
  template: `child: {{ service.count }}`,
})
export class MyChild {
  constructor(public readonly service: MyService) {}
}
