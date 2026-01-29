import { BASE_ENVIRONMENT } from './base/environment.base';

export const environment = {
  ...BASE_ENVIRONMENT,
  name: 'local',

  api: {
    ...BASE_ENVIRONMENT.api,
    baseUrl: 'http://localhost:3000',
  },

  logging: {
    ...BASE_ENVIRONMENT.logging,
    level: 'debug',
  },

  features: {
    ...BASE_ENVIRONMENT.features,
    useInMemoryApi: true,
  },
};
