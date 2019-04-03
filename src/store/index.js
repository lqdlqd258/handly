//vuex 多个页面引用 而且 会经常修改(适用) 配合在各个组建中使用computed实时改变
const store = {
    state:{
       userName:'',
       token:'123',
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
  }
export default store