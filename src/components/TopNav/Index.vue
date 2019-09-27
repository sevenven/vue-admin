<template>
  <div class="top-nav">
    <el-menu :default-active="curPage.index" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="pageItem in curPageList" :index="pageItem.index" :key="pageItem.index">
          {{pageItem.name}}<i v-if="!pageItem.noClose" class="el-icon-close" @click.stop="handleDelete(pageItem)"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState(['curPage', 'curPageList'])
    },
    methods: {
      ...mapActions(['getCurPage', 'updateCurPageList']),
      handleSelect(index, indexPath) {
        const result = this.curPageList.filter((page) => {
          return page.index === index
        })
        this.getCurPage(result[0])
      },
      handleDelete(deletePage) {
        const lastPage = this.curPageList[this.curPageList.length - 1]
        const lastPrevPage = this.curPageList[this.curPageList.length - 2]
        const curPage = deletePage === lastPage ? lastPrevPage : lastPage
        this.updateCurPageList({ curPage: deletePage, isAdd: false })
        this.getCurPage(curPage)
      }
    }
  }
</script>

<style lang="less">
  .top-nav {
    .el-menu.el-menu--horizontal{
      height: 40px;
      overflow: hidden;
      > .el-menu-item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        [class^=el-icon-] {
          width: 18px;
          margin-left: 2px;
          margin-right: 0;
        }
      }
    }
  }
</style>