import { h } from 'vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { AppstoreOutlined, CrownOutlined } from '@ant-design/icons-vue';

export const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    meta: {
      keepAlive: true,
      label: '首页',
      icon: () => h(AppstoreOutlined),
      type: '',
      visible: true
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      keepAlive: false,
      label: '登录',
      visible: false
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/other',
    name: 'other',
    meta: {
      keepAlive: true,
      label: '其它',
      icon: () => h(CrownOutlined),
      type: '',
      visible: true
    },
    component: () => import('@/views/other/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to) => {
  const title = to.meta.title as string;
  if (title) {
    window.document.title = title
  }
});

export default router;