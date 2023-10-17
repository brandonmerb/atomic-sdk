import { GetLoggerFunction } from "@atomicdesign/atomic-singularity";

export interface LogSystemOptionsInterface {
  /**
   * Used to control the default level for showing logs.
   * @default 20
   */
  defaultLogLevel: number;

  /**
   * Set a default fetch function for instantiating a new logger. This
   * will be used any time something instantiates a new logger through
   * the Atomic Singularity Logging Middleware
   * @default See DefaultFunctionsHelpers.ts:defaultGetLoggerFetch
   */
  defaultGetLoggerFetch: GetLoggerFunction
}