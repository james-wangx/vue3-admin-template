import { App } from 'vue'

import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'

const allGlobalComponents = { SvgIcon, Pagination }

export default {
  install(app: App<Element>) {
    Object.keys(allGlobalComponents).forEach((e) => {
      app.component(e, allGlobalComponents[e])
    })
  },
}
