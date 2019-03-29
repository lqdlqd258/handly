<!--  -->
<template>
  <div class="home">
      <nav-Header></nav-Header>
      <nav-Left></nav-Left>
      <container></container>
  </div>
</template>
<script>
import navHeader from '@/components/navHeader'
import navLeft from '@/components/navLeft'
import container from '@/components/container'
export default {
  data () {
    return {
    };
  },
  components:{
      navHeader,
      navLeft,
      container
  }
}

</script>
<style lang="scss">
 @import '../../assets/css/home/home';
</style>