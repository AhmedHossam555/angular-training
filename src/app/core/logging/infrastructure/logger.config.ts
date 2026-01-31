import { environment } from '../../../../environments/environment';
import { LogLevel } from '../domain';

export const LOGGER_CONFIG = {
  defaultLevel:
    (environment.logging?.level as LogLevel) ?? LogLevel.INFO,
} as const;
