import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
/*vuex*/
import state from '@/store/index'
import mutations from '@/store/mutations'

import Vuex from 'vuex'
/*引入公共样式*/
import './assets/css/main.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
export const store = new Vuex.Store({
    state,
    mutations
})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
