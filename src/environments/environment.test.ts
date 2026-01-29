import { BASE_ENVIRONMENT } from './base/environment.base';

export const environment = {
  ...BASE_ENVIRONMENT,
  name: 'test',

  api: {
    ...BASE_ENVIRONMENT.api,
    baseUrl: 'https://test.api.example.com',
  },

  logging: {
    ...BASE_ENVIRONMENT.logging,
    level: 'warn',
  },
};
