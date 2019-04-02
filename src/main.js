// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
//vuex 多个页面引用 而且 会经常修改(适用) 配合在各个组建中使用computed实时改变
const store = new Vuex.Store({
  state:{
     userName:'',
     token:'',
     syetemTime:'60D 18:23:16'
  },
  mutations:{
    updatauserName(state,userName){
      state.userName = userName;
    },
    updatasystemTime(state,syetemTime){
      state.syetemTime = syetemTime;
    },
    updatatoken(state,token){
      state.token = token;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
