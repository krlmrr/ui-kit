import Button from "./Button.vue"

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
}