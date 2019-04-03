import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login/login'
// import store from '@/store/index.js'

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
    console.log(to.meta.requireAuth);
    if(to.meta.requireAuth){
      // console.log(store.state.token);
      next();
    }else{
      next();
    }
})
export default router

