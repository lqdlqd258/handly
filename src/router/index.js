import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login/login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
    
  ]
})
