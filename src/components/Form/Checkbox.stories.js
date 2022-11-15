import Checkbox from "./Checkbox.vue"

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
}