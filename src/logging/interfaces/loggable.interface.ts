import { LoggerInterface } from "@atomicdesign/atomic-singularity";

export interface AtomicExtendedLoggerInterface extends LoggerInterface {
  isChannelVisible(channel: string): boolean;
}