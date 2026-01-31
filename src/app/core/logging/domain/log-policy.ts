import { LogLevel } from './log-level.enum';

const LEVEL_PRIORITY: Record<LogLevel, number> = {
  [LogLevel.DEBUG]: 0,
  [LogLevel.INFO]: 1,
  [LogLevel.WARN]: 2,
  [LogLevel.ERROR]: 3,
};

export class LogPolicy {
  static shouldLog(
    currentLevel: LogLevel,
    messageLevel: LogLevel,
  ): boolean {
    return LEVEL_PRIORITY[messageLevel] >= LEVEL_PRIORITY[currentLevel];
  }
}
