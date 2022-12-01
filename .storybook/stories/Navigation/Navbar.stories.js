import Navbar from "@/components/Navigation/Navbar.vue"

export default {
    title: "Navigation/Navbar",
    component: "NavBar",
}

const Template = (args) => ({
    components: { Navbar },
    setup: () => ({ args }),
    template: '<Navbar v-bind="args"> {{ args.label }} </Navbar>'
})

export const Primary = Template.bind({})
Primary.args = {
  type: "",
  label: 'Submit'
}