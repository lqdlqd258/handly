<template>
  <div id="container">
    <!--  -->
    <div class="inquire">
    <el-form :inline="true" :model="formInline" class="form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="部门"></el-input>
      </el-form-item>
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary blue" @click="onSubmit">查询</el-button>
        <el-button type="primary blue" @click="onSubmit">添加分机</el-button>
        <el-button type="primary red" @click="onSubmit">分机解绑</el-button>
      </el-form-item>
    </el-form>
    </div>
    <!-- #eef1f6 -->
  <div class="container">
   <el-table :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      fixed="left"
      prop="name"
      label="用户名">
    </el-table-column>
    <el-table-column
      prop="ext"
      label=" 分机">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码">
    </el-table-column>
    <el-table-column
      prop="pname"
      label="部门">
    </el-table-column>
    <el-table-column
      prop="app"
      label="APP账号">
    </el-table-column>
    <el-table-column
      prop="callRecording"
      label="通话录音">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope" >
        <el-button type="text" size="small edit" @click="dialog('编辑')">编辑</el-button>
        <el-button type="text" size="small delete" @click="dialog('删除')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <!-- 模态框 -->
  <modal :title="title" :dialogshow.sync="dialogshow">
     <span slot="main">
       <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <!--  -->
          <el-form ref="form" label-width="80px" label-position="left">
            <el-form-item label="分机号">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="用户名称">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input ></el-input>
            </el-form-item>
          </el-form>
          <!--  -->
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
          <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          角色管理
        </el-tab-pane>
      </el-tabs>
     </span>
  </modal>
  <!-- 分页 -->
      <div class="pagination">
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
  </div>
</template>

<script>
  import modal from '../../components/modal'
  export default {
    data() {
      return {
        tableData: [{
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        }],
        formInline: {
          user: '',
          region: ''
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        formInline: {
          user: '',
          region: ''
        },
        dialogshow:false,
        title:null,
         //弹窗标签页
        activeName:'first'
      }
      
    },
    components:{
      modal
    },
    methods:{
      //查询提交
      onSubmit() {
        console.log('submit!');
      },
      //分页
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      dialog(e){
        this.dialogshow = true;
        this.title = e;
      }
    }
  }

</script>
<style lang='' scoped>

</style>