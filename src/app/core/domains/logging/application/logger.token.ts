import { InjectionToken } from '@angular/core';
import { ILogger } from '../domain';

export const LOGGER_TOKEN = new InjectionToken<ILogger>('LOGGER_TOKEN');
