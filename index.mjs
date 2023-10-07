// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.0.0-esm/index.mjs";import{assign as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-next-cartesian-index@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function h(v){var b,u,f,y,g,c,w,x,E,T,F;if(!s(v))throw new TypeError(j("invalid argument. First argument must be an ndarray. Value: `%s`.",v));if(y={writable:!1},arguments.length>1){if(!r(b=arguments[1]))throw new TypeError(j("invalid argument. Options argument must be an object. Value: `%s`.",b));if(i(b,"readonly")){if(!t(b.readonly))throw new TypeError(j("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",b.readonly));if(y.writable=!b.readonly,y.writable&&n(v))throw new Error(j("invalid option. Cannot write to read-only array."))}}if((f=(u=v.shape).length)<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return 0===(T=a(u))&&(c=!0),T/=u[f-2],E=u[x=f-1],F=-1,(w=d(f))[f-2]=null,e(g={},"next",O),e(g,"return",V),o&&e(g,o,k),g;function O(){var e,r;return F+=1,c||F>=T?{done:!0}:(e=p.apply(null,w),r=(w[x]+1)%E,w[x]=r,0===r&&(w=l(u,"row-major",w,x-2,w)),{value:m(v,e,!0,y.writable),done:!1})}function V(e){return c=!0,arguments.length?{value:e,done:!0}:{done:!0}}function k(){return h(v,y)}}export{h as default};
//# sourceMappingURL=index.mjs.map
