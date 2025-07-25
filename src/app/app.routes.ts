import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./features/projects/projects').then(m => m.Projects)
    },
    {
        path: 'project/:id',
        loadComponent: () =>
          import('./features/myprojects/myprojects').then(m => m.Myprojects)
    }
    
  ];
