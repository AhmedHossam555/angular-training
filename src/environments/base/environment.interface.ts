import { LogLevel, EnvironmentName } from './environment.types';

export interface IAppEnvironment {
  name: EnvironmentName;
  production: boolean;
  port: number;

  api: {
    baseUrl: string;
    timeoutMs: number;
  };

  logging: {
    level: LogLevel;
    enableConsole: boolean;
  };

  features: {
    enableSSR: boolean;
    enableAnalytics: boolean;
    useInMemoryApi: boolean;
  };

  cache: {
    enabled: boolean;
    ttlSeconds: number;
  };
}
