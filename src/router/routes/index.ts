import type { RouteRecordRaw } from 'vue-router';

/** 页面中的一些固定路由，错误页等 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/layouts/basic-layout/index.vue'),
    children: [],
  },
];
