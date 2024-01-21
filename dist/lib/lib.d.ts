import AsbindInstance from "./asbind-instance/asbind-instance";
export { converters } from "./asbind-instance/type-converters";
import { WebAssemblyModuleStreaming, WebAssemblyModuleSync } from "./types";
export declare const version: string;
export declare function instantiate(source: WebAssemblyModuleStreaming, importObject: WebAssembly.Imports): Promise<AsbindInstance>;
export declare function instantiateSync(source: WebAssemblyModuleSync, importObject: WebAssembly.Imports): AsbindInstance;
