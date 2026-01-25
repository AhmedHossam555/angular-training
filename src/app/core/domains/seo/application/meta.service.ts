import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { IMetaTag, IRouteMeta } from '../domain';

@Injectable({ providedIn: 'root' })
export class MetaService {
  private meta = inject(Meta);
  private title = inject(Title);
  private platformId = inject(PLATFORM_ID);

  updateTags(tags: IMetaTag & IRouteMeta) {
    const url = tags.url || (isPlatformBrowser(this.platformId) ? window.location.href : '');

    if (tags.title) {
      this.title.setTitle(tags.title);
      this.meta.updateTag({ name: 'title', content: tags.title });
      this.meta.updateTag({ property: 'og:title', content: tags.title });
      this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    }

    if (tags.description) {
      this.meta.updateTag({ name: 'description', content: tags.description });
      this.meta.updateTag({ property: 'og:description', content: tags.description });
      this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    }

    if (tags.keywords) this.meta.updateTag({ name: 'keywords', content: tags.keywords });
    if (tags.author) this.meta.updateTag({ name: 'author', content: tags.author });
    if (tags.robots) this.meta.updateTag({ name: 'robots', content: tags.robots });
    if (tags.ogType) this.meta.updateTag({ property: 'og:type', content: tags.ogType });
    if (tags.twitterCard) this.meta.updateTag({ name: 'twitter:card', content: tags.twitterCard });
    if (tags.locale) this.meta.updateTag({ property: 'og:locale', content: tags.locale });
    if (tags.siteName) this.meta.updateTag({ property: 'og:site_name', content: tags.siteName });

    if (url) {
      this.meta.updateTag({ property: 'og:url', content: url });
      this.meta.updateTag({ name: 'twitter:url', content: url });
      this.updateCanonical(tags.canonical || url);
    }

    if (tags.image) {
      this.meta.updateTag({ property: 'og:image', content: tags.image });
      this.meta.updateTag({ name: 'twitter:image', content: tags.image });
    }

    if (tags.hreflangs) this.updateHreflangs(tags.hreflangs);
  }

  private updateCanonical(url: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private updateHreflangs(hreflangs: { lang: string; url: string }[]) {
    if (!isPlatformBrowser(this.platformId)) return;
    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach(el => el.remove());
    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', url);
      document.head.appendChild(link);
    });
  }
}

