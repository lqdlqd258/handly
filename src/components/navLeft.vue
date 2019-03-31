<!--  -->
<template>
   <el-aside>
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-setting"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <!--  -->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">智慧通讯</span>
          </template>
          <el-submenu index="2-1">
            <span slot="title">分机信息</span>
            <el-menu-item index="2-1-1">分机</el-menu-item>
            <el-menu-item index="2-1-2">分组</el-menu-item>
            <el-menu-item index="2-1-3">话机</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-2-1">通讯录</el-menu-item>
          <el-submenu index="2-3">
            <span slot="title">高级功能</span>
            <el-menu-item index="2-3-1">通话录音</el-menu-item>
            <el-menu-item index="2-3-2">呼叫转移</el-menu-item>
            <el-menu-item index="2-3-3">叫醒服务</el-menu-item>
            <el-menu-item index="2-3-4">短信</el-menu-item>
          </el-submenu>
          <el-submenu index="2-4">
            <span slot="title">通话统计</span>
            <el-menu-item index="2-4-1">通话记录</el-menu-item>
            <el-menu-item index="2-4-2">通话计费</el-menu-item>
          </el-submenu>
        </el-submenu>
        <!--  -->
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">智慧物联</span>
          </template>
          <el-menu-item index="3-1">中控主机</el-menu-item>
          <el-menu-item index="3-2">智慧设备</el-menu-item>
          <el-menu-item index="3-3">红外设备</el-menu-item>
          <el-menu-item index="3-4">数据监控</el-menu-item>
        </el-submenu>
        <!--  -->
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">智慧行政</span>
          </template>
          <el-menu-item index="4-1">助理资料</el-menu-item>
          <el-submenu index="4-2">
            <span slot="title">考勤</span>
            <el-menu-item index="4-2-1">考勤规则</el-menu-item>
            <el-menu-item index="4-2-2">考勤记录</el-menu-item>
            <el-menu-item index="4-2-3">考勤统计</el-menu-item>
          </el-submenu>
          <el-submenu index="4-3">
            <span slot="title">私人助理</span>
            <el-menu-item index="4-3-1">功能设置</el-menu-item>
            <el-menu-item index="4-3-2">问答助手</el-menu-item>
            <el-menu-item index="4-3-3">行程列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4-4">
            <span slot="title">人员管理</span>
            <el-menu-item index="4-4-1">员工库</el-menu-item>
            <el-menu-item index="4-4-2">来访记录</el-menu-item>
          </el-submenu>
        </el-submenu>
        <!--  -->
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">统计报表</span>
          </template>
          <el-menu-item index="5-1">通话统计报表</el-menu-item>
        </el-submenu>
        <!--  -->
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">系统管理</span>
          </template>
          <el-submenu index="6-1">
            <span slot="title">设备</span>
            <el-menu-item index="6-1-1">IPPBX运行状态</el-menu-item>
          </el-submenu>
          <el-menu-item index="6-2">用户管理</el-menu-item>
          <el-menu-item index="6-3">网路与地址</el-menu-item>
          <el-submenu index="6-4">
            <span slot="title">安全中心</span>
            <el-menu-item index="6-4-1">IP黑名单那</el-menu-item>
            <el-menu-item index="6-4-2">IP白名单</el-menu-item>
          </el-submenu>
        </el-submenu>
        <!--  -->
      </el-menu>
   </el-aside>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    };
  }
}

</script>
<style lang='scss' scoped>
 @import '../assets/css/components/navLeft';
</style>