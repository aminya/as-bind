import { Module } from "assemblyscript/dist/assemblyscript.js";
import { Transform } from "assemblyscript/dist/transform.js";
export default class AsBindTransform extends Transform {
    afterCompile(module: Module): void;
}
