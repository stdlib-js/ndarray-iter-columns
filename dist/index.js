"use strict";var E=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var b=E(function(G,q){"use strict";var f=require("@stdlib/utils-define-nonenumerable-read-only-property"),j=require("@stdlib/assert-is-plain-object"),T=require("@stdlib/assert-is-boolean").isPrimitive,C=require("@stdlib/assert-is-ndarray-like"),F=require("@stdlib/ndarray-base-assert-is-read-only"),P=require("@stdlib/assert-has-own-property"),g=require("@stdlib/symbol-iterator"),S=require("@stdlib/array-base-zeros"),x=require("@stdlib/ndarray-shape"),L=require("@stdlib/ndarray-base-numel"),R=require("@stdlib/ndarray-base-slice"),V=require("@stdlib/ndarray-base-next-cartesian-index").assign,k=require("@stdlib/slice-base-args2multislice"),w=require("@stdlib/string-format");function p(e){var r,a,i,t,o,v,n,u,y,s,d;if(!C(e))throw new TypeError(w("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if(t={writable:!1},arguments.length>1){if(r=arguments[1],!j(r))throw new TypeError(w("invalid argument. Options argument must be an object. Value: `%s`.",r));if(P(r,"readonly")){if(!T(r.readonly))throw new TypeError(w("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",r.readonly));if(t.writable=!r.readonly,t.writable&&F(e))throw new Error("invalid option. Cannot write to read-only array.")}}if(a=x(e),i=a.length,i<2)throw new TypeError("invalid argument. First argument must be an ndarray having two or more dimensions.");return s=L(a),s===0&&(v=!0),s/=a[i-2],u=i-1,y=a[u],d=-1,n=S(i),n[i-2]=null,o={},f(o,"next",h),f(o,"return",c),g&&f(o,g,O),o;function h(){var l,m;return d+=1,v||d>=s?{done:!0}:(l=k(n),m=(n[u]+1)%y,n[u]=m,m===0&&(n=V(a,"row-major",n,u-2,n)),{value:R(e,l,!0,t.writable),done:!1})}function c(l){return v=!0,arguments.length?{value:l,done:!0}:{done:!0}}function O(){return p(e,t)}}q.exports=p});var z=b();module.exports=z;
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
