import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import detail from './pages/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: {
        name: 'index'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})