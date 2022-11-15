var r=Object.defineProperty;var n=(t,e)=>r(t,"name",{value:e,configurable:!0});import{o as a,a as s,r as l}from"./vue.esm-bundler.47a8975e.js";const i=["type"],o={__name:"Button",props:{type:{type:String,default:"submit"}},setup(t){return(e,c)=>(a(),s("button",{type:t.type,class:"my-2 mx-2 inline-flex text-center items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[l(e.$slots,"default",{class:"text-center"})],8,i))}};o.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'submit'"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]}]};const y={parameters:{storySource:{source:`import Button from "@/components/Form/Button.vue"

export default {
    title: "Form/Button",
    component: "Button",
}

const Template = (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args"> {{ args.label }} </Button>'
})

export const Primary = Template.bind({})
Primary.args = {
  type: "",
  label: 'Submit'
}`,locationsMap:{primary:{startLoc:{col:17,line:8},endLoc:{col:2,line:12},startBody:{col:17,line:8},endBody:{col:2,line:12}}}}},title:"Form/Button",component:"Button"},u=n(t=>({components:{Button:o},setup:()=>({args:t}),template:'<Button v-bind="args"> {{ args.label }} </Button>'}),"Template"),p=u.bind({});p.args={type:"",label:"Submit"};const g=["Primary"];export{p as Primary,g as __namedExportsOrder,y as default};
//# sourceMappingURL=Button.stories.4fd5344f.js.map
