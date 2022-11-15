import InputError from "./InputError.vue"

export default {
    title: "Feedback/InputError",
    component: "InputError",
    
}

const Template = (args) => ({
    components: { InputError },
    setup: () => ({ args }),
    template: '<InputError v-bind="args"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  errors: "This is what an alert looks like.",
}