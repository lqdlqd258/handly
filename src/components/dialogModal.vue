<!--  -->
<template>
  <div>
    <el-dialog
    :title=title
    :visible.sync="centerDialogVisible"
    width="500px"
    @close="closeDialog"
    center>
    <span>
      <slot :name="slotname">{{slotname}}</slot>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button :duration = '1000' :plain="true" @click="open">取 消</el-button>
      <el-button type="primary" @click="open2">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
export default {
  props:['dialogshow','title','slotname'],
  data () {
    return {
      centerDialogVisible:false
    };
  },
  watch:{
    dialogshow(){
       this.centerDialogVisible = this.dialogshow;
    }
  },
  methods:{
    closeDialog(){
      this.$emit('update:dialogshow',this.centerDialogVisible);
    },
    //Message消息提示
    open(){
      this.$message({
          message: '已取消',
          duration:'800'
      });
      this.centerDialogVisible =false;
    },
    open2(){
      this.$message({
          message: '保存成功！',
          duration:'800',
          type: 'success'
      });
      this.centerDialogVisible =false;
    }
  }
}

</script>
<style lang='scss'>
@import '../assets/css/components/modal';
</style>