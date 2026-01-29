import { Routes } from '@angular/router';

export const PLACES_ROUTES: Routes = [
  {
    path: ':id',
    loadComponent: () =>
      import('../ui/place-details.component')
        .then(m => m.PlaceDetailsComponent),
  },
];
