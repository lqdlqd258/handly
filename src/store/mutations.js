const mutations = {
        updatauserName(state,userName){
          state.userName = userName;
          sessionStorage.setItem('userName',userName);
        },
        updatatoken(state,token){
          state.token = token;
          sessionStorage.setItem('token',token);
        },
        updatasystemTime(state,syetemTime){
          state.syetemTime = syetemTime;
        },
        updatarouter(state,router){
          state.router = router;
          sessionStorage.setItem('router',JSON.stringify(router));
        }
}
export default mutations