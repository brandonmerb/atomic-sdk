import { AbstractLogService } from "./abstract-log.service";
import moment from 'moment';

export class DetailedLogService extends AbstractLogService {
  constructor(
    public additionalChannel?: string
  ) {
    super();
    this.customFormatter = this.detailedFormat;
  }

  public log(channel: string, message: string): this {
    super.log(channel, message, (ch: string, msg: string) => this.detailedFormat(ch, msg));
    return this;
  }

  /**
   * Print a more detailed version of the log. This will be used to relay all log messages via super
   * as the default formatter for this logger
   * @param channel The channel the message is being delivered on
   * @param message The message to be delivered
   * @returns The formatted string equivalent of the message
   */
  public detailedFormat(channel: string, message: string): string {
    if (this?.additionalChannel != null) {
      return `[${moment(new Date()).format("LTS")}] [${channel.toUpperCase()}] [${this.additionalChannel}] ${message}`;
    } else {
      return `[${moment(new Date()).format("LTS")}] [${channel.toUpperCase()}] ${message}`;
    }
  }
}