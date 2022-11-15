import Input from "@/components/Form/Input.vue"

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
  require: false,
  errors:''
}