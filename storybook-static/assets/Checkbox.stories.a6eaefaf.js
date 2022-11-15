var m=Object.defineProperty;var s=(e,o)=>m(e,"name",{value:o,configurable:!0});import{d as i,f as p,o as d,a as u,e as b,g as x,i as g,t as f,w as h,j as k,u as C,b as y,k as _}from"./vue.esm-bundler.47a8975e.js";import{_ as V}from"./Label.f617fa7d.js";const v={class:"flex items-center"},r=i({__name:"Checkbox",props:{label:String,modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:o}){const l=e,t=p({get(){return l.modelValue},set(a){o("update:modelValue",a)}});return(a,n)=>(d(),u("div",v,[b(V,null,{default:x(()=>[g(f(e.label),1)]),_:1}),h(y("input",{type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=c=>_(t)?t.value=c:null),class:"mx-3 rounded border-gray-300 text-orange-600 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"},null,512),[[k,C(t)]])]))}});r.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"modelValue",type:{name:"boolean"}}],events:[{name:"update:modelValue"}]};const T={parameters:{storySource:{source:`import Checkbox from "@/components/Form/Checkbox.vue"

export default {
    title: "Form/Checkbox",
    component: "Checkbox",
}

const Template = (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: '<Checkbox v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  label: "Label",
}`,locationsMap:{primary:{startLoc:{col:17,line:8},endLoc:{col:2,line:12},startBody:{col:17,line:8},endBody:{col:2,line:12}}}}},title:"Form/Checkbox",component:"Checkbox"},B=s(e=>({components:{Checkbox:r},setup:()=>({args:e}),template:'<Checkbox v-bind="args" />'}),"Template"),N=B.bind({});N.args={label:"Label"};const F=["Primary"];export{N as Primary,F as __namedExportsOrder,T as default};
//# sourceMappingURL=Checkbox.stories.a6eaefaf.js.map
