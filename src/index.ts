import { createNebula } from "@atomicdesign/atomic-singularity";
import { useAtomicLogging } from './logging/helpers/use-atomic-logging.helper';

export const useAtomicSDK = createNebula({
  name: "Atomic SDK"
})
  .addPreactivation(useAtomicLogging())
  .build()