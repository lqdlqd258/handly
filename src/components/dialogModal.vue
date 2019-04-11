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
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
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
    }
  }
}

</script>
<style lang='scss'>
@import '../assets/css/components/modal';
</style>