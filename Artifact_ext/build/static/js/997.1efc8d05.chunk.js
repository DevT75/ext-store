"use strict";(self.webpackChunkrewards=self.webpackChunkrewards||[]).push([[997],{997:(e,t,r)=>{r.d(t,{upload:()=>w});var n=r(966),i=r(7717),a=r(6406);const o="[object Uint8Array]";function s(e){if(!f(e))throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof e}\``)}function f(e){return!!e&&(e.constructor===Uint8Array||Object.prototype.toString.call(e)===o)}function l(e,t){if(s(e),s(t),e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function u(e){return globalThis.File&&e instanceof File}function c(e){return!!e&&(!!(0,a.C)(e,["data","name"])&&!("string"!==typeof e.name||"string"!==typeof e.data&&!f(e.data)))}function p(e,t){if(u(e)&&u(t)){if(e.name===t.name&&e.lastModified===t.lastModified&&e.size===t.size)return!0}else{if(f(e)&&f(t))return l(e,t);if(c(e)&&c(t)&&e.name===t.name){if("string"===typeof e.data&&"string"===typeof t.data)return e.data===t.data;if(f(e.data)&&f(t.data))return l(e.data,t.data)}}return!1}function m(e){return u(e)||f(e)||c(e)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(m(e))return t.push(e),t;if("object"===typeof e){if(!e)return t;if(Array.isArray(e))for(const r of e)d(r,t);else Object.keys(e).map((r=>d(e[r],t)))}return t}function y(e,t){if(m(e)){if(t.length)return t.shift();console.warn("Not enough URIs to replace all files in object.")}return"object"===typeof e&&e?Array.isArray(e)?e.map((e=>y(e,t))):Object.fromEntries(Object.entries(e).map((e=>{let[r,n]=e;return[r,y(n,t)]}))):e}function h(e){return"string"===typeof e?function(e){if(e.includes("/ipfs/"))return`ipfs://${e.split("/ipfs/")[1]}`;return e}(e):"object"===typeof e&&e?m(e)?e:Array.isArray(e)?e.map((e=>h(e))):Object.fromEntries(Object.entries(e).map((e=>{let[t,r]=e;return[t,h(r)]}))):e}async function w(e){if(0===e.files.length)return null;let t;if(e.files.map((e=>m(e)||"string"===typeof e)).every((e=>!!e)))t=e.files;else{let r=e.files;r=h(r);const n=d(r);if(n.length){const t=await w({...e,files:n});r=y(r,Array.isArray(t)?t:[t])}t=r.map((e=>"string"===typeof e?e:(0,i.A)(e)))}const a=new FormData,{fileNames:o,form:s}=function(e,t,r){const n=new Map,i=[];for(let o=0;o<t.length;o++){const a=t[o];let s="",f=a;if(u(a))if(r?.rewriteFileNames){let e="";if(a.name){const t=a.name.lastIndexOf(".");t>-1&&(e=a.name.substring(t))}s=`${o+r.rewriteFileNames.fileStartNumber}${e}`}else s=`${a.name}`;else c(a)?(f=a.data,s=r?.rewriteFileNames?`${o+r.rewriteFileNames.fileStartNumber}`:`${a.name}`):s=r?.rewriteFileNames?`${o+r.rewriteFileNames.fileStartNumber}`:`${o}`;const l=r?.uploadWithoutDirectory?"files":`files/${s}`;if(n.has(s)){if(p(n.get(s),a)){i.push(s);continue}throw new Error(`[DUPLICATE_FILE_NAME_ERROR] File name ${s} was passed for more than one different file.`)}n.set(s,a),i.push(s),e.append("file",new Blob([f]),l)}const a={name:"Storage SDK",keyvalues:{...r?.metadata}};return e.append("pinataMetadata",JSON.stringify(a)),r?.uploadWithoutDirectory&&e.append("pinataOptions",JSON.stringify({wrapWithDirectory:!1})),{form:e,fileNames:i.map((e=>encodeURIComponent(e)))}}(a,t,e),f=(0,n.l)();if("browser"===f||"node"===f){const{uploadBatch:t}=await r.e(176).then(r.bind(r,176)),n=await t(e.client,s,o,e);return 1===e.files.length?n[0]:n}throw new Error("Please, use the uploadMobile function in mobile environments.")}}}]);
//# sourceMappingURL=997.1efc8d05.chunk.js.map