//vuex 多个页面引用 而且 会经常修改(适用) 配合在各个组建中使用computed实时改变
const state = {
       userName:window.sessionStorage.getItem('userName'),
       token:window.sessionStorage.getItem('token'),
       syetemTime:'60D 18:23:16',
       router:window.sessionStorage.getItem('router')
  }
export default state