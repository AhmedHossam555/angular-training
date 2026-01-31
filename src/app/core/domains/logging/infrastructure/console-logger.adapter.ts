import { ILogger, LogLevel, LogPolicy } from '../domain';
import { LOGGER_CONFIG } from './logger.config';

export class ConsoleLoggerAdapter implements ILogger {
  private logLevel: LogLevel = LOGGER_CONFIG.defaultLevel;

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  getLogLevel(): LogLevel {
    return this.logLevel;
  }

  debug(message: string, ...meta: unknown[]): void {
    this.log(LogLevel.DEBUG, console.debug, message, meta);
  }

  info(message: string, ...meta: unknown[]): void {
    this.log(LogLevel.INFO, console.info, message, meta);
  }

  warn(message: string, ...meta: unknown[]): void {
    this.log(LogLevel.WARN, console.warn, message, meta);
  }

  error(message: string, ...meta: unknown[]): void {
    this.log(LogLevel.ERROR, console.error, message, meta);
  }

  private log(
    level: LogLevel,
    writer: (...data: unknown[]) => void,
    message: string,
    meta: unknown[],
  ): void {
    if (!LogPolicy.shouldLog(this.logLevel, level)) {
      return;
    }

    const prefix = this.generatePrefix(level);

    meta.length
      ? writer(prefix, message, ...meta)
      : writer(prefix, message);
  }

  private generatePrefix(level: LogLevel): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}]`;
  }
}
