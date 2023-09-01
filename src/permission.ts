import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useUserStore from '@/store/modules/user.ts'
import pinia from '@/store'
import setting from '@/setting.ts'

const userStore = useUserStore(pinia)
NProgress.configure({ showSpinner: false })

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  const token = userStore.token
  const username = userStore.username
  NProgress.start()
  document.title = `${setting.title}-${to.meta.title}`

  // 已经登录
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (username) {
        next()
      } else {
        await userStore
          .getUserInfo()
          .then(() => next())
          // token 过期，获取不到用户信息
          // 用户手动修改本地 token
          .catch(() => {
            userStore.logout()
            next({ path: '/login', query: { redirect: to.path } })
          })
      }
    }
    // 没有登录
  } else {
    if (to.path === '/login') {
      next()
    } else {
      // 访问其它非 login 路由
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

// 全局后置守卫
router.afterEach(() => {
  NProgress.done()
})
