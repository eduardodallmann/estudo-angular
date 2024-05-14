import { Routes } from '@angular/router';
import { FirstComponent } from './routes/first/first';
import { SecondComponent } from './routes/second/second';
import { SubFirstComponent } from './routes/first/sub-first/sub-first';
import { SubSubFirstComponent } from './routes/first/sub-first/sub-sub-first/sub-sub-first';

export const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [
      {
        path: 'sub-first',
        component: SubFirstComponent,
        children: [
          {
            path: 'sub-sub-first',
            component: SubSubFirstComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'second',
    component: SecondComponent,
  },
];
