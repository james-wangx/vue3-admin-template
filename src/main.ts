import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'

import 'element-plus/dist/index.css'

import App from '@/App.vue'
import GlobalComponent from '@/components/index.ts'
import router from '@/router'
import pinia from '@/store'
import '@/permission.ts'

import '@/styles/index.scss'

const app = createApp(App)

app
  .use(ElementPlus, { locale: zhCn })
  .use(GlobalComponent)
  .use(router)
  .use(pinia)
app.mount('#app')
