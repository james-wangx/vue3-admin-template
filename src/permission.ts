import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// 全局后置守卫
router.afterEach(() => {
  NProgress.done()
})
