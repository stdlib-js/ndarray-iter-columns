"use strict";var E=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=E(function(G,q){"use strict";var w=require("@stdlib/utils-define-nonenumerable-read-only-property"),j=require("@stdlib/assert-is-plain-object"),T=require("@stdlib/assert-is-boolean").isPrimitive,C=require("@stdlib/assert-is-ndarray-like"),F=require("@stdlib/ndarray-base-assert-is-read-only"),P=require("@stdlib/assert-has-own-property"),g=require("@stdlib/symbol-iterator"),S=require("@stdlib/array-base-zeros"),x=require("@stdlib/ndarray-shape"),L=require("@stdlib/ndarray-base-numel"),R=require("@stdlib/ndarray-base-slice"),V=require("@stdlib/ndarray-base-next-cartesian-index").assign,k=require("@stdlib/slice-base-args2multislice"),v=require("@stdlib/string-format");function p(e){var r,n,i,t,o,d,a,u,y,s,m;if(!C(e))throw new TypeError(v("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if(t={writable:!1},arguments.length>1){if(r=arguments[1],!j(r))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",r));if(P(r,"readonly")){if(!T(r.readonly))throw new TypeError(v("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",r.readonly));if(t.writable=!r.readonly,t.writable&&F(e))throw new Error(v("invalid option. Cannot write to read-only array."))}}if(n=x(e),i=n.length,i<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return s=L(n),s===0&&(d=!0),s/=n[i-2],u=i-1,y=n[u],m=-1,a=S(i),a[i-2]=null,o={},w(o,"next",h),w(o,"return",c),g&&w(o,g,O),o;function h(){var l,f;return m+=1,d||m>=s?{done:!0}:(l=k(a),f=(a[u]+1)%y,a[u]=f,f===0&&(a=V(n,"row-major",a,u-2,a)),{value:R(e,l,!0,t.writable),done:!1})}function c(l){return d=!0,arguments.length?{value:l,done:!0}:{done:!0}}function O(){return p(e,t)}}q.exports=p});var z=b();module.exports=z;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
