import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login/login'
import {store} from '@/main.js'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
      {
        path: '/',
        name: 'login',
        component: login
      },
      {
        path: '/index',
        name: 'index',
        meta:{
          requireAuth:true
        },
        component: index
      }
    ]
})
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
      if(store.state.token){
          next();
      }else{
          next({path:'/'});
      }
    }else{
      next();
    }
})
export default router

