<template>
  <div class="left-nav">
    <el-menu :default-active="curPage.index" class="el-menu-vertical-demo" :collapse="isCollapse" @select="handleSelect" :unique-opened="true" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu v-for="(menuItem, menuItemKey) in menuList" :index="menuItemKey" :key="menuItemKey">
        <template slot="title">
          <i :class="menuItem.icon"></i>
          <span slot="title">{{menuItem.name}}</span>
        </template>
        <template v-for="(item, itemkey) in menuItem.items">
          <template v-if="item.subItems">
            <el-submenu :index="itemkey" :key="itemkey">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
                <el-menu-item v-for="(subItem, subItemkey) in item.subItems" :index="subItemkey" :key="subItemkey">
                  {{subItem.name}}
                </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
              <el-menu-item :index="itemkey" :key="itemkey">{{item.name}}</el-menu-item>
          </template>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      isCollapse: Boolean
    },
    mounted() {
      // 获取菜单列表
      this.getMenuList()
    },
    updated() {
      this.$router.replace(this.curPage.url ? this.curPage.url : '/main/wait')
    },
    computed: {
      ...mapState(['menuList', 'curPage'])
    },
    methods: {
      ...mapActions(['getMenuList', 'getCurPage', 'updateCurPageList']),
      handleSelect(index, indexPath) {
        const len = indexPath.length
        const curPage = len === 2 ? this.menuList[indexPath[0]].items[indexPath[1]] : this.menuList[indexPath[0]].items[indexPath[1]].subItems[indexPath[2]]
        curPage.index = index
        this.getCurPage(curPage)
        this.updateCurPageList({ curPage })
      }
    }
  }
</script>
<style lang="less" scoped>
  .el-menu-vertical-demo{
    min-height: 1920px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>