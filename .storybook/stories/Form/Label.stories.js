import Label from "@/components/Form/Label.vue"

export default {
    title: "Form/Label",
    component: "Label",
}

const Template = (args) => ({
    components: { Label },
    setup: () => ({ args }),
    template: '<Label v-bind="args"></Label>'
})

export const Primary = Template.bind({})
Primary.args = {
  
  value: "Value",
}