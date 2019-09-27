<template>
  <div class="login">
    <el-card class="box-card user-login">
      <div slot="header" class="clearfix">
        <span>{{systemName}}登录</span>
      </div>
      <div class="text item">
        <el-input placeholder="用户名" v-model="userName" clearable></el-input>
        <el-input placeholder="密码" v-model="passWord" show-password></el-input>
        <el-button type="primary" @click="clickHandle">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data() {
      return {
        userName: '',
        passWord: ''
      }
    },
    computed: {
      ...mapState(['systemName'])
    },
    methods: {
      ...mapActions(['getUserName']),
      clickHandle() {
        if(this.userName === 'admin' && this.passWord === '000000'){
          this.$common.setStorage('userName', this.userName)
          /* this.$router.replace('./') */
          location.reload()
        }else {
          this.$message('用户名或密码错误')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(../../assets/image/bg.png) no-repeat center;
    background-size: cover;
    overflow: hidden;
    .user-login {
      width: 400px;
      height: 300px;
      background: white;
      margin: 0 auto;
      margin-top: 170px;
      border-radius: 8px;
      padding: 20px;
      .el-input{
        margin-bottom: 30px;
      }
      .el-button--primary {
        width: 100%;
      }
    }
  }
</style>