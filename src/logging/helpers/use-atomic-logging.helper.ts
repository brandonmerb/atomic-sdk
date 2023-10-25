import { LoggingMiddleware, AtomicSingularitySystem, MiddlewareUseFunction, ExecutorFunction } from "@atomicdesign/atomic-singularity"
import { LogSystemOptionsInterface } from "../interfaces/log-system-options.interface"
import { LogSystem } from "../log.system";

export function useAtomicLogging(config?: LogSystemOptionsInterface): ExecutorFunction {
  return (app?: AtomicSingularitySystem) => {
    createAtomicLogging();
    return true;
  }
}

/**
 * Helper function to create the Atomic Logging instance and hook up middleware to use it
 * @param config 
 */
export function createAtomicLogging(config?: LogSystemOptionsInterface) {
  const logSystem = new LogSystem(config);
  
  LoggingMiddleware.instance.updateFetchFunction(logSystem.config.defaultGetLoggerFetch);
}