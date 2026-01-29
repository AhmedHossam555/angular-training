import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PlaceModel } from '../domain';
// optional
@Injectable({ providedIn: 'root' })
export class PlacesSeoFacade {
  private meta = inject(Meta);
  private title = inject(Title);

  update(place: PlaceModel) {
    this.title.setTitle(`${place.name} | Places`);

    this.meta.updateTag({
      name: 'description',
      content: place.description,
    });

    this.meta.updateTag({
      property: 'og:image',
      content: place.image,
    });
  }
}
