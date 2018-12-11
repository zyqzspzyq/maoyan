import Vue from 'vue'
import App from './App.vue'
import './assets/icon/iconfont.css'

import '@styles/main.scss'
import '@libs/flexible'

import '@libs'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  
  render: h => h(App)
}).$mount('#app')