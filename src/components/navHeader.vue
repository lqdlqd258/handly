<!--  -->
<template>
    <el-header>
      <div class="header-img">
        <!-- <img src="../assets/img/navHeader/home_logo .jpg" alt=""> -->
      </div>
      <div class="header-user">
        <el-dropdown>
          <span class="el-dropdown-link">
            <span><i class="el-icon-mobile-phone"></i></span><span v-text="userName"></span>
          </span>
          <el-dropdown-menu slot="dropdown" placement="10">
            <el-dropdown-item>更改头像</el-dropdown-item>
            <el-dropdown-item>更改密码</el-dropdown-item>
            <el-dropdown-item @click.native="dropOut">退出账号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header-syetem">
            <span>系统运行时间:</span>
            <span>60D 18:23:16</span>
      </div>
    </el-header>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    };
  },
  computed:{
    ...mapState(['userName'])
  },
  mounted(){
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      // axios.get('/api/user',null).then((respone)=>{
      //   let userName = respone.data.result[0].userName;
      //   console.log(respone);
      //   this.$store.commit("updatauserName",userName);
      // });
    },
    //退出登陆
    dropOut(){
      this.$store.state.token = null;
      this.$store.state.userName = null;
      sessionStorage.clear();
      this.$router.push({name:'login'});
    }
  }
}

</script>
<style lang='scss' scoped>
 @import '../assets/css/components/navHeader';
</style>