import { AtomicExtendedLoggerInterface } from "../interfaces/loggable.interface";
import { LogSystem } from "../log.system";
import { LogFormatterType } from "../types/log-formatter.type";

export abstract class AbstractLogService implements AtomicExtendedLoggerInterface {
  constructor(public customFormatter?: LogFormatterType) {
  }

  protected getSystem(): LogSystem {
    return LogSystem.instance;
  }

  /**
 * 
 * @param channel 
 * @param message 
 * @param formatter 
 */
  public log(channel: string, message: string, formatter?: LogFormatterType): this {
    this.getSystem().log(channel, message, formatter ?? this?.customFormatter);
    return this;
  }

  public isChannelVisible(channel: string): boolean {
    return this.getSystem().isChannelVisible(channel);
  }

  public system(message: string): this {
    this.log("system", message);
    return this;
  }

  public debug(message: string): this {
    this.getSystem().debug(message);
    return this;
  }

  public info(message: string): this {
    this.getSystem().info(message);
    return this;
  }

  public warn(message: string): this {
    this.getSystem().warn(message);
    return this;
  }

  public error(message: string): this {
    this.getSystem().error(message);
    return this;
  }
}