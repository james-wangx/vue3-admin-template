import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'

import 'element-plus/dist/index.css'

import App from './App.vue'
import GlobalComponent from '@/components/index.ts'

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn }).use(GlobalComponent)
app.mount('#app')
