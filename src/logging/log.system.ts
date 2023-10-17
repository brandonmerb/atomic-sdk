import moment from 'moment';
import { LogFormatterType } from "./types/log-formatter.type";
import { LogLevelsEnum } from "./enums/log-levels.enum";
import { SingletonAlreadyInstantiated } from "@atomicdesign/atomic-singularity";
import { LogSystemOptionsInterface } from "./interfaces/log-system-options.interface";
import { LogSystemOptionsDefaults } from './defaults/log-system-options.defaults'
import { LoggingMiddleware } from '@atomicdesign/atomic-singularity'

export class LogSystem {
  private static _instance: LogSystem;
  public config: LogSystemOptionsInterface;

  public static get instance() {
    if (!LogSystem._instance) {
      LogSystem._instance = new LogSystem();
    }
    return LogSystem._instance;
  }

  /**
   * Construct a new Log System. This is a singleton so there should only ever
   * be one instance of this class.
   * @param options A partial LogSystemOptionsInterface. Any options not specified
   * either are not required or have defaults
   */
  constructor(options?: Partial<LogSystemOptionsInterface>) {
    if (LogSystem._instance != null) {
      throw new SingletonAlreadyInstantiated("A log system instance already exists");
    }

    if (options) {
      this.config = {
        ...options,
        ...LogSystemOptionsDefaults
      };
    } else {
      this.config = LogSystemOptionsDefaults;
    }

    this.initializeValues();
  }

  /**
   * Setup any values that need initializing, and register our system with middleware
   * @returns LogSystem so that this can be daisy chained
   */
  protected initializeValues(): this {
    // Always initialize to our default formatter
    this.defaultFormatter = this._defaultFormatter;

    // Initialize our default log levels
    this.addLogLevel("system", LogLevelsEnum.system);
    this.addLogLevel("debug", LogLevelsEnum.debug);
    this.addLogLevel("info", LogLevelsEnum.info);
    this.addLogLevel("warn", LogLevelsEnum.warn);
    this.addLogLevel("error", LogLevelsEnum.error);

    // Configure our log level
    this.setLogLevel(this.config.defaultLogLevel);

    return this;
  }

  /**
   * 
   */
  protected logLevels: {[levelName: string]: number} = {};

  /**
   * Used to control what level of logs are displayed
   */
  protected logLevel: number = LogLevelsEnum.info;

  /**
   * Set the logging level
   * @param level The logging level to set to
   */
  public setLogLevel(level: number): this {
    this.logLevel = level;
    return this;
  }

  /**
   * Add a log level mapping
   * @param levelName The level name
   * @param levelValue The level value (used to determine which messages are shown)
   */
  public addLogLevel(levelName: string, levelValue: number): this {
    this.logLevels[levelName] = levelValue;
    return this;
  }

  /**
   * The current default formatter to be used for logs
   */
  public defaultFormatter: LogFormatterType;

  /**
   * Used to set the default formatter, in the event you want to change how all logs
   * are being displayed
   * @param formatter The LogFormatterType function to set as default
   */
  public setDefaultFormatter(formatter: LogFormatterType): this {
    this.defaultFormatter = formatter;
    return this;
  }

  /**
   * 
   * @param message 
   * @param channel 
   * @returns 
   */
  private _defaultFormatter(channel: string, message: string): string {
    return `[${channel.toUpperCase()}] [${moment(new Date()).format("LTS")}] ${message}`;
  }

  /**
   * 
   * @param channel 
   * @param message 
   * @param formatter A function that takes the channel and message arguments, and returns a formatted string.
   * Note if you're passing in a function where the context of this matters, be sure to use an arrow function
   * to wrap your call. Ex: (ch: string, msg: string) => this.superCoolLogFormatter(ch, msg)
   */
  public log(channel: string, message: string, formatter?: LogFormatterType): this {
    // TODO: Might want to rework this later so messages can be capture for things
    //       like sending to a server, even when the messages aren't displayed to the user
    if (this.isChannelVisible(channel)) {
      let returnVal = "";
      if (!!formatter) {
        returnVal = formatter(channel, message);
      } else {
        returnVal = this.defaultFormatter(channel, message);
      }
      this.displayMessage(channel, returnVal);
    }
    return this;
  }

  /**
   * Handle actually displaying the message
   * @param channel 
   * @param message 
   * @returns 
   */
  public displayMessage(channel: string, message: string): this {
    switch (channel) {
      case "warn":
        console.warn(message);
        break;
      case "error":
        console.error(message);
        break;
      default:
        console.log(message);
        console.trace("Tracing stack");
        break;
    }
    return this;
  }

  public isChannelVisible(channel: string): boolean {
    const level = this.logLevels[channel] ?? LogLevelsEnum.error;
    return level >= this.logLevel;
  }

  public system(message: string): this {
    this.log("system", message);
    return this;
  }

  public debug(message: string): this {
    this.log("debug", message);
    return this;
  }

  public info(message: string): this {
    this.log("info", message);
    return this;
  }

  public warn(message: string): this {
    this.log("warn", message);
    return this;
  }

  public error(message: string): this {
    this.log("error", message);
    return this;
  }
}