
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MetaService } from './application';
import { ROUTE_META } from './infrastructure';

@NgModule({ imports: [CommonModule] })
export class SeoModule {
  constructor() {
    const router = inject(Router);
    const metaService = inject(MetaService);

    if (typeof window !== 'undefined') {
      router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const tags = ROUTE_META[event.urlAfterRedirects] || {};
          metaService.updateTags(tags);
        });
    }
  }
}
