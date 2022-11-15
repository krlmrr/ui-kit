var ve=Object.defineProperty;var h=(e,n)=>ve(e,"name",{value:n,configurable:!0});import{o as L,a as $,b as E,l as se,p as ue,m as q,n as O,f as _,d as M,q as g,h as ae,F as te,x as de,y as ne,z as ge,A as D,e as N,g as j,i as ie,t as J,B as Q,C as X,u as T,D as we,E as Y}from"./vue.esm-bundler.47a8975e.js";import{_ as re}from"./Label.f617fa7d.js";import{_ as ye}from"./InputError.f1e4521d.js";import{o as C,u as B,d as xe,e as _e,f as ke,V as Oe,a as Ce,P as H,w as oe,t as U,b as Se,R as W,c as F}from"./use-controllable.0c670013.js";function Re(e,n){return L(),$("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[E("path",{"fill-rule":"evenodd",d:"M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])}h(Re,"render$1");function Fe(e,n){return L(),$("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[E("path",{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z","clip-rule":"evenodd"})])}h(Fe,"render");function Ie(e){throw new Error("Unexpected object: "+e)}h(Ie,"f");var R=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(R||{});function Pe(e,n){let l=n.resolveItems();if(l.length<=0)return null;let s=n.resolveActiveIndex(),t=s!=null?s:-1,o=(()=>{switch(e.focus){case 0:return l.findIndex(a=>!n.resolveDisabled(a));case 1:{let a=l.slice().reverse().findIndex((i,v,c)=>t!==-1&&c.length-v-1>=t?!1:!n.resolveDisabled(i));return a===-1?a:l.length-1-a}case 2:return l.findIndex((a,i)=>i<=t?!1:!n.resolveDisabled(a));case 3:{let a=l.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return a===-1?a:l.length-1-a}case 4:return l.findIndex(a=>n.resolveId(a)===e.id);case 5:return null;default:Ie(e)}})();return o===-1?s:o}h(Pe,"x");let ce=Symbol("Context");var Z=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Z||{});function Ae(){return se(ce,null)}h(Ae,"p$1");function Te(e){ue(ce,e)}h(Te,"c");const pe=typeof window>"u"||typeof document>"u";function me(e){if(pe)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=C(e);if(n)return n.ownerDocument}return document}h(me,"m$1");function Be({container:e,accept:n,walk:l,enabled:s}){q(()=>{let t=e.value;if(!t||s!==void 0&&!s.value)return;let o=me(e);if(!o)return;let a=Object.assign(v=>n(v),{acceptNode:n}),i=o.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,a,!1);for(;i.nextNode();)l(i.currentNode)})}h(Be,"p");let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Le=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Le||{}),Ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ne||{}),Ee=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ee||{}),be=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(be||{});function De(e,n=0){var l;return e===((l=me(e))==null?void 0:l.body)?!1:B(n,{[0](){return e.matches(le)},[1](){let s=e;for(;s!==null;){if(s.matches(le))return!0;s=s.parentElement}return!1}})}h(De,"h");function Me(e,n=l=>l){return e.slice().sort((l,s)=>{let t=n(l),o=n(s);if(t===null||o===null)return 0;let a=t.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}h(Me,"O");function ee(e,n,l){pe||q(s=>{document.addEventListener(e,n,l),s(()=>document.removeEventListener(e,n,l))})}h(ee,"v");function Ve(e,n,l=_(()=>!0)){function s(o,a){if(!l.value||o.defaultPrevented)return;let i=a(o);if(i===null||!i.getRootNode().contains(i))return;let v=h(function c(r){return typeof r=="function"?c(r()):Array.isArray(r)||r instanceof Set?r:[r]},"o")(e);for(let c of v){if(c===null)continue;let r=c instanceof HTMLElement?c:C(c);if(r!=null&&r.contains(i))return}return!De(i,be.Loose)&&i.tabIndex!==-1&&o.preventDefault(),n(o,i)}h(s,"a");let t=O(null);ee("mousedown",o=>{var a,i;l.value&&(t.value=((i=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:i[0])||o.target)},!0),ee("click",o=>{!t.value||(s(o,()=>t.value),t.value=null)},!0),ee("blur",o=>s(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}h(Ve,"y");function je(e,n){return e===n}h(je,"de");var He=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(He||{}),ze=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ze||{}),Ge=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ge||{});let he=Symbol("ComboboxContext");function z(e){let n=se(he,null);if(n===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,z),l}return n}h(z,"L");let $e=M({name:"Combobox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>je},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},name:{type:String},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:n,attrs:l,emit:s}){let t=O(1),o=O(null),a=O(null),i=O(null),v=O(null),c=O({static:!1,hold:!1}),r=O([]),y=O(null),S=O(1),P=O(!1);function x(d=b=>b){let b=y.value!==null?r.value[y.value]:null,f=Me(d(r.value.slice()),w=>C(w.dataRef.domRef)),m=b?f.indexOf(b):null;return m===-1&&(m=null),{options:f,activeOptionIndex:m}}h(x,"f");let I=_(()=>e.multiple?1:0),G=_(()=>e.nullable),[V,p]=xe(_(()=>e.modelValue),d=>s("update:modelValue",d),_(()=>e.defaultValue)),u={comboboxState:t,value:V,mode:I,compare(d,b){if(typeof e.by=="string"){let f=e.by;return(d==null?void 0:d[f])===(b==null?void 0:b[f])}return e.by(d,b)},nullable:G,inputRef:a,labelRef:o,buttonRef:i,optionsRef:v,disabled:_(()=>e.disabled),options:r,change(d){p(d)},activeOptionIndex:_(()=>{if(P.value&&y.value===null&&r.value.length>0){let d=r.value.findIndex(b=>!b.dataRef.disabled);if(d!==-1)return d}return y.value}),activationTrigger:S,optionsPropsRef:c,closeCombobox(){P.value=!1,!e.disabled&&t.value!==1&&(t.value=1,y.value=null)},openCombobox(){if(P.value=!0,e.disabled||t.value===0)return;let d=r.value.findIndex(b=>{let f=g(b.dataRef.value);return B(I.value,{[0]:()=>u.compare(g(u.value.value),g(f)),[1]:()=>g(u.value.value).some(m=>u.compare(g(m),g(f)))})});d!==-1&&(y.value=d),t.value=0},goToOption(d,b,f){if(P.value=!1,e.disabled||v.value&&!c.value.static&&t.value===1)return;let m=x();if(m.activeOptionIndex===null){let k=m.options.findIndex(K=>!K.dataRef.disabled);k!==-1&&(m.activeOptionIndex=k)}let w=Pe(d===R.Specific?{focus:R.Specific,id:b}:{focus:d},{resolveItems:()=>m.options,resolveActiveIndex:()=>m.activeOptionIndex,resolveId:k=>k.id,resolveDisabled:k=>k.dataRef.disabled});y.value=w,S.value=f!=null?f:1,r.value=m.options},selectOption(d){let b=r.value.find(m=>m.id===d);if(!b)return;let{dataRef:f}=b;p(B(I.value,{[0]:()=>f.value,[1]:()=>{let m=g(u.value.value).slice(),w=g(f.value),k=m.findIndex(K=>u.compare(w,g(K)));return k===-1?m.push(w):m.splice(k,1),m}}))},selectActiveOption(){if(u.activeOptionIndex.value===null)return;let{dataRef:d,id:b}=r.value[u.activeOptionIndex.value];p(B(I.value,{[0]:()=>d.value,[1]:()=>{let f=g(u.value.value).slice(),m=g(d.value),w=f.findIndex(k=>u.compare(m,g(k)));return w===-1?f.push(m):f.splice(w,1),f}})),u.goToOption(R.Specific,b)},registerOption(d,b){let f={id:d,dataRef:b},m=x(w=>[...w,f]);if(y.value===null){let w=b.value.value;B(I.value,{[0]:()=>u.compare(g(u.value.value),g(w)),[1]:()=>g(u.value.value).some(k=>u.compare(g(k),g(w)))})&&(m.activeOptionIndex=m.options.indexOf(f))}r.value=m.options,y.value=m.activeOptionIndex,S.value=1},unregisterOption(d){let b=x(f=>{let m=f.findIndex(w=>w.id===d);return m!==-1&&f.splice(m,1),f});r.value=b.options,y.value=b.activeOptionIndex,S.value=1}};Ve([a,i,v],()=>u.closeCombobox(),_(()=>t.value===0)),ue(he,u),Te(_(()=>B(t.value,{[0]:Z.Open,[1]:Z.Closed})));let A=_(()=>u.activeOptionIndex.value===null?null:r.value[u.activeOptionIndex.value].dataRef.value);return()=>{let{name:d,disabled:b,...f}=e,m={open:t.value===0,disabled:b,activeIndex:u.activeOptionIndex.value,activeOption:A.value,value:V.value};return ae(te,[...d!=null&&V.value!=null?_e({[d]:V.value}).map(([w,k])=>ae(ke,Oe({features:Ce.Hidden,key:w,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:w,value:k}))):[],H({theirProps:{...l,...oe(f,["modelValue","defaultValue","nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:m,slots:n,attrs:l,name:"Combobox"})])}}});M({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(e,{attrs:n,slots:l}){let s=z("ComboboxLabel"),t=`headlessui-combobox-label-${U()}`;function o(){var a;(a=C(s.inputRef))==null||a.focus({preventScroll:!0})}return h(o,"t$1"),()=>{let a={open:s.comboboxState.value===0,disabled:s.disabled.value},i={id:t,ref:s.labelRef,onClick:o};return H({ourProps:i,theirProps:e,slot:a,attrs:n,slots:l,name:"ComboboxLabel"})}}});let qe=M({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"}},setup(e,{attrs:n,slots:l,expose:s}){let t=z("ComboboxButton"),o=`headlessui-combobox-button-${U()}`;s({el:t.buttonRef,$el:t.buttonRef});function a(c){t.disabled.value||(t.comboboxState.value===0?t.closeCombobox():(c.preventDefault(),t.openCombobox()),D(()=>{var r;return(r=C(t.inputRef))==null?void 0:r.focus({preventScroll:!0})}))}h(a,"v");function i(c){switch(c.key){case F.ArrowDown:c.preventDefault(),c.stopPropagation(),t.comboboxState.value===1&&t.openCombobox(),D(()=>{var r;return(r=t.inputRef.value)==null?void 0:r.focus({preventScroll:!0})});return;case F.ArrowUp:c.preventDefault(),c.stopPropagation(),t.comboboxState.value===1&&(t.openCombobox(),D(()=>{t.value.value||t.goToOption(R.Last)})),D(()=>{var r;return(r=t.inputRef.value)==null?void 0:r.focus({preventScroll:!0})});return;case F.Escape:if(t.comboboxState.value!==0)return;c.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&c.stopPropagation(),t.closeCombobox(),D(()=>{var r;return(r=t.inputRef.value)==null?void 0:r.focus({preventScroll:!0})});return}}h(i,"g");let v=Se(_(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var c,r;let y={open:t.comboboxState.value===0,disabled:t.disabled.value,value:t.value.value},S={ref:t.buttonRef,id:o,type:v.value,tabindex:"-1","aria-haspopup":!0,"aria-controls":(c=C(t.optionsRef))==null?void 0:c.id,"aria-expanded":t.disabled.value?void 0:t.comboboxState.value===0,"aria-labelledby":t.labelRef.value?[(r=C(t.labelRef))==null?void 0:r.id,o].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:i,onClick:a};return H({ourProps:S,theirProps:e,slot:y,attrs:n,slots:l,name:"ComboboxButton"})}}}),Ue=M({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function}},emits:{change:e=>!0},setup(e,{emit:n,attrs:l,slots:s,expose:t}){let o=z("ComboboxInput"),a=`headlessui-combobox-input-${U()}`;t({el:o.inputRef,$el:o.inputRef});let i=O(o.value.value),v=h(()=>{var p;let u=o.value.value;return C(o.inputRef)?typeof e.displayValue<"u"?(p=e.displayValue(u))!=null?p:"":typeof u=="string"?u:"":""},"x"),c=O(""),r=!1;function y(p){let u=C(o.inputRef);!u||(u.value=p,r=!0,u.dispatchEvent(new Event("input",{bubbles:!0})),r=!1)}h(y,"C"),de(()=>{ne([o.value,c],()=>{i.value=v()},{flush:"sync",immediate:!0}),ne([i,o.comboboxState],([p,u],[A,d])=>{let b=C(o.inputRef);!b||(d===0&&u===1?y(p):p!==A&&(b.value=p))},{immediate:!0})});let S=O(!1);function P(){S.value=!0}h(P,"y");function x(){setTimeout(()=>{S.value=!1})}h(x,"f");function I(p){switch(p.key){case F.Backspace:case F.Delete:if(o.mode.value!==0||!o.nullable.value)return;let u=p.currentTarget;requestAnimationFrame(()=>{if(u.value===""){o.change(null);let A=C(o.optionsRef);A&&(A.scrollTop=0),o.goToOption(R.Nothing)}});break;case F.Enter:if(o.comboboxState.value!==0||S.value)return;if(p.preventDefault(),p.stopPropagation(),o.activeOptionIndex.value===null){o.closeCombobox();return}o.selectActiveOption(),o.mode.value===0&&o.closeCombobox();break;case F.ArrowDown:return p.preventDefault(),p.stopPropagation(),B(o.comboboxState.value,{[0]:()=>o.goToOption(R.Next),[1]:()=>o.openCombobox()});case F.ArrowUp:return p.preventDefault(),p.stopPropagation(),B(o.comboboxState.value,{[0]:()=>o.goToOption(R.Previous),[1]:()=>{o.openCombobox(),D(()=>{o.value.value||o.goToOption(R.Last)})}});case F.Home:case F.PageUp:return p.preventDefault(),p.stopPropagation(),o.goToOption(R.First);case F.End:case F.PageDown:return p.preventDefault(),p.stopPropagation(),o.goToOption(R.Last);case F.Escape:if(o.comboboxState.value!==0)return;p.preventDefault(),o.optionsRef.value&&!o.optionsPropsRef.value.static&&p.stopPropagation(),o.closeCombobox();break;case F.Tab:if(o.comboboxState.value!==0)return;o.mode.value===0&&o.selectActiveOption(),o.closeCombobox();break}}h(I,"D");function G(p){n("change",p)}h(G,"B");function V(p){r||o.openCombobox(),n("change",p)}return h(V,"E"),()=>{var p,u,A,d,b,f;let m={open:o.comboboxState.value===0},w={"aria-controls":(p=o.optionsRef.value)==null?void 0:p.id,"aria-expanded":o.disabled.value?void 0:o.comboboxState.value===0,"aria-activedescendant":o.activeOptionIndex.value===null||(u=o.options.value[o.activeOptionIndex.value])==null?void 0:u.id,"aria-multiselectable":o.mode.value===1?!0:void 0,"aria-labelledby":(b=(A=C(o.labelRef))==null?void 0:A.id)!=null?b:(d=C(o.buttonRef))==null?void 0:d.id,id:a,onCompositionstart:P,onCompositionend:x,onKeydown:I,onChange:G,onInput:V,role:"combobox",type:(f=l.type)!=null?f:"text",tabIndex:0,ref:o.inputRef},k=oe(e,["displayValue"]);return H({ourProps:w,theirProps:k,slot:m,attrs:l,slots:s,features:W.RenderStrategy|W.Static,name:"ComboboxInput"})}}}),We=M({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(e,{attrs:n,slots:l,expose:s}){let t=z("ComboboxOptions"),o=`headlessui-combobox-options-${U()}`;s({el:t.optionsRef,$el:t.optionsRef}),q(()=>{t.optionsPropsRef.value.static=e.static}),q(()=>{t.optionsPropsRef.value.hold=e.hold});let a=Ae(),i=_(()=>a!==null?a.value===Z.Open:t.comboboxState.value===0);return Be({container:_(()=>C(t.optionsRef)),enabled:_(()=>t.comboboxState.value===0),accept(v){return v.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:v.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(v){v.setAttribute("role","none")}}),()=>{var v,c,r,y;let S={open:t.comboboxState.value===0},P={"aria-activedescendant":t.activeOptionIndex.value===null||(v=t.options.value[t.activeOptionIndex.value])==null?void 0:v.id,"aria-labelledby":(y=(c=C(t.labelRef))==null?void 0:c.id)!=null?y:(r=C(t.buttonRef))==null?void 0:r.id,id:o,ref:t.optionsRef,role:"listbox"},x=oe(e,["hold"]);return H({ourProps:P,theirProps:x,slot:S,attrs:n,slots:l,features:W.RenderStrategy|W.Static,visible:i.value,name:"ComboboxOptions"})}}}),Ze=M({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{slots:n,attrs:l,expose:s}){let t=z("ComboboxOption"),o=`headlessui-combobox-option-${U()}`,a=O(null);s({el:a,$el:a});let i=_(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===o:!1),v=_(()=>B(t.mode.value,{[0]:()=>t.compare(g(t.value.value),g(e.value)),[1]:()=>g(t.value.value).some(x=>t.compare(g(x),g(e.value)))})),c=_(()=>({disabled:e.disabled,value:e.value,domRef:a}));de(()=>t.registerOption(o,c)),ge(()=>t.unregisterOption(o)),q(()=>{t.comboboxState.value===0&&(!i.value||t.activationTrigger.value!==0&&D(()=>{var x,I;return(I=(x=C(a))==null?void 0:x.scrollIntoView)==null?void 0:I.call(x,{block:"nearest"})}))});function r(x){if(e.disabled)return x.preventDefault();t.selectOption(o),t.mode.value===0&&t.closeCombobox()}h(r,"a$1");function y(){if(e.disabled)return t.goToOption(R.Nothing);t.goToOption(R.Specific,o)}h(y,"C");function S(){e.disabled||i.value||t.goToOption(R.Specific,o,0)}h(S,"O");function P(){e.disabled||!i.value||t.optionsPropsRef.value.hold||t.goToOption(R.Nothing)}return h(P,"y"),()=>{let{disabled:x}=e,I={active:i.value,selected:v.value,disabled:x},G={id:o,ref:a,role:"option",tabIndex:x===!0?void 0:-1,"aria-disabled":x===!0?!0:void 0,"aria-selected":v.value,disabled:void 0,onClick:r,onFocus:y,onPointermove:S,onMousemove:S,onPointerleave:P,onMouseleave:P};return H({ourProps:G,theirProps:e,slot:I,attrs:l,slots:n,name:"ComboboxOption"})}}});const Ke={class:"flex justify-between"},Je={class:"relative mt-1"},Qe={class:"mx-3"},fe=M({__name:"Combobox",props:["options","label","keys","required","errors"],setup(e){const n=e,l=O(""),s=O({}),t=_(()=>l.value===""?n.options:n.options.filter(o=>{if(o.first_name.toLowerCase().includes(l.value.toLowerCase())||o.last_name.toLowerCase().includes(l.value.toLowerCase()))return o}));return(o,a)=>(L(),$(te,null,[N(T($e),{as:"div",modelValue:s.value,"onUpdate:modelValue":[a[1]||(a[1]=i=>s.value=i),a[2]||(a[2]=i=>o.$emit("selected",s.value))],class:"m-2"},{default:j(()=>[E("div",Ke,[N(re,{for:e.label},{default:j(()=>[ie(J(e.label),1)]),_:1},8,["for"]),e.required?(L(),Q(re,{key:0,class:"text-sm text-gray-400"},{default:j(()=>[ie(" Required ")]),_:1})):X("",!0)]),E("div",Je,[N(T(Ue),{class:"w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm",onChange:a[0]||(a[0]=i=>l.value=i.target.value),autocomplete:"off","display-value":i=>Object.keys(i).length!==0?i.first_name+" "+i.last_name:""},null,8,["display-value"]),N(T(qe),{class:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"},{default:j(()=>[N(T(Re),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})]),_:1}),T(t).length>0?(L(),Q(T(We),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:j(()=>[(L(!0),$(te,null,we(T(t),i=>(L(),Q(T(Ze),{value:i,as:"template"},{default:j(({active:v,selected:c})=>[E("li",{class:Y(["relative cursor-default select-none py-2 pl-3 pr-9",v?"bg-orange-600 text-white":"text-gray-900"])},[E("span",{class:Y(["block truncate",c&&"font-semibold"])},J(i.first_name)+" "+J(i.last_name),3),c?(L(),$("span",{key:0,class:Y(["absolute inset-y-0 right-0 flex items-center pr-4",v?"text-white":"text-orange-600"])},[N(T(Fe),{class:"h-5 w-5","aria-hidden":"true"})],2)):X("",!0)],2)]),_:2},1032,["value"]))),256))]),_:1})):X("",!0)])]),_:1},8,["modelValue"]),E("div",Qe,[N(ye,{errors:e.errors},null,8,["errors"])])],64))}});fe.__docgenInfo={exportName:"default",displayName:"Combobox",description:"",tags:{},props:[{name:"options",type:{name:"undefined"}},{name:"label",type:{name:"undefined"}},{name:"keys",type:{name:"undefined"}},{name:"required",type:{name:"undefined"}},{name:"errors",type:{name:"undefined"}}],events:[{name:"selected"}]};const it={parameters:{storySource:{source:`import Combobox from "@/components/Form/Combobox.vue"

export default {
    title: "Form/Combobox",
    component: "Combobox",
}

const Template = (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<Combobox v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  label: "Select a Driver",
  errors: "This is an error.",
  required: false,
  options: [
    {"id":17,"first_name":"Alexander","last_name":"Albon","number":23,"birthday":"1996-03-23","constructor_id":10,"country":"Thailand","position_last_season":17,"championship_points":0,"is_rookie":0,"new_to_constructor":0,"GPs_entered":345,"podiums":103,"all_time_wins":21,"number_of_times_picked":0,"profile_image":"/assets/drivers/Albon.jpg","bio":"Born in London but racing under the flag of Thailand, Alexander Albon\u2019s first word was in fact Italian. That word was Ferrari \u2013 though it was with another Italian team that he got his big F1 break. <br><br>\\n\\nIdolising Michael Schumacher and dreaming of one day racing in Formula 1, the junior Albon was pipped to the 2016 GP3 title by a certain Charles Leclerc. He then left his great friendship with George Russell trackside as he took the 2018 Formula 2 title fight down to the wire.<br><br>\\n\\nGraduating to the F1 big league along with yet another contemporary \u2013 Lando Norris \u2013 in 2019, Albon did his talking on track with Toro Rosso in the opening races, earning a mid-season promotion to Red Bull Racing.<br><br>\\n\\nA stylish over-taker with a championship mentality, Albon was unfazed by partnering Max Verstappen for the second half of his rookie season, taking top-six finishes in eight of his nine 2019 races with Red Bull.<br><br>\\n\\nStaying in touch with the future champion proved tougher in 2020 and Red Bull dropped him from their race line-up. Crucially, though, Albon was retained as test and reserve driver, keeping him very much on team bosses\u2019 radar, leading to his 2022 return to the grid with Williams.<br><br>\\n\\nLaidback and cheerful with a cheeky grin, the Thai racer is popular among his peers \u2013 not always easy in motorsport\u2019s cauldron of competition \u2013 but you don\u2019t succeed in Formula 1 by being popular. Albon\u2019s challenge now is a big one \u2013 to make the most of a rare second F1 opportunity.\\n","created_at":"2022-05-05T02:55:44.000000Z","updated_at":null},
    {"id":10,"first_name":"Fernando","last_name":"Alonso","number":14,"birthday":"1981-07-29","constructor_id":5,"country":"Spain","position_last_season":10,"championship_points":0,"is_rookie":0,"new_to_constructor":0,"GPs_entered":329,"podiums":97,"all_time_wins":32,"number_of_times_picked":0,"profile_image":"/assets/drivers/Alonso.jpg","bio":"Michael Schumacher was the undisputed king of Formula 1 in the early 2000s, picking up wins and championships at a rate that was simply unheard of at the time. It was going to take someone very special to topple the Ferrari legend from his throne \u2013 and that it was Fernando Alonso who did it, tells you all you need to know about the Spaniard. <br><br>\\n\\nFiercely competitive, Alonso is not shy about his talent, rating himself as 9/10 \u201Cin everything\u201D, and few in the know would disagree, with his performances in F1 characterised by blistering speed, brilliant tactical thinking, exemplary race craft, a razor-sharp eye for detail and a relentless determination to win.<br><br>\\n\\nA serial record breaker in his early days, he was \u2013 at one time \u2013 F1\u2019s youngest polesitter, race winner, world champion and double world champion as he gobbled up success with the Renault team. Even Alonso couldn\u2019t continue that amazing run in his later career though, failing to add another title to his collection despite spells at McLaren and Ferrari.<br><br>\\n\\nBut after two years away from Formula 1 racing \u2013 and with two Le Mans wins in his pocket \u2013 Alonso returned with Alpine in 2021. And he has unfinished business with F1\u2026","created_at":"2022-05-05T02:55:44.000000Z","updated_at":null},
    {"id":3,"first_name":"Valtteri","last_name":"Bottas","number":77,"birthday":"1989-08-28","constructor_id":8,"country":"Finland","position_last_season":3,"championship_points":0,"is_rookie":0,"new_to_constructor":0,"GPs_entered":171,"podiums":64,"all_time_wins":9,"number_of_times_picked":0,"profile_image":"/assets/drivers/Bottas.jpg","bio":"Learning his craft on Finnish roads of ice and snow, he was born to be a Grand Prix racer.<br><br>\\n\\nBottas explains that if you can drive on the frozen roads of his homeland then you can drive anywhere. Then there\u2019s the Finnish mentality \u2013reserved, diligent and calm the fast lane of F1 doesn\u2019t faze him.<br><br>\\n\\nMaking his F1 debut with Williams in 2013, Bottas soon became part of the family. Points and podiums followed with the reliable racer even amassing the most points without a win, a record he resented but that showcased his ability. The fact the Finn was such a points machine saw him suddenly promoted to the most coveted seat in F1 - Nico Rosberg\u2019s vacant championship-winning seat at Mercedes.<br><br>\\n\\nBottas blossomed at the Silver Arrows in 2017, unleashing his pace to clock up personal pole positions and victories as well as a team championship for the famous Mercedes marque alongside Lewis Hamilton. He even tied with Hamilton and Sebastian Vettel with 13 podiums.<br><br>\\n\\nFor a shy guy, it brought a confidence boost and a new swagger \u2013 albeit in a very demur Finnish fashion. He would need all that confidence in 2018 \u2013 a season Bottas described as his worst in F1, as he took zero wins to Hamilton\u2019s 11. That, though, was a reflection more of his team mate\u2019s brilliance than of any shortcomings on his own part.<br><br>\\n\\nBottas stepped it up a level in 2019, four victories securing a convincing second in the championship behind Hamilton, but that dropped to two wins to his team mate's 11 in 2020 and then just one in 2021, prompting Mercedes to drop him after five seasons.<br><br>\\n\\nFor 2022 he starts a new chapter in his F1 career, replacing compatriot Kimi Raikkonen to lead an all-new line-up at Alfa Romeo, where he is charged with taking Chinese rookie Zhou Guanyu under his wing.","created_at":"2022-05-05T02:55:44.000000Z","updated_at":null}
  ]
}`,locationsMap:{primary:{startLoc:{col:17,line:8},endLoc:{col:2,line:12},startBody:{col:17,line:8},endBody:{col:2,line:12}}}}},title:"Form/Combobox",component:"Combobox"},Xe=h(e=>({components:{Combobox:fe},setup:()=>({args:e}),template:'<Combobox v-bind="args" />'}),"Template"),Ye=Xe.bind({});Ye.args={label:"Select a Driver",errors:"This is an error.",required:!1,options:[{id:17,first_name:"Alexander",last_name:"Albon",number:23,birthday:"1996-03-23",constructor_id:10,country:"Thailand",position_last_season:17,championship_points:0,is_rookie:0,new_to_constructor:0,GPs_entered:345,podiums:103,all_time_wins:21,number_of_times_picked:0,profile_image:"/assets/drivers/Albon.jpg",bio:`Born in London but racing under the flag of Thailand, Alexander Albon\u2019s first word was in fact Italian. That word was Ferrari \u2013 though it was with another Italian team that he got his big F1 break. <br><br>

Idolising Michael Schumacher and dreaming of one day racing in Formula 1, the junior Albon was pipped to the 2016 GP3 title by a certain Charles Leclerc. He then left his great friendship with George Russell trackside as he took the 2018 Formula 2 title fight down to the wire.<br><br>

Graduating to the F1 big league along with yet another contemporary \u2013 Lando Norris \u2013 in 2019, Albon did his talking on track with Toro Rosso in the opening races, earning a mid-season promotion to Red Bull Racing.<br><br>

A stylish over-taker with a championship mentality, Albon was unfazed by partnering Max Verstappen for the second half of his rookie season, taking top-six finishes in eight of his nine 2019 races with Red Bull.<br><br>

Staying in touch with the future champion proved tougher in 2020 and Red Bull dropped him from their race line-up. Crucially, though, Albon was retained as test and reserve driver, keeping him very much on team bosses\u2019 radar, leading to his 2022 return to the grid with Williams.<br><br>

Laidback and cheerful with a cheeky grin, the Thai racer is popular among his peers \u2013 not always easy in motorsport\u2019s cauldron of competition \u2013 but you don\u2019t succeed in Formula 1 by being popular. Albon\u2019s challenge now is a big one \u2013 to make the most of a rare second F1 opportunity.
`,created_at:"2022-05-05T02:55:44.000000Z",updated_at:null},{id:10,first_name:"Fernando",last_name:"Alonso",number:14,birthday:"1981-07-29",constructor_id:5,country:"Spain",position_last_season:10,championship_points:0,is_rookie:0,new_to_constructor:0,GPs_entered:329,podiums:97,all_time_wins:32,number_of_times_picked:0,profile_image:"/assets/drivers/Alonso.jpg",bio:`Michael Schumacher was the undisputed king of Formula 1 in the early 2000s, picking up wins and championships at a rate that was simply unheard of at the time. It was going to take someone very special to topple the Ferrari legend from his throne \u2013 and that it was Fernando Alonso who did it, tells you all you need to know about the Spaniard. <br><br>

Fiercely competitive, Alonso is not shy about his talent, rating himself as 9/10 \u201Cin everything\u201D, and few in the know would disagree, with his performances in F1 characterised by blistering speed, brilliant tactical thinking, exemplary race craft, a razor-sharp eye for detail and a relentless determination to win.<br><br>

A serial record breaker in his early days, he was \u2013 at one time \u2013 F1\u2019s youngest polesitter, race winner, world champion and double world champion as he gobbled up success with the Renault team. Even Alonso couldn\u2019t continue that amazing run in his later career though, failing to add another title to his collection despite spells at McLaren and Ferrari.<br><br>

But after two years away from Formula 1 racing \u2013 and with two Le Mans wins in his pocket \u2013 Alonso returned with Alpine in 2021. And he has unfinished business with F1\u2026`,created_at:"2022-05-05T02:55:44.000000Z",updated_at:null},{id:3,first_name:"Valtteri",last_name:"Bottas",number:77,birthday:"1989-08-28",constructor_id:8,country:"Finland",position_last_season:3,championship_points:0,is_rookie:0,new_to_constructor:0,GPs_entered:171,podiums:64,all_time_wins:9,number_of_times_picked:0,profile_image:"/assets/drivers/Bottas.jpg",bio:`Learning his craft on Finnish roads of ice and snow, he was born to be a Grand Prix racer.<br><br>

Bottas explains that if you can drive on the frozen roads of his homeland then you can drive anywhere. Then there\u2019s the Finnish mentality \u2013reserved, diligent and calm the fast lane of F1 doesn\u2019t faze him.<br><br>

Making his F1 debut with Williams in 2013, Bottas soon became part of the family. Points and podiums followed with the reliable racer even amassing the most points without a win, a record he resented but that showcased his ability. The fact the Finn was such a points machine saw him suddenly promoted to the most coveted seat in F1 - Nico Rosberg\u2019s vacant championship-winning seat at Mercedes.<br><br>

Bottas blossomed at the Silver Arrows in 2017, unleashing his pace to clock up personal pole positions and victories as well as a team championship for the famous Mercedes marque alongside Lewis Hamilton. He even tied with Hamilton and Sebastian Vettel with 13 podiums.<br><br>

For a shy guy, it brought a confidence boost and a new swagger \u2013 albeit in a very demur Finnish fashion. He would need all that confidence in 2018 \u2013 a season Bottas described as his worst in F1, as he took zero wins to Hamilton\u2019s 11. That, though, was a reflection more of his team mate\u2019s brilliance than of any shortcomings on his own part.<br><br>

Bottas stepped it up a level in 2019, four victories securing a convincing second in the championship behind Hamilton, but that dropped to two wins to his team mate's 11 in 2020 and then just one in 2021, prompting Mercedes to drop him after five seasons.<br><br>

For 2022 he starts a new chapter in his F1 career, replacing compatriot Kimi Raikkonen to lead an all-new line-up at Alfa Romeo, where he is charged with taking Chinese rookie Zhou Guanyu under his wing.`,created_at:"2022-05-05T02:55:44.000000Z",updated_at:null}]};const rt=["Primary"];export{Ye as Primary,rt as __namedExportsOrder,it as default};
//# sourceMappingURL=Combobox.stories.47365ebe.js.map
