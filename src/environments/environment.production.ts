import { BASE_ENVIRONMENT } from './base/environment.base';

export const environment = {
  ...BASE_ENVIRONMENT,
  name: 'production',
  production: true,
  port: 5000,
  api: {
    ...BASE_ENVIRONMENT.api,
    baseUrl: 'https://api.example.com',
    timeoutMs: 5000,
  },

  logging: {
    ...BASE_ENVIRONMENT.logging,
    level: 'error',
    enableConsole: false,
  },

  features: {
    ...BASE_ENVIRONMENT.features,
    enableAnalytics: true,
  },
};
