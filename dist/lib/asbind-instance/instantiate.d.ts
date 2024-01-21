import { WebAssemblyLoaderResult } from "../types";
export declare function asbindInstantiate(module: WebAssembly.Module, importObject: WebAssembly.Imports): Promise<WebAssemblyLoaderResult>;
export declare function asbindInstantiateSync(module: WebAssembly.Module, importObject: WebAssembly.Imports): WebAssemblyLoaderResult;
