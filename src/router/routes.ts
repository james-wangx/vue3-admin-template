import type { RouteRecordRaw } from 'vue-router'

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      show: false,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout',
      show: true,
    },
    children: [
      {
        path: '/home',
        component: import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          show: true,
          icon: 'House',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      show: false,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
    name: 'any',
    meta: {
      title: '任意路由',
      show: false,
    },
  },
]
