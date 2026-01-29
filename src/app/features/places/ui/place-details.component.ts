import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PlacesFacade, PlacesSeoFacade } from '../application';
import { tap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-place-details',
  imports: [AsyncPipe],
  templateUrl: './place-details.component.html',
})
export class PlaceDetailsComponent {
  private facade = inject(PlacesFacade);
  private seo = inject(PlacesSeoFacade);

  place$ = this.facade.place$.pipe(
    tap(place => this.seo.update(place))
  );
}
