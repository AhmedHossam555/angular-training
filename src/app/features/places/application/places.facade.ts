import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, shareReplay } from 'rxjs';
import { PlacesService } from '../infrastructure';

@Injectable({ providedIn: 'root' })
export class PlacesFacade {
  private route = inject(ActivatedRoute);
  private placesService = inject(PlacesService);

  place$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id')!;
      return this.placesService.getPlaceById(id);
    }),
    shareReplay(1)
  );
}