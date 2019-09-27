import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound/Index'
import Login from '../views/Login/Index'
import Main from '../views/Main/Index'
import Home from '../views/Home/Index'
import GoodsList from '../views/Goods/GoodsList/Index'

Vue.use(VueRouter)

// 解决报错问题
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '',
      redirect: './main'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'goodslist',
          component: GoodsList
        },
        { path: '*', component: NotFound }
      ]
    }
  ]
})