# Folder Structure

```text
logging/
├── application/
│   ├── logger.service.ts        # Application service (use in app)
│   └── index.ts                 # Public exports
│
├── domain/
│   ├── log-level.enum.ts        # Log levels (DEBUG, INFO, WARN, ERROR)
│   ├── log-policy.ts            # Logging rules (shouldLog)
│   ├── logger.interface.ts      # ILogger contract
│   └── index.ts                 # Public exports
│
├── infrastructure/
│   ├── console-logger.adapter.ts # Console implementation
│   ├── logger.config.ts          # Environment-based config
│   └── index.ts                  # Public exports
│
├── application/
│   └── logger.token.ts          # InjectionToken for ILogger
│
└── README.md                    # This file
```
# How To Use

- Register the logger globally using Angular standalone providers.

```ts 
import { ILogger , LoggerService , LOGGER_TOKEN , ConsoleLoggerAdapter } from 'core/logging';

export const appConfig: ApplicationConfig = {
  providers: [
    // Infrastructure binding
    {
      provide: LOGGER_TOKEN,
      useClass: ConsoleLoggerAdapter,
    },

    // Application service (depends on interface)
    {
      provide: LoggerService,
      useFactory: (logger: ILogger) => new LoggerService(logger),
      deps: [LOGGER_TOKEN],
    },
  ],
};
```

# How to Use in a Component

Example: home.component.ts
```ts 
import { Component } from '@angular/core';
import { LoggerService } from '@/core/logging';

@Component({
  selector: 'app-home',
  template: `<h1>Home</h1>`,
})
export class HomeComponent {
  constructor(private readonly logger: LoggerService) {
    this.logger.info('HomeComponent initialized');
  }

  loadData(): void {
    this.logger.debug('Loading data...', { page: 1 });

    try {
      // some logic
      this.logger.info('Data loaded successfully');
    } catch (error) {
      this.logger.error('Failed to load data', error);
    }
  }
}
```