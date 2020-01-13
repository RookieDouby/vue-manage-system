import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
// import Dashboard from '@/views/dashboard/index.vue'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard', 
        component: resolve => require(['@/views/dashboard/'], resolve),
        name: 'Dashboard',
        meta: {title: 'dashboard'}
      },
      {
        path: '/collapse',
        component: resolve => require(['@/views/collapse/'], resolve)
      },
      {
        path: '/echarts',
        component: resolve => require(['@/views/echarts/'], resolve),
      },
      {
        path: '/upload',
        component: resolve => require(['@/views/upload/bigFileUpload'], resolve),
      },
    ]
  }
]

export default new Router({
  routes: constantRoutes
})
