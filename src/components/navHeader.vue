<!--  -->
<template>
    <el-header>
      <div class="header-img"><img src="../assets/img/navHeader/home_logo .jpg" alt=""></div>
      <div class="header-user"><i class="el-icon-mobile-phone"></i><span>{{username}}</span></div>
      <div class="header-syetem">
            <span>系统运行时间:</span>
            <span>60D 18:23:16</span>
      </div>
    </el-header>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
    };
  },
  computed:{
    username(){
      return this.$store.state.userName;
    }
  },
  mounted(){
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      axios.get('/api/user',null).then((respone)=>{
        let userName = respone.data.result[0].userName;
        console.log(this);
        this.$store.commit("updatauserName",userName);
      });
    }
  }
}

</script>
<style lang='scss' scoped>
 @import '../assets/css/components/navHeader';
</style>