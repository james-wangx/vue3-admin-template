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
    // 不可以再访问 login
    if (to.path === '/login') {
      next('/')
    } else {
      // 如果 token 已存在，直接跳转
      if (username) {
        next()
        // 如果 token 不存在，重新获取用户信息 token
      } else {
        await userStore
          .getUserInfo()
          .then(() => next())
          // token 过期，获取不到用户信息
          // 用户手动修改本地 token
          .catch(async () => {
            await userStore
              .logout()
              .then(async () =>
                next({ path: '/login', query: { redirect: to.path } }),
              )
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
