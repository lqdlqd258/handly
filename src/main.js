import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// import store from '@/store/index.js'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

// const store = new Vuex.Store(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  stores,
  router,
  components: { App },
  template: '<App/>'
})
