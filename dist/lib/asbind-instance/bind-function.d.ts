import { TypeDefFn } from "../types";
import AsbindInstance from "./asbind-instance";
export declare function bindImportFunction(asbindInstance: AsbindInstance, importedFunction: Function, importedFunctionDescriptor: TypeDefFn): (...args: any[]) => any;
export declare function bindExportFunction(asbindInstance: AsbindInstance, exportedFunction: Function, exportedFunctionDescriptor: TypeDefFn): (...args: any[]) => any;
