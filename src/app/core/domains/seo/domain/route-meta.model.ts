import { IMetaTag } from './meta-tag.model';
export interface IHreflang {
  lang: string;
  url: string;
}
export interface IRouteMeta extends IMetaTag {
  hreflangs?: IHreflang[];
}