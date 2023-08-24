import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router/routes.ts'

const router = createRouter({
  // 路由模式 hash
  history: createWebHashHistory(),
  routes: routes,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
