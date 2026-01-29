import { BASE_ENVIRONMENT } from './base/environment.base';

export const environment = {
  ...BASE_ENVIRONMENT,
  name: 'staging',
  port: 5000,
  api: {
    ...BASE_ENVIRONMENT.api,
    baseUrl: 'https://staging.api.example.com',
  },

  logging: {
    ...BASE_ENVIRONMENT.logging,
    level: 'info',
  },
};
