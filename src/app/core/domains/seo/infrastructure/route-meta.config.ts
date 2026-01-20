import { IMetaTag } from "../domain";

export interface RouteMeta extends IMetaTag {
  hreflangs?: { lang: string; url: string }[]; // For multilingual support
}

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Home - HowdajWebsite',
    description: 'Welcome to HowdajWebsite, your trusted source for [topic]',
    keywords: 'angular, seo, ssr, ddd',
    url: 'https://www.yoursite.com/',
    image: 'https://www.yoursite.com/assets/og-home.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    author: 'Your Company Name',
    robots: 'index, follow, max-image-preview:large',
    locale: 'en_US',
    siteName: 'HowdajWebsite',
    canonical: 'https://www.yoursite.com/',
    hreflangs: [
      { lang: 'en', url: 'https://www.yoursite.com/' },
      { lang: 'ar', url: 'https://www.yoursite.com/ar/' },
      { lang: 'ru', url: 'https://www.yoursite.com/ru/' },
      { lang: 'zh', url: 'https://www.yoursite.com/zh/' },
    ],
  },
  '/about': {
    title: 'About Us - HowdajWebsite',
    description: 'Learn more about HowdajWebsite and our mission.',
    url: 'https://www.yoursite.com/about',
    image: 'https://www.yoursite.com/assets/og-about.jpg',
    hreflangs: [
      { lang: 'en', url: 'https://www.yoursite.com/about' },
      { lang: 'ar', url: 'https://www.yoursite.com/ar/about' },
    ],
  },
};



