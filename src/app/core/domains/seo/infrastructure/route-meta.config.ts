
import { RouteMeta } from '../domain';

export const ROUTE_META: Record<string, RouteMeta> = {
  '/home': {
    title: 'Home - HowdajWebsite',
    description: 'Welcome to HowdajWebsite, your trusted source for [topic]',
    url: 'https://www.yoursite.com/home',
    image: 'https://www.yoursite.com/assets/og-home.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    locale: 'en_US',
    siteName: 'HowdajWebsite',
    canonical: 'https://www.yoursite.com/home',
    hreflangs: [
      { lang: 'en', url: 'https://www.yoursite.com/home' },
      { lang: 'ar', url: 'https://www.yoursite.com/ar/home' },
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

