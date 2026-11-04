"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var n=u(function(l,a){
var s=require('@stdlib/assert-is-arraybuffer/dist'),o=require('@stdlib/ndarray-vector-ctor/dist').factory,g=require('@stdlib/error-tools-fmtprodmsg/dist'),t=o("generic");function c(){var r;if(arguments.length===0)return new t;if(r=arguments[0],s(r))throw new TypeError(g("invalid argument. First argument must be either a length, an array-like object, or an iterable. Value: `%s`.",r));return arguments.length===1?new t(r):new t(r,arguments[1])}a.exports=c
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
