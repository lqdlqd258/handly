import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import state from '@/store/index'
import mutations from '@/store/mutations'
import Vuex from 'vuex'

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
