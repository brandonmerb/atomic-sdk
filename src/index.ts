import { createModule } from "@atomicdesign/atomic-singularity";

// import {  } from "./authentication";
// import {  } from './dependency-injection';
import { useAtomicLogging } from './logging';
// import {  } from './lookups/'


/**
 * A default module that will install all libaries from the Atomic SDK.
 * We recommend that the Atomic SDK be one of the first modules you install
 * in order to provide the logger as middleware ahead of any Atomic Singularity
 * Nebula installations
 */
export const useAtomicSDK = createModule({
  name: "Atomic SDK"
}, () => {
  // Our preactivation function
  useAtomicLogging();
});