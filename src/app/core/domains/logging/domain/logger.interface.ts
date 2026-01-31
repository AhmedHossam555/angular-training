import { LogLevel } from './log-level.enum';

export interface ILogger {
  setLogLevel(level: LogLevel): void;
  getLogLevel(): LogLevel;

  debug(message: string, ...meta: unknown[]): void;
  info(message: string, ...meta: unknown[]): void;
  warn(message: string, ...meta: unknown[]): void;
  error(message: string, ...meta: unknown[]): void;
}
