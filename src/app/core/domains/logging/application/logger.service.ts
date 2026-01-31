import { ILogger, LogLevel } from '../domain';

export class LoggerService {
  constructor(private readonly logger: ILogger) {}

  setLogLevel(level: LogLevel): void {
    this.logger.setLogLevel(level);
  }

  getLogLevel(): LogLevel {
    return this.logger.getLogLevel();
  }

  debug(message: string, ...meta: unknown[]): void {
    this.logger.debug(message, ...meta);
  }

  info(message: string, ...meta: unknown[]): void {
    this.logger.info(message, ...meta);
  }

  warn(message: string, ...meta: unknown[]): void {
    this.logger.warn(message, ...meta);
  }

  error(message: string, ...meta: unknown[]): void {
    this.logger.error(message, ...meta);
  }
}
