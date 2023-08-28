import { App, Component } from 'vue'

import SvgIcon from '@/components/SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components: { [propName: string]: Component } = { SvgIcon }

export default {
  install(app: App<Element>) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
