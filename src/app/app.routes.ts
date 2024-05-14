import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'first',
    loadComponent: () =>
      import('./routes/first/first').then((m) => m.FirstComponent),
    children: [
      {
        path: 'sub-first',
        loadComponent: () =>
          import('./routes/first/sub-first/sub-first').then(
            (m) => m.SubFirstComponent
          ),
        children: [
          {
            path: 'sub-sub-first',
            loadComponent: () =>
              import(
                './routes/first/sub-first/sub-sub-first/sub-sub-first'
              ).then((m) => m.SubSubFirstComponent),
          },
        ],
      },
    ],
  },
  {
    path: 'second',
    loadComponent: () =>
      import('./routes/second/second').then((m) => m.SecondComponent),
  },
];
