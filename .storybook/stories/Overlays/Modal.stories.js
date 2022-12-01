import Modal from "@/components/Overlays/Modal.vue"

export default {
    title: "Overlays/Modal",
    component: "Modal",
}

const Template = (args) => ({
    components: { Modal },
    setup: () => ({ args }),
    template: '<Modal v-bind="args" v-model="args.modalOpen"> {{ args.body }} </Modal>'
})

export const Primary = Template.bind({})
Primary.args = {
    title: "This is the modal title",
    modalOpen: true,
    body: "The longer the modal body is, the wider the modal should get, isn't that nice? If it gets wide enough, it should stop growing, and leave margin."
}