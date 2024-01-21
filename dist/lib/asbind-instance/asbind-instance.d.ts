import { TypeDef, WebAssemblyModuleStreaming, WebAssemblyModuleSync, WebAssemblyLoaderResult } from "../types";
import { ASUtil } from "@assemblyscript/loader";
export default class AsbindInstance {
    exports: Record<string, never> | ASUtil;
    importObject: WebAssembly.Imports;
    typeDescriptor: TypeDef;
    module: WebAssembly.Module;
    loadedModule: WebAssemblyLoaderResult;
    getTypeId(typeName: string): number;
    getTypeSize(typeName: string): number;
    _validate(): void;
    _instantiate(source: WebAssemblyModuleStreaming, importObject: WebAssembly.Imports): Promise<void>;
    _instantiateSync(source: WebAssemblyModuleSync, importObject: WebAssembly.Imports): void;
    _instantiateBindImportFunctions(importObject: WebAssembly.Imports): void;
    _instantiateBindUnboundExports(): void;
}
