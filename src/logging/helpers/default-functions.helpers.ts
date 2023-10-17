import { AtomicModuleInterface, AtomicSingularitySystem, LoggerInterface } from "@atomicdesign/atomic-singularity";
import { DetailedLogService, ModuleLogService } from "..";

export function defaultGetLoggerFetch(target?: AtomicModuleInterface | string): LoggerInterface {
  if (typeof target === "string" || target instanceof String) return new DetailedLogService(target as string);
  if (target instanceof AtomicSingularitySystem) return new ModuleLogService(target);
  return new DetailedLogService();
}