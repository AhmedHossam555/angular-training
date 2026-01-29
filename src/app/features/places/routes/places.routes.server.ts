import { Routes } from '@angular/router';
import { RenderMode } from '@angular/ssr';

export const PLACES_ROUTES_SERVER: Routes = [
  {
    path: ':id',
    loadComponent: () =>
      import('../ui/place-details.component')
        .then(m => m.PlaceDetailsComponent),
    data: {
      renderMode: RenderMode.Server,
    },
  },
];