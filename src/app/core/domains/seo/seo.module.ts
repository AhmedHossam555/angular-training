import { Router, NavigationEnd } from '@angular/router';
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_META } from './infrastructure';
import { MetaService } from './application'
import { filter } from 'rxjs/operators';

@NgModule({ imports: [CommonModule] })
export class SeoModule {
  constructor() {
    const router = inject(Router);
    const metaService = inject(MetaService);

    if (typeof window !== 'undefined') {
      // Only subscribe in the browser, avoid SSR errors
      router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const tags = ROUTE_META[event.urlAfterRedirects] || {};
          metaService.updateTags(tags);
        });
    }
  }
}
