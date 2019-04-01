<!--  -->
<template>
  <div>
        <nav-Header></nav-Header>
        <el-container>
          <nav-Left></nav-Left>
          <el-main>Main</el-main>
        </el-container>
  </div>
</template>
<script>
import navHeader from '@/components/navHeader'
import navLeft from '@/components/navLeft'
import container from '@/components/container'
import axios from 'axios'
export default {
  data () {
    return {
      routerList:[]
    };
  },
  components:{
      navHeader,
      navLeft,
      container
  },
  mounted(){
      this.getRouters();
  },
  methods:{
      getRouters(){
        axios.get("/api/Routers").then((respone)=>{
            var res = respone.data;
            this.routerList = res.result;
            console.log(this.routerList);
        });
      }
  }
}

</script>
<style lang="scss">
 @import '../assets/css/index/index';
</style>