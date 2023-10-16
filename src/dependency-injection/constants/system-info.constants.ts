import { LoggingMiddleware, LoggerInterface } from "@atomicdesign/atomic-singularity"

export const SYSTEM_NAME: string = "Atomic Engine: DI System";
export const SYSTEM_LOGGER: LoggerInterface = LoggingMiddleware.instance.getLogger();
export const SYSTEM_METADATA_NAME: string = "ATOMIC_ENGINE_DI_INFO";