<template>
  <router-view></router-view>
</template>
<script>
  export default {
    mounted() {
      var userName = this.$common.getStorage('userName')
      if(userName) {
        this.$router.replace('./')
      } else {
        this.$router.replace('./login')
      }
    }
  }
</script>