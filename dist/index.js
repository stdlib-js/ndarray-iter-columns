"use strict";var E=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=E(function(G,q){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/assert-is-plain-object/dist'),T=require('@stdlib/assert-is-boolean/dist').isPrimitive,C=require('@stdlib/assert-is-ndarray-like/dist'),F=require('@stdlib/ndarray-base-assert-is-read-only/dist'),P=require('@stdlib/assert-has-own-property/dist'),g=require('@stdlib/symbol-iterator/dist'),S=require('@stdlib/array-base-zeros/dist'),x=require('@stdlib/ndarray-shape/dist'),L=require('@stdlib/ndarray-base-numel/dist'),R=require('@stdlib/ndarray-base-slice/dist'),V=require('@stdlib/ndarray-base-next-cartesian-index/dist').assign,k=require('@stdlib/slice-base-args2multislice/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e){var r,n,i,t,o,d,a,u,y,s,m;if(!C(e))throw new TypeError(v('1jp4f',e));if(t={writable:!1},arguments.length>1){if(r=arguments[1],!j(r))throw new TypeError(v('1jp2V',r));if(P(r,"readonly")){if(!T(r.readonly))throw new TypeError(v('1jp2o',"readonly",r.readonly));if(t.writable=!r.readonly,t.writable&&F(e))throw new Error(v('1jpF4'))}}if(n=x(e),i=n.length,i<2)throw new TypeError(v('1jpF2'));return s=L(n),s===0&&(d=!0),s/=n[i-2],u=i-1,y=n[u],m=-1,a=S(i),a[i-2]=null,o={},w(o,"next",h),w(o,"return",c),g&&w(o,g,O),o;function h(){var l,f;return m+=1,d||m>=s?{done:!0}:(l=k(a),f=(a[u]+1)%y,a[u]=f,f===0&&(a=V(n,"row-major",a,u-2,a)),{value:R(e,l,!0,t.writable),done:!1})}function c(l){return d=!0,arguments.length?{value:l,done:!0}:{done:!0}}function O(){return p(e,t)}}q.exports=p
});var z=b();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map