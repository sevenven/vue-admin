<template>
  <div class="conditions">
    <el-row :gutter="20">
      <el-col :span="5">
        <slot name="1"></slot>
      </el-col>
      <el-col :span="5">
        <slot name="2"></slot>
      </el-col>
      <el-col :span="5">
        <slot name="3"></slot>
      </el-col>
      <el-col :span="5">
        <slot name="4"></slot>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5">
        <slot name="5"></slot>
      </el-col>
      <el-col :span="5">
        <slot name="6"></slot>
      </el-col>
      <el-col :span="5">
        <slot name="7"></slot>
      </el-col>
      <el-col :span="5">
        <slot name="8"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .conditions{
    .el-row{
      margin-top: 10px;
    }
  }
</style>