import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', loadComponent: () => import('./features/home/ui/home/home').then(m => m.Home)},
];
