<template>
  <div>
    <Header @menuCollapse="handleCollapseChange" />
    <div class="content">
      <div class="left">
        <left-nav :isCollapse="isCollapse"></left-nav>
      </div>
      <div class="right" ref="right">
        <top-nav></top-nav>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/Index'
  import LeftNav from '../../components/LeftNav/Index'
  import TopNav from '../../components/TopNav/Index'
  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    components: {
      Header,
      LeftNav,
      TopNav
    },
    methods: {
      handleCollapseChange() {
        this.isCollapse = !this.isCollapse
        this.$refs.right.style.left = this.isCollapse ? '75px' : '200px'
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/less/varibles.less";
  .content {
    width: 100%;
    overflow: hidden;
    .left {
      position: absolute;
      top: 45px;
      bottom: 0;
      left: 0;
      overflow: hidden;
    }
    .right {
      position: absolute;
      top: 45px;
      right: 0;
      left: 200px;
      bottom: 0;
      overflow: hidden;
      transition:left 0.3s;
      -moz-transition:left 0.3s;
      -webkit-transition:left 0.3s;
      -o-transition:left 0.3s;
      padding-left: 10px;
      .container{
        position: absolute;
        top: 40px;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: auto;
        padding: @padding;
        padding-bottom: 20px;
      }
    }
  }
</style>