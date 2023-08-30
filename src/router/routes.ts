import type { RouteRecordRaw } from 'vue-router'

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: { title: '登录', show: false },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    meta: { title: 'layout', show: true },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', show: true, icon: 'House' },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: { title: '404', show: false },
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: { title: '数据大屏', show: true, icon: 'DataAnalysis' },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: { title: '权限管理', icon: 'Lock', show: true },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'AclUser',
        meta: { title: '用户管理', show: true, icon: 'User' },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'AclRole',
        meta: { title: '角色管理', show: true, icon: 'UserFilled' },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'AclPermission',
        meta: { title: '菜单管理', show: true, icon: 'Menu' },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: { title: '商品管理', icon: 'Goods', show: true },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: { title: '品牌管理', show: true, icon: 'ShoppingCartFull' },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'ATTR',
        meta: { title: '属性管理', show: true, icon: 'ChromeFilled' },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'SPU管理',
        meta: { title: 'SPU 管理', show: true, icon: 'Calendar' },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'SKU',
        meta: { title: 'SKU 管理', show: true, icon: 'Orange' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
    name: 'any',
    meta: { title: '任意路由', show: false },
  },
]
