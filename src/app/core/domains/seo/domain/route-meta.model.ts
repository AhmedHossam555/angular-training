
// route-meta.model.ts
import { IMetaTag } from './meta-tag.model';
export interface IRouteMeta extends IMetaTag {
  hreflangs?: { lang: string; url: string }[];
}