import Input from "@/components/Form/Input.vue"

export default {
    title: "Form/Input",
    component: "Input",
}

const Template = (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" v-model="args.value" />'
})

export const Primary = Template.bind({})
Primary.args = {
  label: "Name",
  value: "",
  placeholder: "William Never",
  required: false,
  errors:'This is an error.'
}