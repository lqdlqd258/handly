//vuex 多个页面引用 而且 会经常修改(适用) 配合在各个组建中使用computed实时改变
const state = {
       userName:sessionStorage.getItem('userName'),
       token:sessionStorage.getItem('token'),
       syetemTime:'60D 18:23:16',
       router:JSON.parse(sessionStorage.getItem('router'))
  }
export default state