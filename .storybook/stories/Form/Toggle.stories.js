import Toggle from "@/components/Form/Toggle.vue"

export default {
    title: "Form/Toggle",
    component: "Toggle",
}

const Template = (args) => ({
    components: { Toggle },
    setup: () => ({ args }),
    template: '<Toggle v-bind="args" v-model="args.value"></Toggle>'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Select a Driver',
  subtext: 'This is subtext',
  value: false
}