import Alert from "@/components/Feedback/Alert.vue"

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
}