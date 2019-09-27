<template>
  <div class="pop-up">
    <div class="container">
      <div class="container-title">
        <slot name="title"></slot>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .pop-up {
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0 , 0.4);
    .container{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      background: #fff;
      padding: 0 20px;
      border-radius: 4px;
      .container-title{
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        text-align: center;
      }
    }
  }
</style>