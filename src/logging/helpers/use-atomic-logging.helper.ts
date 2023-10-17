import { LoggingMiddleware, AtomicSingularitySystem, MiddlewareUseFunction } from "@atomicdesign/atomic-singularity"
import { LogSystemOptionsInterface } from "../interfaces/log-system-options.interface"
import { LogSystem } from "../log.system";

export function useAtomicLogging(config?: LogSystemOptionsInterface): MiddlewareUseFunction {
  return (app?: AtomicSingularitySystem) => {
    new LogSystem(config);
  
    LoggingMiddleware.instance.updateFetchFunction(LogSystem.instance.config.defaultGetLoggerFetch);

    return true;
  }
}