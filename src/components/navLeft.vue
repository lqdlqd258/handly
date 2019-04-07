<!--  -->
<template>
  <div class="scroll-hidden-out">
   <el-aside>
      <el-menu default-active='homeindex' router @open="handleOpen" @close="handleClose">
        <el-menu-item v-for="(item,i) in navList" :key="i" v-if="!item.second" :index="item.path">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.navName}}</span>
        </el-menu-item>
         <el-submenu v-for="(item,i) in navList" :key="i" v-if="item.second" :index="'info-'+i">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.navName}}</span>
          </template>
          <div v-for="(sec,j) in item.second" :key="'info2-'+j">
          <el-submenu v-if="sec.third" :index="'info2-'+j">
            <span slot="title">{{sec.navName}}</span>
            <el-menu-item v-for="(thi,k) in sec.third" :key="'info-3'+k" :index="thi.path">{{thi.navName}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-if="!sec.third" :index="sec.path">{{sec.navName}}</el-menu-item>
          </div>
        </el-submenu>
      </el-menu>
   </el-aside>
   </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  created(){
    this.navList = this.$store.state.router;
    
  },
  methods:{
    handleOpen(index,indexPath){
      console.log('handleOpen',index,indexPath);
    },
    handleClose(index,indexPath){
      console.log('handleClose',index,indexPath);
    }
  }
}

</script>
<style lang='scss' scoped>
 @import '../assets/css/components/navLeft';
</style>