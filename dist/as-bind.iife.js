var AsBindIIFE=function(t){"use strict";const e=-8,r=-4,n=1,s=2,o=1,i=2,a=4,c=6,u=2048,y=4096,f=16384,l=0,p=4,b=8,h=12,d=12,m=16,g="Operation requires compiling with --exportTable",w=()=>{throw Error("Operation requires compiling with --exportRuntime")},A="undefined"!=typeof BigUint64Array,_=Symbol(),T=192,j=1024,O=new TextDecoder("utf-16le",{fatal:!0});function U(t,e){let n=new Uint32Array(t)[e+r>>>2]>>>1;const s=new Uint16Array(t,e,n);if(n<=T)return String.fromCharCode(...s);try{return O.decode(s)}catch{let t="",e=0;for(;n-e>j;)t+=String.fromCharCode(...s.subarray(e,e+=j));return t+String.fromCharCode(...s.subarray(e))}}function x(t){const e={};function r(t,e){return t?U(t.buffer,e):"<yet unknown>"}const n=t.env=t.env||{};return n.abort=n.abort||function(t,s,o,i){const a=e.memory||n.memory;throw Error(`abort: ${r(a,t)} at ${r(a,s)}:${o}:${i}`)},n.trace=n.trace||function(t,s,...o){const i=e.memory||n.memory;console.log(`trace: ${r(i,t)}${s?" ":""}${o.slice(0,s).join(", ")}`)},n.seed=n.seed||Date.now,t.Math=t.Math||Math,t.Date=t.Date||Date,e}function S(t,_){const T=_.exports,j=T.memory,O=T.table,x=T.__new||w,S=T.__pin||w,E=T.__unpin||w,I=T.__collect||w,$=T.__rtti_base,J=$?t=>t[$>>>2]:w;function v(t){const e=function(t){const e=new Uint32Array(j.buffer);if((t>>>=0)>=J(e))throw Error(`invalid id: ${t}`);return e[($+4>>>2)+t]}(t);if(!(e&(o|i|a)))throw Error(`not an array: ${t}, flags=${e}`);return e}function M(t){return 31-Math.clz32(t>>>c&31)}function W(t,e,r){const n=j.buffer;if(r)switch(t){case 2:return new Float32Array(n);case 3:return new Float64Array(n)}else switch(t){case 0:return new(e?Int8Array:Uint8Array)(n);case 1:return new(e?Int16Array:Uint16Array)(n);case 2:return new(e?Int32Array:Uint32Array)(n);case 3:return new(e?BigInt64Array:BigUint64Array)(n)}throw Error(`unsupported align: ${t}`)}function D(t){const n=new Uint32Array(j.buffer),s=v(n[t+e>>>2]),o=M(s);let c=s&a?t:n[t+p>>>2];const f=s&i?n[t+d>>>2]:n[c+r>>>2]>>>o;return W(o,s&u,s&y).subarray(c>>>=o,c+f)}function F(t,e,r){return new t(N(t,e,r))}function N(t,e,r){const n=j.buffer,s=new Uint32Array(n);return new t(n,s[r+p>>>2],s[r+b>>>2]>>>e)}function C(e,r,n){t[`__get${r}`]=F.bind(null,e,n),t[`__get${r}View`]=N.bind(null,e,n)}return t.__new=x,t.__pin=S,t.__unpin=E,t.__collect=I,t.__newString=function(t){if(null==t)return 0;const e=t.length,r=x(e<<1,s),n=new Uint16Array(j.buffer);for(let s=0,o=r>>>1;s<e;++s)n[o+s]=t.charCodeAt(s);return r},t.__newArrayBuffer=function(t){if(null==t)return 0;const e=new Uint8Array(t),r=x(e.length,n);return new Uint8Array(j.buffer).set(e,r),r},t.__getString=function(t){if(!t)return null;const r=j.buffer;if(new Uint32Array(r)[t+e>>>2]!==s)throw Error(`not a string: ${t}`);return U(r,t)},t.__newArray=function(t,e=0){const r=e,s=v(t),o=M(s),c="number"!=typeof r,g=c?r.length:r,w=x(g<<o,s&a?t:n);let A;if(s&a)A=w;else{S(w);const e=x(s&i?m:h,t);E(w);const r=new Uint32Array(j.buffer);r[e+l>>>2]=w,r[e+p>>>2]=w,r[e+b>>>2]=g<<o,s&i&&(r[e+d>>>2]=g),A=e}if(c){const t=W(o,s&u,s&y),e=w>>>o;if(s&f)for(let n=0;n<g;++n)t[e+n]=r[n];else t.set(r,e)}return A},t.__getArrayView=D,t.__getArray=function(t){const e=D(t),r=e.length,n=new Array(r);for(let t=0;t<r;t++)n[t]=e[t];return n},t.__getArrayBuffer=function(t){const e=j.buffer,n=new Uint32Array(e)[t+r>>>2];return e.slice(t,t+n)},t.__getFunction=function(t){if(!O)throw Error(g);const e=new Uint32Array(j.buffer)[t>>>2];return O.get(e)},[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((t=>{C(t,t.name,31-Math.clz32(t.BYTES_PER_ELEMENT))})),A&&[BigUint64Array,BigInt64Array].forEach((t=>{C(t,t.name.slice(3),3)})),t.memory=t.memory||j,t.table=t.table||O,B(T,t)}function E(t){return"undefined"!=typeof Response&&t instanceof Response}function I(t){return t instanceof WebAssembly.Module}async function $(t,e={}){if(E(t=await t))return J(t,e);const r=I(t)?t:await WebAssembly.compile(t),n=x(e),s=await WebAssembly.instantiate(r,e);return{module:r,instance:s,exports:S(n,s)}}async function J(t,e={}){if(!WebAssembly.instantiateStreaming)return $(E(t=await t)?t.arrayBuffer():t,e);const r=x(e),n=await WebAssembly.instantiateStreaming(t,e),s=S(r,n.instance);return{...n,exports:s}}function B(t,e={}){const r=t.__argumentsLength?e=>{t.__argumentsLength.value=e}:t.__setArgumentsLength||t.__setargc||(()=>{});for(let n of Object.keys(t)){const s=t[n];let o=n.split("."),i=e;for(;o.length>1;){let t=o.shift();Object.hasOwn(i,t)||(i[t]={}),i=i[t]}let a=o[0],c=a.indexOf("#");if(c>=0){const e=a.substring(0,c),o=i[e];if(void 0===o||!o.prototype){const t=function(...e){return t.wrap(t.prototype.constructor(0,...e))};t.prototype={valueOf(){return this[_]}},t.wrap=function(e){return Object.create(t.prototype,{[_]:{value:e,writable:!1}})},o&&Object.getOwnPropertyNames(o).forEach((e=>Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e)))),i[e]=t}if(a=a.substring(c+1),i=i[e].prototype,/^(get|set):/.test(a)){if(!Object.hasOwn(i,a=a.substring(4))){let e=t[n.replace("set:","get:")],r=t[n.replace("get:","set:")];Object.defineProperty(i,a,{get(){return e(this[_])},set(t){r(this[_],t)},enumerable:!0})}}else"constructor"===a?(i[a]=function(...t){return r(t.length),s(...t)}).original=s:(i[a]=function(...t){return r(t.length),s(this[_],...t)}).original=s}else/^(get|set):/.test(a)?Object.hasOwn(i,a=a.substring(4))||Object.defineProperty(i,a,{get:t[n.replace("set:","get:")],set:t[n.replace("get:","set:")],enumerable:!0}):"function"==typeof s&&s!==r?(i[a]=(...t)=>(r(t.length),s(...t))).original=s:i[a]=s}return e}Object.hasOwn=Object.hasOwn||function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var v={instantiate:$,instantiateSync:function(t,e={}){const r=I(t)?t:new WebAssembly.Module(t),n=x(e),s=new WebAssembly.Instance(r,e);return{module:r,instance:s,exports:S(n,s)}},instantiateStreaming:J,demangle:B};const M="~lib/typedarray/";function W(t,e,r){return e}function D(t,e,r){return t.exports[`__get${function(t){return t.startsWith(M)?((t=t.slice(M.length)).startsWith("Big")&&(t=t.slice(3)),t):t}(r)}View`](e)}function F(t,e,r){return t.exports.__newArray(t.getTypeId(r),e)}const N="~lib/array/Array";function C(t){if(!t.startsWith(N))throw Error(`${JSON.stringify(t)} is not an array type`);return t.slice(`${N}<`.length,-1)}const P=new Map([["void",{ascToJs:W,jsToAsc:W}],[/^(i|u|f)(8|16|32|64)|[ui]size|bool|externref$/,{ascToJs:W,jsToAsc:W}],["~lib/string/String",{ascToJs:function(t,e,r){return t.exports.__getString(e)},jsToAsc:function(t,e,r){return t.exports.__newString(e)}}],["~lib/typedarray/Int8Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Int16Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Int32Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Uint8Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Uint16Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Uint32Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Int64Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Uint64Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Uint8ClampedArray",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Float32Array",{ascToJs:D,jsToAsc:F}],["~lib/typedarray/Float64Array",{ascToJs:D,jsToAsc:F}],["~lib/arraybuffer/ArrayBuffer",{ascToJs:function(t,e,r){return t.exports.__getArrayBuffer(e)},jsToAsc:function(t,e,r){const n=t.exports.__new(e.byteLength,t.getTypeId(r));return new Uint8Array(t.exports.memory.buffer,n,e.byteLength).set(new Uint8Array(e)),n}}],[/^~lib\/array\/Array<.+>$/,{ascToJs:function(t,e,r){const n=C(r),s=L(n);return t.exports.__getArray(e).map((e=>s.ascToJs(t,e,n)))},jsToAsc:function(t,e,r){const n=C(r),s=L(n),o=e.map((e=>s.jsToAsc(t,e,n)));return t.exports.__newArray(t.getTypeId(r),o)}}]]),R=new Set;function L(t){for(const[e,r]of P)if("string"!=typeof e){if(e.test(t))return r}else if(e===t)return r;return R.has(t)||(console.warn(`No converter for ${JSON.stringify(t)}, using pass-through`),R.add(t)),{ascToJs:W,jsToAsc:W}}function z(t){return L(t).ascToJs}function k(t){return L(t).jsToAsc}function V(t,e,r){const n=r.parameters.map(z),s=k(r.returnType);return function(...o){if(o.length!=n.length)throw Error(`Expected ${n.length} arguments, got ${o.length}`);const i=o.map(((e,s)=>n[s](t,e,r.parameters[s]))),a=e(...i);return s(t,a,r.returnType)}}function q(t,e,r){const n=r.parameters.map(k),s=z(r.returnType);return(...o)=>{if(o.length!=n.length)throw Error(`Expected ${n.length} arguments, got ${o.length}`);const i=[],a=o.map(((e,s)=>{const o=n[s](t,e,r.parameters[s]);return o!==e&&(t.exports.__pin(o),i.push(o)),o})),c=e(...a);return i.forEach((e=>t.exports.__unpin(e))),s(t,c,r.returnType)}}const Y="as-bind_bindings";function G(t,{depth:e=Number.POSITIVE_INFINITY}={}){return e<=0||!t||"object"!=typeof t?t:Object.fromEntries(Object.entries(t).map((([t,r])=>[t,G(r,{depth:e-1})])))}function H(t){const e=WebAssembly.Module.customSections(t,Y),r=new TextDecoder("utf8").decode(new Uint8Array(e[0]));try{return JSON.parse(r)}catch(t){throw Error(`Couldn’t decode type descriptor: ${t.message}`)}}class K{exports={};importObject={};typeDescriptor;module;loadedModule;getTypeId(t){if(t in this.typeDescriptor.typeIds)return this.typeDescriptor.typeIds[t].id;throw Error(`Unknown type ${JSON.stringify(t)}`)}getTypeSize(t){if(t in this.typeDescriptor.typeIds)return this.typeDescriptor.typeIds[t].byteSize;throw Error(`Unknown type ${JSON.stringify(t)}`)}_validate(){if(!WebAssembly.Module.exports(this.module).find((t=>"__new"===t.name)))throw Error("The AssemblyScript wasm module was not built with --exportRuntime, which is required.");if(1!==WebAssembly.Module.customSections(this.module,Y).length)throw new Error("The AssemblyScript wasm module was not built with the as-bind transform.")}async _instantiate(t,e){this.module=await async function(t){if(t=await Promise.resolve(t),"undefined"!=typeof Response&&t instanceof Response){if(WebAssembly.compileStreaming)return WebAssembly.compileStreaming(t);t=await t.arrayBuffer()}return WebAssembly.compile(t)}(t),this._validate(),this.typeDescriptor=H(this.module),this._instantiateBindImportFunctions(e),this.loadedModule=await async function(t,e){return v.instantiate(t,e)}(this.module,this.importObject),this._instantiateBindUnboundExports()}_instantiateSync(t,e){this.module=new WebAssembly.Module(t),this._validate(),this.typeDescriptor=H(this.module),this._instantiateBindImportFunctions(e),this.loadedModule=function(t,e){return v.instantiateSync(t,e)}(this.module,this.importObject),this._instantiateBindUnboundExports()}_instantiateBindImportFunctions(t){this.importObject=G(t,{depth:2});for(const[e,r]of Object.entries(this.typeDescriptor.importedFunctions))for(const[n,s]of Object.entries(r))this.importObject[e][`__asbind_unbound_${n}`]=t[e][n],this.importObject[e][n]=V(this,t[e][n],s)}_instantiateBindUnboundExports(){const t=this.loadedModule.exports;this.exports=G(t,{depth:1});for(const[e,r]of Object.entries(this.typeDescriptor.exportedFunctions))this.exports[e]=q(this,t[e],r)}}return t.converters=P,t.instantiate=async function(t,e){let r=new K;return await r._instantiate(t,e),r},t.instantiateSync=function(t,e){let r=new K;return r._instantiateSync(t,e),r},t.version="0.8.2",t}({});
//# sourceMappingURL=as-bind.iife.js.map
