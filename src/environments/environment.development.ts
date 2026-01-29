import { BASE_ENVIRONMENT } from './base/environment.base';

export const environment = {
  ...BASE_ENVIRONMENT,
  name: 'development',
  port: 4500,
  api: {
    ...BASE_ENVIRONMENT.api,
    baseUrl: 'https://dev.api.example.com',
  },

  logging: {
    ...BASE_ENVIRONMENT.logging,
    level: 'debug',
  },
};
