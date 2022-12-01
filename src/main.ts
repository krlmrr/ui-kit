import "./css/app.css"
import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText

createInertiaApp({
  title: (title) => `${title} : ${appName}`,

  setup({ el, app, props, plugin }) {
    return createApp({ render: () => h(app, props) })
      .use(plugin)
      .component('Link', Link)
      .component('Header', Head)
      .mount(el)
  }
})