
// route-meta.model.ts
import { IMetaTag } from './meta-tag.model';
export interface RouteMeta extends IMetaTag {
  hreflangs?: { lang: string; url: string }[];
}