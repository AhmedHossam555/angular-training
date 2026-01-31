import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { SeoModule } from './core/domains/seo';
import { ILogger , LOGGER_TOKEN , ConsoleLoggerAdapter , LoggerService  } from './core/domains/logging';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    
    // Inject SEO module for SSR meta updates
    importProvidersFrom(SeoModule),
  // Infrastructure
    {
      provide: LOGGER_TOKEN,
      useClass: ConsoleLoggerAdapter,
    },

    // Application layer (depends ONLY on interface)
    {
      provide: LoggerService,
      useFactory: (logger: ILogger) => new LoggerService(logger),
      deps: [LOGGER_TOKEN],
    },
  ]
};
