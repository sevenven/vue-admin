<template>
  <div class="header">
    <div class="right">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-coordinate">个人信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-guide">切换账号</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <span class="name">{{systemName}}</span>
    <i class="open el-icon-s-fold" @click="handleMenuOpen"></i>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        userName: ''
      }
    },
    mounted() {
      this.userName = this.$common.getStorage('userName')
    },
    computed: {
      ...mapState(['systemName'])
    },
    methods: {
      handleMenuOpen() {
        this.$emit('menuCollapse')
      },
      handleCommand(command) {
        if(command === 'exit') {
          this.$common.removeStorage('userName')
          this.$router.replace('/login')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/less/varibles.less";
  .header{
    height: 45px;
    line-height: 45px;
    padding: @padding;
    background: #222;
    color: #fff;
    .open {
      font-size: 26px;
      vertical-align: middle;
      margin-left: 20px;
      cursor: pointer;
    }
    .right {
      float: right;
      cursor: pointer;
      .el-avatar{
        width: 32px;
        height: 32px;
        line-height: 32px;
        margin-top: 6.5px;
        margin-right: 6px;
      }
      .el-dropdown {
        color: #fff;
        vertical-align: top;
      }
    }
  }
</style>