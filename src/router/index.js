import Vue from 'vue'
import Router from 'vue-router'
import state from '@/store/index'
import routers from '@/router/moudles/router'

Vue.use(Router)

const router = new Router(
  routers
)
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
      if(state.token){
          next();
      }else{
          next({path:'/'});
      }
    }else{
      next();
    }
})
export default router

