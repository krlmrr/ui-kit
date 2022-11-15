var U=Object.defineProperty;var i=(t,a)=>U(t,"name",{value:a,configurable:!0});import{n as b,p as T,f as g,d as y,x as O,z as j,u as d,l as k,h as V,F as A,o as H,B as Y,g as S,e as P,b as C,E as $,k as q,i as J,t as _}from"./vue.esm-bundler.47a8975e.js";import{_ as Q}from"./Label.f617fa7d.js";import{t as w,P as h,d as W,b as X,f as Z,V as ee,a as te,w as le,c as D,p as ae}from"./use-controllable.0c670013.js";let B=Symbol("DescriptionContext");function ne(){let t=k(B,null);if(t===null)throw new Error("Missing parent");return t}i(ne,"b$1");function oe({slot:t=b({}),name:a="Description",props:o={}}={}){let e=b([]);function n(l){return e.value.push(l),()=>{let r=e.value.indexOf(l);r!==-1&&e.value.splice(r,1)}}return i(n,"n"),T(B,{register:n,slot:t,name:a,props:o}),g(()=>e.value.length>0?e.value.join(" "):void 0)}i(oe,"P$1");let fe=y({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t,{attrs:a,slots:o}){let e=ne(),n=`headlessui-description-${w()}`;return O(()=>j(e.register(n))),()=>{let{name:l="Description",slot:r=b({}),props:u={}}=e,f=t,c={...Object.entries(u).reduce((m,[p,v])=>Object.assign(m,{[p]:d(v)}),{}),id:n};return h({ourProps:c,theirProps:f,slot:r.value,attrs:a,slots:o,name:l})}}}),L=Symbol("LabelContext");function E(){let t=k(L,null);if(t===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,E),a}return t}i(E,"p");function re({slot:t={},name:a="Label",props:o={}}={}){let e=b([]);function n(l){return e.value.push(l),()=>{let r=e.value.indexOf(l);r!==-1&&e.value.splice(r,1)}}return i(n,"r"),T(L,{register:n,slot:t,name:a,props:o}),g(()=>e.value.length>0?e.value.join(" "):void 0)}i(re,"K");let ve=y({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t,{slots:a,attrs:o}){let e=E(),n=`headlessui-label-${w()}`;return O(()=>j(e.register(n))),()=>{let{name:l="Label",slot:r={},props:u={}}=e,{passive:f,...c}=t,m={...Object.entries(u).reduce((p,[v,x])=>Object.assign(p,{[v]:d(x)}),{}),id:n};return f&&(delete m.onClick,delete c.onClick),h({ourProps:m,theirProps:c,slot:r,attrs:o,slots:a,name:l})}}}),F=Symbol("GroupContext"),se=y({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:a,attrs:o}){let e=b(null),n=re({name:"SwitchLabel",props:{onClick(){!e.value||(e.value.click(),e.value.focus({preventScroll:!0}))}}}),l=oe({name:"SwitchDescription"});return T(F,{switchRef:e,labelledby:n,describedby:l}),()=>h({theirProps:t,ourProps:{},slot:{},slots:a,attrs:o,name:"SwitchGroup"})}}),ie=y({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(t,{emit:a,attrs:o,slots:e,expose:n}){let l=k(F,null),r=`headlessui-switch-${w()}`,[u,f]=W(g(()=>t.modelValue),s=>a("update:modelValue",s),g(()=>t.defaultChecked));function c(){f(!u.value)}i(c,"c");let m=b(null),p=l===null?m:l.switchRef,v=X(g(()=>({as:t.as,type:o.type})),p);n({el:p,$el:p});function x(s){s.preventDefault(),c()}i(x,"k");function K(s){s.key===D.Space?(s.preventDefault(),c()):s.key===D.Enter&&ae(s.currentTarget)}i(K,"g");function R(s){s.preventDefault()}return i(R,"C"),()=>{let{name:s,value:G,...M}=t,z={checked:u.value},I={id:r,ref:p,role:"switch",type:v.value,tabIndex:0,"aria-checked":u.value,"aria-labelledby":l==null?void 0:l.labelledby.value,"aria-describedby":l==null?void 0:l.describedby.value,onClick:x,onKeyup:K,onKeypress:R};return V(A,[s!=null&&u.value!=null?V(Z,ee({features:te.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:u.value,name:s,value:G})):null,h({ourProps:I,theirProps:{...o,...le(M,["modelValue","defaultChecked"])},slot:z,attrs:o,slots:e,name:"Switch"})])}}});const ue={class:"text-sm text-gray-500 mx-1"},N=y({__name:"Toggle",props:{label:String,subtext:String,modelValue:Boolean},emits:["update:modelValue"],setup(t,{emit:a}){const o=t,e=g({get(){return o.modelValue},set(n){a("update:modelValue",n)}});return(n,l)=>(H(),Y(d(se),{as:"div",class:"flex items-center my-4 mx-4"},{default:S(()=>[P(d(ie),{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=r=>q(e)?e.value=r:null),class:$([d(e)?"bg-orange-600":"bg-gray-200","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"])},{default:S(()=>[C("span",{"aria-hidden":"true",class:$([d(e)?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])},null,2)]),_:1},8,["modelValue","class"]),P(Q,null,{default:S(()=>[J(_(t.label)+" ",1),C("span",ue,_(t.subtext),1)]),_:1})]),_:1}))}});N.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"subtext",type:{name:"string"}},{name:"modelValue",type:{name:"boolean"}}],events:[{name:"update:modelValue"}]};const ye={parameters:{storySource:{source:`import Toggle from "@/components/Form/Toggle.vue"

export default {
    title: "Form/Toggle",
    component: "Toggle",
}

const Template = (args) => ({
    components: { Toggle },
    setup: () => ({ args }),
    template: '<Toggle v-bind="args"></Toggle>'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Select a Driver',
  subtext: 'This is subtext'
}`,locationsMap:{primary:{startLoc:{col:17,line:8},endLoc:{col:2,line:12},startBody:{col:17,line:8},endBody:{col:2,line:12}}}}},title:"Form/Toggle",component:"Toggle"},pe=i(t=>({components:{Toggle:N},setup:()=>({args:t}),template:'<Toggle v-bind="args"></Toggle>'}),"Template"),ce=pe.bind({});ce.args={label:"Select a Driver",subtext:"This is subtext"};const he=["Primary"];export{ce as Primary,he as __namedExportsOrder,ye as default};
//# sourceMappingURL=Toggle.stories.ab13442c.js.map
