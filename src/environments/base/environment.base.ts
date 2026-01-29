import { IAppEnvironment } from './environment.interface';

export const BASE_ENVIRONMENT: IAppEnvironment = {
  name: 'development',
  production: false,
  port: 4500,
  api: {
    baseUrl: '',
    timeoutMs: 10000,
  },

  logging: {
    level: 'info',
    enableConsole: true,
  },

  features: {
    enableSSR: true,
    enableAnalytics: false,
    useInMemoryApi: false,
  },

  cache: {
    enabled: false,
    ttlSeconds: 0,
  },
};
