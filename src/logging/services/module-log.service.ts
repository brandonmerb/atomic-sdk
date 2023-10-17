import { AtomicModuleInterface } from "@atomicdesign/atomic-singularity";
import { DetailedLogService } from "./detailed-log.service";

export class ModuleLogService extends DetailedLogService {
  constructor(public module: AtomicModuleInterface) {
    super(module.name);
  }
}