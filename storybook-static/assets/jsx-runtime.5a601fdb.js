var H=Object.defineProperty;var l=(e,r)=>H(e,"name",{value:r,configurable:!0});import{g as W}from"./iframe.417c34cd.js";function Y(e,r){for(var t=0;t<r.length;t++){const o=r[t];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in e)){const u=Object.getOwnPropertyDescriptor(o,n);u&&Object.defineProperty(e,n,u.get?u:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}l(Y,"_mergeNamespaces");var _={exports:{}},c={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var k=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;function K(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}l(K,"toObject");function Q(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var o=Object.getOwnPropertyNames(r).map(function(u){return r[u]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(u){n[u]=u}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l(Q,"shouldUseNative");var X=Q()?Object.assign:function(e,r){for(var t,o=K(e),n,u=1;u<arguments.length;u++){t=Object(arguments[u]);for(var i in t)J.call(t,i)&&(o[i]=t[i]);if(k){n=k(t);for(var f=0;f<n.length;f++)G.call(t,n[f])&&(o[n[f]]=t[n[f]])}}return o};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=X,p=typeof Symbol=="function"&&Symbol.for,m=p?Symbol.for("react.element"):60103,Z=p?Symbol.for("react.portal"):60106,ee=p?Symbol.for("react.fragment"):60107,re=p?Symbol.for("react.strict_mode"):60108,te=p?Symbol.for("react.profiler"):60114,ne=p?Symbol.for("react.provider"):60109,oe=p?Symbol.for("react.context"):60110,ue=p?Symbol.for("react.forward_ref"):60112,fe=p?Symbol.for("react.suspense"):60113,ce=p?Symbol.for("react.memo"):60115,le=p?Symbol.for("react.lazy"):60116,C=typeof Symbol=="function"&&Symbol.iterator;function v(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}l(v,"C");var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I={};function d(e,r,t){this.props=e,this.context=r,this.refs=I,this.updater=t||F}l(d,"F");d.prototype.isReactComponent={};d.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(v(85));this.updater.enqueueSetState(this,e,r,"setState")};d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N(){}l(N,"G");N.prototype=d.prototype;function E(e,r,t){this.props=e,this.context=r,this.refs=I,this.updater=t||F}l(E,"H");var P=E.prototype=new N;P.constructor=E;w(P,d.prototype);P.isPureReactComponent=!0;var R={current:null},U=Object.prototype.hasOwnProperty,q={key:!0,ref:!0,__self:!0,__source:!0};function D(e,r,t){var o,n={},u=null,i=null;if(r!=null)for(o in r.ref!==void 0&&(i=r.ref),r.key!==void 0&&(u=""+r.key),r)U.call(r,o)&&!q.hasOwnProperty(o)&&(n[o]=r[o]);var f=arguments.length-2;if(f===1)n.children=t;else if(1<f){for(var s=Array(f),a=0;a<f;a++)s[a]=arguments[a+2];n.children=s}if(e&&e.defaultProps)for(o in f=e.defaultProps,f)n[o]===void 0&&(n[o]=f[o]);return{$$typeof:m,type:e,key:u,ref:i,props:n,_owner:R.current}}l(D,"M");function ie(e,r){return{$$typeof:m,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}l(ie,"N");function $(e){return typeof e=="object"&&e!==null&&e.$$typeof===m}l($,"O");function se(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(t){return r[t]})}l(se,"escape");var L=/\/+/g,h=[];function T(e,r,t,o){if(h.length){var n=h.pop();return n.result=e,n.keyPrefix=r,n.func=t,n.context=o,n.count=0,n}return{result:e,keyPrefix:r,func:t,context:o,count:0}}l(T,"R");function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>h.length&&h.push(e)}l(M,"S");function S(e,r,t,o){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(n){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case m:case Z:u=!0}}if(u)return t(o,e,r===""?"."+O(e,0):r),1;if(u=0,r=r===""?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){n=e[i];var f=r+O(n,i);u+=S(n,f,t,o)}else if(e===null||typeof e!="object"?f=null:(f=C&&e[C]||e["@@iterator"],f=typeof f=="function"?f:null),typeof f=="function")for(e=f.call(e),i=0;!(n=e.next()).done;)n=n.value,f=r+O(n,i++),u+=S(n,f,t,o);else if(n==="object")throw t=""+e,Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}l(S,"T");function b(e,r,t){return e==null?0:S(e,"",r,t)}l(b,"V");function O(e,r){return typeof e=="object"&&e!==null&&e.key!=null?se(e.key):r.toString(36)}l(O,"U");function pe(e,r){e.func.call(e.context,r,e.count++)}l(pe,"W");function ae(e,r,t){var o=e.result,n=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?x(e,o,t,function(u){return u}):e!=null&&($(e)&&(e=ie(e,n+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(L,"$&/")+"/")+t)),o.push(e))}l(ae,"aa");function x(e,r,t,o,n){var u="";t!=null&&(u=(""+t).replace(L,"$&/")+"/"),r=T(r,u,o,n),b(e,ae,r),M(r)}l(x,"X");var B={current:null};function y(){var e=B.current;if(e===null)throw Error(v(321));return e}l(y,"Z");var ye={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:R,IsSomeRendererActing:{current:!1},assign:w};c.Children={map:function(e,r,t){if(e==null)return e;var o=[];return x(e,o,null,r,t),o},forEach:function(e,r,t){if(e==null)return e;r=T(null,null,r,t),b(e,pe,r),M(r)},count:function(e){return b(e,function(){return null},null)},toArray:function(e){var r=[];return x(e,r,null,function(t){return t}),r},only:function(e){if(!$(e))throw Error(v(143));return e}};c.Component=d;c.Fragment=ee;c.Profiler=te;c.PureComponent=E;c.StrictMode=re;c.Suspense=fe;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye;c.cloneElement=function(e,r,t){if(e==null)throw Error(v(267,e));var o=w({},e.props),n=e.key,u=e.ref,i=e._owner;if(r!=null){if(r.ref!==void 0&&(u=r.ref,i=R.current),r.key!==void 0&&(n=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in r)U.call(r,s)&&!q.hasOwnProperty(s)&&(o[s]=r[s]===void 0&&f!==void 0?f[s]:r[s])}var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){f=Array(s);for(var a=0;a<s;a++)f[a]=arguments[a+2];o.children=f}return{$$typeof:m,type:e.type,key:n,ref:u,props:o,_owner:i}};c.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:oe,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:ne,_context:e},e.Consumer=e};c.createElement=D;c.createFactory=function(e){var r=D.bind(null,e);return r.type=e,r};c.createRef=function(){return{current:null}};c.forwardRef=function(e){return{$$typeof:ue,render:e}};c.isValidElement=$;c.lazy=function(e){return{$$typeof:le,_ctor:e,_status:-1,_result:null}};c.memo=function(e,r){return{$$typeof:ce,type:e,compare:r===void 0?null:r}};c.useCallback=function(e,r){return y().useCallback(e,r)};c.useContext=function(e,r){return y().useContext(e,r)};c.useDebugValue=function(){};c.useEffect=function(e,r){return y().useEffect(e,r)};c.useImperativeHandle=function(e,r,t){return y().useImperativeHandle(e,r,t)};c.useLayoutEffect=function(e,r){return y().useLayoutEffect(e,r)};c.useMemo=function(e,r){return y().useMemo(e,r)};c.useReducer=function(e,r,t){return y().useReducer(e,r,t)};c.useRef=function(e){return y().useRef(e)};c.useState=function(e){return y().useState(e)};c.version="16.14.0";(function(e){e.exports=c})(_);const de=W(_.exports),Oe=Y({__proto__:null,default:de},[_.exports]);var j={exports:{}},g={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=_.exports,V=60103;g.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var A=Symbol.for;V=A("react.element"),g.Fragment=A("react.fragment")}var ve=me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ge=Object.prototype.hasOwnProperty,he={key:!0,ref:!0,__self:!0,__source:!0};function z(e,r,t){var o,n={},u=null,i=null;t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(i=r.ref);for(o in r)ge.call(r,o)&&!he.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)n[o]===void 0&&(n[o]=r[o]);return{$$typeof:V,type:e,key:u,ref:i,props:n,_owner:ve.current}}l(z,"q");g.jsx=z;g.jsxs=z;(function(e){e.exports=g})(j);const Se=j.exports.Fragment,be=j.exports.jsx,xe=j.exports.jsxs;export{Se as F,Oe as R,xe as a,de as b,be as j,X as o,_ as r};
//# sourceMappingURL=jsx-runtime.5a601fdb.js.map
