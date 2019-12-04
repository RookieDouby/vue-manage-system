// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Cookie from 'js-cookie'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
require('./mock')

import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'

import './permission.js' //router权限控制

Vue.use(Element, {
  size: Cookie.get('size') || 'medium',
})

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
