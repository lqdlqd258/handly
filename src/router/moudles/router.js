import index from '@/views/index'
import login from '@/views/login/login'
const routers = {
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
}

export default routers