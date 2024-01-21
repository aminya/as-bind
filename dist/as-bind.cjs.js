"use strict";const t=-8,e=-4,r=1,n=2,s=1,o=2,i=4,a=6,c=2048,u=4096,y=16384,f=0,l=4,p=8,b=12,h=12,d=16,m="Operation requires compiling with --exportTable",g=()=>{throw Error("Operation requires compiling with --exportRuntime")},w="undefined"!=typeof BigUint64Array,A=Symbol(),_=192,T=1024,j=new TextDecoder("utf-16le",{fatal:!0});function O(t,r){let n=new Uint32Array(t)[r+e>>>2]>>>1;const s=new Uint16Array(t,r,n);if(n<=_)return String.fromCharCode(...s);try{return j.decode(s)}catch{let t="",e=0;for(;n-e>T;)t+=String.fromCharCode(...s.subarray(e,e+=T));return t+String.fromCharCode(...s.subarray(e))}}function x(t){const e={};function r(t,e){return t?O(t.buffer,e):"<yet unknown>"}const n=t.env=t.env||{};return n.abort=n.abort||function(t,s,o,i){const a=e.memory||n.memory;throw Error(`abort: ${r(a,t)} at ${r(a,s)}:${o}:${i}`)},n.trace=n.trace||function(t,s,...o){const i=e.memory||n.memory;console.log(`trace: ${r(i,t)}${s?" ":""}${o.slice(0,s).join(", ")}`)},n.seed=n.seed||Date.now,t.Math=t.Math||Math,t.Date=t.Date||Date,e}function U(A,_){const T=_.exports,j=T.memory,x=T.table,U=T.__new||g,S=T.__pin||g,E=T.__unpin||g,I=T.__collect||g,$=T.__rtti_base,B=$?t=>t[$>>>2]:g;function M(t){const e=function(t){const e=new Uint32Array(j.buffer);if((t>>>=0)>=B(e))throw Error(`invalid id: ${t}`);return e[($+4>>>2)+t]}(t);if(!(e&(s|o|i)))throw Error(`not an array: ${t}, flags=${e}`);return e}function W(t){return 31-Math.clz32(t>>>a&31)}function v(t,e,r){const n=j.buffer;if(r)switch(t){case 2:return new Float32Array(n);case 3:return new Float64Array(n)}else switch(t){case 0:return new(e?Int8Array:Uint8Array)(n);case 1:return new(e?Int16Array:Uint16Array)(n);case 2:return new(e?Int32Array:Uint32Array)(n);case 3:return new(e?BigInt64Array:BigUint64Array)(n)}throw Error(`unsupported align: ${t}`)}function D(r){const n=new Uint32Array(j.buffer),s=M(n[r+t>>>2]),a=W(s);let y=s&i?r:n[r+l>>>2];const f=s&o?n[r+h>>>2]:n[y+e>>>2]>>>a;return v(a,s&c,s&u).subarray(y>>>=a,y+f)}function F(t,e,r){return new t(N(t,e,r))}function N(t,e,r){const n=j.buffer,s=new Uint32Array(n);return new t(n,s[r+l>>>2],s[r+p>>>2]>>>e)}function C(t,e,r){A[`__get${e}`]=F.bind(null,t,r),A[`__get${e}View`]=N.bind(null,t,r)}return A.__new=U,A.__pin=S,A.__unpin=E,A.__collect=I,A.__newString=function(t){if(null==t)return 0;const e=t.length,r=U(e<<1,n),s=new Uint16Array(j.buffer);for(let n=0,o=r>>>1;n<e;++n)s[o+n]=t.charCodeAt(n);return r},A.__newArrayBuffer=function(t){if(null==t)return 0;const e=new Uint8Array(t),n=U(e.length,r);return new Uint8Array(j.buffer).set(e,n),n},A.__getString=function(e){if(!e)return null;const r=j.buffer;if(new Uint32Array(r)[e+t>>>2]!==n)throw Error(`not a string: ${e}`);return O(r,e)},A.__newArray=function(t,e=0){const n=e,s=M(t),a=W(s),m="number"!=typeof n,g=m?n.length:n,w=U(g<<a,s&i?t:r);let A;if(s&i)A=w;else{S(w);const e=U(s&o?d:b,t);E(w);const r=new Uint32Array(j.buffer);r[e+f>>>2]=w,r[e+l>>>2]=w,r[e+p>>>2]=g<<a,s&o&&(r[e+h>>>2]=g),A=e}if(m){const t=v(a,s&c,s&u),e=w>>>a;if(s&y)for(let r=0;r<g;++r)t[e+r]=n[r];else t.set(n,e)}return A},A.__getArrayView=D,A.__getArray=function(t){const e=D(t),r=e.length,n=new Array(r);for(let t=0;t<r;t++)n[t]=e[t];return n},A.__getArrayBuffer=function(t){const r=j.buffer,n=new Uint32Array(r)[t+e>>>2];return r.slice(t,t+n)},A.__getFunction=function(t){if(!x)throw Error(m);const e=new Uint32Array(j.buffer)[t>>>2];return x.get(e)},[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((t=>{C(t,t.name,31-Math.clz32(t.BYTES_PER_ELEMENT))})),w&&[BigUint64Array,BigInt64Array].forEach((t=>{C(t,t.name.slice(3),3)})),A.memory=A.memory||j,A.table=A.table||x,J(T,A)}function S(t){return"undefined"!=typeof Response&&t instanceof Response}function E(t){return t instanceof WebAssembly.Module}async function I(t,e={}){if(S(t=await t))return $(t,e);const r=E(t)?t:await WebAssembly.compile(t),n=x(e),s=await WebAssembly.instantiate(r,e);return{module:r,instance:s,exports:U(n,s)}}async function $(t,e={}){if(!WebAssembly.instantiateStreaming)return I(S(t=await t)?t.arrayBuffer():t,e);const r=x(e),n=await WebAssembly.instantiateStreaming(t,e),s=U(r,n.instance);return{...n,exports:s}}function J(t,e={}){const r=t.__argumentsLength?e=>{t.__argumentsLength.value=e}:t.__setArgumentsLength||t.__setargc||(()=>{});for(let n of Object.keys(t)){const s=t[n];let o=n.split("."),i=e;for(;o.length>1;){let t=o.shift();Object.hasOwn(i,t)||(i[t]={}),i=i[t]}let a=o[0],c=a.indexOf("#");if(c>=0){const e=a.substring(0,c),o=i[e];if(void 0===o||!o.prototype){const t=function(...e){return t.wrap(t.prototype.constructor(0,...e))};t.prototype={valueOf(){return this[A]}},t.wrap=function(e){return Object.create(t.prototype,{[A]:{value:e,writable:!1}})},o&&Object.getOwnPropertyNames(o).forEach((e=>Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e)))),i[e]=t}if(a=a.substring(c+1),i=i[e].prototype,/^(get|set):/.test(a)){if(!Object.hasOwn(i,a=a.substring(4))){let e=t[n.replace("set:","get:")],r=t[n.replace("get:","set:")];Object.defineProperty(i,a,{get(){return e(this[A])},set(t){r(this[A],t)},enumerable:!0})}}else"constructor"===a?(i[a]=function(...t){return r(t.length),s(...t)}).original=s:(i[a]=function(...t){return r(t.length),s(this[A],...t)}).original=s}else/^(get|set):/.test(a)?Object.hasOwn(i,a=a.substring(4))||Object.defineProperty(i,a,{get:t[n.replace("set:","get:")],set:t[n.replace("get:","set:")],enumerable:!0}):"function"==typeof s&&s!==r?(i[a]=(...t)=>(r(t.length),s(...t))).original=s:i[a]=s}return e}Object.hasOwn=Object.hasOwn||function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var B={instantiate:I,instantiateSync:function(t,e={}){const r=E(t)?t:new WebAssembly.Module(t),n=x(e),s=new WebAssembly.Instance(r,e);return{module:r,instance:s,exports:U(n,s)}},instantiateStreaming:$,demangle:J};const M="~lib/typedarray/";function W(t,e,r){return e}function v(t,e,r){return t.exports[`__get${function(t){return t.startsWith(M)?((t=t.slice(M.length)).startsWith("Big")&&(t=t.slice(3)),t):t}(r)}View`](e)}function D(t,e,r){return t.exports.__newArray(t.getTypeId(r),e)}const F="~lib/array/Array";function N(t){if(!t.startsWith(F))throw Error(`${JSON.stringify(t)} is not an array type`);return t.slice(`${F}<`.length,-1)}const C=new Map([["void",{ascToJs:W,jsToAsc:W}],[/^(i|u|f)(8|16|32|64)|[ui]size|bool|externref$/,{ascToJs:W,jsToAsc:W}],["~lib/string/String",{ascToJs:function(t,e,r){return t.exports.__getString(e)},jsToAsc:function(t,e,r){return t.exports.__newString(e)}}],["~lib/typedarray/Int8Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Int16Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Int32Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Uint8Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Uint16Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Uint32Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Int64Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Uint64Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Uint8ClampedArray",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Float32Array",{ascToJs:v,jsToAsc:D}],["~lib/typedarray/Float64Array",{ascToJs:v,jsToAsc:D}],["~lib/arraybuffer/ArrayBuffer",{ascToJs:function(t,e,r){return t.exports.__getArrayBuffer(e)},jsToAsc:function(t,e,r){const n=t.exports.__new(e.byteLength,t.getTypeId(r));return new Uint8Array(t.exports.memory.buffer,n,e.byteLength).set(new Uint8Array(e)),n}}],[/^~lib\/array\/Array<.+>$/,{ascToJs:function(t,e,r){const n=N(r),s=R(n);return t.exports.__getArray(e).map((e=>s.ascToJs(t,e,n)))},jsToAsc:function(t,e,r){const n=N(r),s=R(n),o=e.map((e=>s.jsToAsc(t,e,n)));return t.exports.__newArray(t.getTypeId(r),o)}}]]),P=new Set;function R(t){for(const[e,r]of C)if("string"!=typeof e){if(e.test(t))return r}else if(e===t)return r;return P.has(t)||(console.warn(`No converter for ${JSON.stringify(t)}, using pass-through`),P.add(t)),{ascToJs:W,jsToAsc:W}}function L(t){return R(t).ascToJs}function z(t){return R(t).jsToAsc}function k(t,e,r){const n=r.parameters.map(L),s=z(r.returnType);return function(...o){if(o.length!=n.length)throw Error(`Expected ${n.length} arguments, got ${o.length}`);const i=o.map(((e,s)=>n[s](t,e,r.parameters[s]))),a=e(...i);return s(t,a,r.returnType)}}function V(t,e,r){const n=r.parameters.map(z),s=L(r.returnType);return(...o)=>{if(o.length!=n.length)throw Error(`Expected ${n.length} arguments, got ${o.length}`);const i=[],a=o.map(((e,s)=>{const o=n[s](t,e,r.parameters[s]);return o!==e&&(t.exports.__pin(o),i.push(o)),o})),c=e(...a);return i.forEach((e=>t.exports.__unpin(e))),s(t,c,r.returnType)}}const q="as-bind_bindings";function Y(t,{depth:e=Number.POSITIVE_INFINITY}={}){return e<=0||!t||"object"!=typeof t?t:Object.fromEntries(Object.entries(t).map((([t,r])=>[t,Y(r,{depth:e-1})])))}function G(t){const e=WebAssembly.Module.customSections(t,q),r=new TextDecoder("utf8").decode(new Uint8Array(e[0]));try{return JSON.parse(r)}catch(t){throw Error(`Couldn’t decode type descriptor: ${t.message}`)}}class H{exports={};importObject={};typeDescriptor;module;loadedModule;getTypeId(t){if(t in this.typeDescriptor.typeIds)return this.typeDescriptor.typeIds[t].id;throw Error(`Unknown type ${JSON.stringify(t)}`)}getTypeSize(t){if(t in this.typeDescriptor.typeIds)return this.typeDescriptor.typeIds[t].byteSize;throw Error(`Unknown type ${JSON.stringify(t)}`)}_validate(){if(!WebAssembly.Module.exports(this.module).find((t=>"__new"===t.name)))throw Error("The AssemblyScript wasm module was not built with --exportRuntime, which is required.");if(1!==WebAssembly.Module.customSections(this.module,q).length)throw new Error("The AssemblyScript wasm module was not built with the as-bind transform.")}async _instantiate(t,e){this.module=await async function(t){if(t=await Promise.resolve(t),"undefined"!=typeof Response&&t instanceof Response){if(WebAssembly.compileStreaming)return WebAssembly.compileStreaming(t);t=await t.arrayBuffer()}return WebAssembly.compile(t)}(t),this._validate(),this.typeDescriptor=G(this.module),this._instantiateBindImportFunctions(e),this.loadedModule=await async function(t,e){return B.instantiate(t,e)}(this.module,this.importObject),this._instantiateBindUnboundExports()}_instantiateSync(t,e){this.module=new WebAssembly.Module(t),this._validate(),this.typeDescriptor=G(this.module),this._instantiateBindImportFunctions(e),this.loadedModule=function(t,e){return B.instantiateSync(t,e)}(this.module,this.importObject),this._instantiateBindUnboundExports()}_instantiateBindImportFunctions(t){this.importObject=Y(t,{depth:2});for(const[e,r]of Object.entries(this.typeDescriptor.importedFunctions))for(const[n,s]of Object.entries(r))this.importObject[e][`__asbind_unbound_${n}`]=t[e][n],this.importObject[e][n]=k(this,t[e][n],s)}_instantiateBindUnboundExports(){const t=this.loadedModule.exports;this.exports=Y(t,{depth:1});for(const[e,r]of Object.entries(this.typeDescriptor.exportedFunctions))this.exports[e]=V(this,t[e],r)}}exports.converters=C,exports.instantiate=async function(t,e){let r=new H;return await r._instantiate(t,e),r},exports.instantiateSync=function(t,e){let r=new H;return r._instantiateSync(t,e),r},exports.version="0.8.2";
//# sourceMappingURL=as-bind.cjs.js.map
