import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PlaceModel, PlaceDto } from '../domain';

@Injectable({ providedIn: 'root' })
export class PlacesService {
  private http = inject(HttpClient);

  getPlaceById(id: string) {
    return this.http
      .get<PlaceDto>(`/api/places/${id}`)
      .pipe(map(dto => new PlaceModel(dto)));
  }
}
