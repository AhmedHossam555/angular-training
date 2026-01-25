# Folder Structure

```text
core/
└── domains/
    └── seo/
        ├── application/
        │   ├── index.ts
        │   └── meta.service.ts
        │
        ├── domain/
        │   ├── index.ts
        │   ├── meta-tag.model.ts
        │   └── route-meta.model.ts
        │
        ├── infrastructure/
        │   ├── index.ts
        │   ├── meta.factory.ts
        │   └── route-meta.config.ts
        │
        ├── index.ts
        └── seo.module.ts
```

- Layer responsibilities :
  application → runtime SEO logic (MetaService)
  domain → models and contracts
  infrastructure → route-level SEO configuration
  seo.module.ts → application bootstrap integration

# How to Use

1️⃣ Register SeoModule at Application Bootstrap (Required)

The SeoModule must be registered once during application bootstrap using importProvidersFrom.
This enables SSR meta rendering, client hydration, and route-based SEO updates.

- app.config.ts
```text
  ...
  export const appConfig: ApplicationConfig = {
  providers: [
  ...
  // Inject SEO module for SSR meta updates
  importProvidersFrom(SeoModule)
  ]
  };
```

# Using MetaService in a Component

- Use MetaService only when SEO data is dynamic, such as:
  CMS pages
  Blog or article pages
  Product detail pages
  Content loaded asynchronously
  For static pages, prefer route-level SEO configuration.

- Example: Component Usage:

```text
  import { Component, OnInit, inject } from '@angular/core';
  import { MetaService } from '@/app/core/domains/seo';
  @Component({
  selector: 'app-article',
  template: `<h1>Article Page</h1>`
  })
  export class ArticleComponent implements OnInit {
  private readonly metaService = inject(MetaService);

  ngOnInit(): void {
  this.metaService.updateTags({
  title: 'Angular SEO Best Practices',
  description: 'Learn how to manage SEO in Angular with SSR support.',
  keywords: 'angular, seo, ssr',
  author: 'Your Company',
  robots: 'index,follow',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  image: 'https://example.com/assets/og/article.png',
  canonical: 'https://example.com/articles/angular-seo',
  hreflangs: [
  { lang: 'en', url: 'https://example.com/articles/angular-seo' },
  { lang: 'de', url: 'https://example.com/de/articles/angular-seo' }
  ]
  });
  }
  }
```
