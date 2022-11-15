var l=Object.defineProperty;var o=(e,t)=>l(e,"name",{value:t,configurable:!0});import{o as n,a as s,b as r,d as i,e as d,u as c,t as p}from"./vue.esm-bundler.47a8975e.js";function m(e,t){return n(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z","clip-rule":"evenodd"})])}o(m,"render");const _={class:"rounded-md bg-red-100 border-red-500 border-solid border-2 p-4"},u={class:"flex"},h={class:"flex-shrink-0"},f={class:"ml-3"},g={class:"text-sm font-medium text-red-900"},a=i({__name:"Alert",props:{error:String},setup(e){return(t,b)=>(n(),s("div",_,[r("div",u,[r("div",h,[d(c(m),{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),r("div",f,[r("h3",g,p(e.error),1)])])]))}});a.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"error",type:{name:"string"}}]};const k={parameters:{storySource:{source:`import Alert from "@/components/Feedback/Alert.vue"

export default {
    title: "Feedback/Alert",
    component: "Alert",   
}

const Template = (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  error: "This is what an alert looks like.",
}`,locationsMap:{primary:{startLoc:{col:17,line:8},endLoc:{col:2,line:12},startBody:{col:17,line:8},endBody:{col:2,line:12}}}}},title:"Feedback/Alert",component:"Alert"},x=o(e=>({components:{Alert:a},setup:()=>({args:e}),template:'<Alert v-bind="args"/>'}),"Template"),A=x.bind({});A.args={error:"This is what an alert looks like."};const w=["Primary"];export{A as Primary,w as __namedExportsOrder,k as default};
//# sourceMappingURL=Alert.stories.558de55a.js.map
