import { App, Component } from 'vue'

import SvgIcon from '@/components/SvgIcon/index.vue'

const components: { [propName: string]: Component } = { SvgIcon }

export default {
  install(app: App<Element>) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  },
}
