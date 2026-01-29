import { PlaceDto } from './place.dto';
export class PlaceModel {
  constructor(private dto: PlaceDto) {}

  get id() {
    return this.dto.id;
  }

  get name() {
    return this.dto.title;
  }

  get description() {
    return this.dto.desc;
  }

  get city() {
    return this.dto.city_name;
  }

  get image() {
    return this.dto.image_url;
  }
}
