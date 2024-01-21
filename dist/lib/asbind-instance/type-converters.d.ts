import AsbindInstance from "./asbind-instance";
export interface Converter {
    ascToJs(asbindInstance: AsbindInstance, value: any, typeName: string): any;
    jsToAsc(asbindInstance: AsbindInstance, value: any, typeName: string): any;
}
export declare const converters: Map<string | RegExp, Converter>;
export declare function getConverterForType(typeName: string): Converter;
export declare function getAscToJsConverterForType(typeName: string): (asbindInstance: AsbindInstance, value: any, typeName: string) => any;
export declare function getJsToAscConverterForType(typeName: string): (asbindInstance: AsbindInstance, value: any, typeName: string) => any;
