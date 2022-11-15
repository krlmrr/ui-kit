import Toggle from "@/components/Form/Toggle.vue"

export default {
    title: "Form/Toggle",
    component: "Toggle",
}

const Template = (args) => ({
    components: { Toggle },
    setup: () => ({ args }),
    template: '<Toggle v-bind="args"></Toggle>'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Select a Driver',
  subtext: 'This is subtext'
}