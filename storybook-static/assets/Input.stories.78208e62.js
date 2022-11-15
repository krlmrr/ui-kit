var h=Object.defineProperty;var i=(e,t)=>h(e,"name",{value:t,configurable:!0});import{d as x,f as u,o as d,a as _,b as a,e as p,g as c,i as f,t as I,u as n,B as N,C as v,w as V,H as S,k as B}from"./vue.esm-bundler.47a8975e.js";import{_ as y}from"./Label.f617fa7d.js";import{_ as w}from"./InputError.f1e4521d.js";const q={class:"my-2 mx-2"},T={class:"flex justify-between"},k={class:"mt-1"},C=["type","name","placeholder"],g=x({__name:"Input",props:{label:String,required:Boolean,placeholder:String|Number,modelValue:String|Number,errors:String,type:{type:String,default:"text"}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,s=u(()=>o.label.toLowerCase()),r=u({get(){return o.modelValue},set(l){t("update:modelValue",l)}});return(l,m)=>(d(),_("div",q,[a("div",T,[p(y,{for:n(s)},{default:c(()=>[f(I(e.label),1)]),_:1},8,["for"]),e.required?(d(),N(y,{key:0,class:"text-sm text-gray-400"},{default:c(()=>[f(" Required ")]),_:1})):v("",!0)]),a("div",k,[V(a("input",{class:"w-full border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm",type:e.type,name:n(s),"onUpdate:modelValue":m[0]||(m[0]=b=>B(r)?r.value=b:null),placeholder:e.placeholder},null,8,C),[[S,n(r)]])]),p(w,{errors:e.errors},null,8,["errors"])]))}});g.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"required",type:{name:"boolean"}},{name:"placeholder",type:{name:"String | Number",func:!0}},{name:"modelValue",type:{name:"String | Number",func:!0}},{name:"errors",type:{name:"string"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}}],events:[{name:"update:modelValue"}]};const R={parameters:{storySource:{source:`import Input from "@/components/Form/Input.vue"

export default {
    title: "Form/Input",
    component: "Input",
}

const Template = (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  label: "Name",
  placeholder: "William Never",
  required: false,
  errors:'This is an error.'
}`,locationsMap:{primary:{startLoc:{col:17,line:8},endLoc:{col:2,line:12},startBody:{col:17,line:8},endBody:{col:2,line:12}}}}},title:"Form/Input",component:"Input"},P=i(e=>({components:{Input:g},setup:()=>({args:e}),template:'<Input v-bind="args"/>'}),"Template"),D=P.bind({});D.args={label:"Name",placeholder:"William Never",required:!1,errors:"This is an error."};const W=["Primary"];export{D as Primary,W as __namedExportsOrder,R as default};
//# sourceMappingURL=Input.stories.78208e62.js.map
