import { AtomicModuleInterface } from "@atomicdesign/atomic-singularity";
import { LogLevelsEnum } from "..";
import { LogSystemOptionsInterface } from "../interfaces/log-system-options.interface";
import { defaultGetLoggerFetch } from "../helpers/default-functions.helpers";

export const LogSystemOptionsDefaults: LogSystemOptionsInterface = {
  defaultLogLevel: LogLevelsEnum.info,
  defaultGetLoggerFetch,
}