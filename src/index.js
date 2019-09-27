/*
入口JS
*/
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import store from './store'
import router from './router'

import './assets/css/reset.css'
import './assets/css/common.css'
import 'element-ui/lib/theme-chalk/index.css'
import common from './assets/js/common'

Vue.prototype.$common = common

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})