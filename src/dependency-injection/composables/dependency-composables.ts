import "reflect-metadata";
import { Constructable } from "@atomicdesign/atomic-singularity";

export function identifyDependencies<T>(obj: Constructable<T>) {
  console.log(Reflect.getMetadataKeys(obj));
}