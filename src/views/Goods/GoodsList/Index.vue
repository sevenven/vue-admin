<template>
  <div class="goods-list">
    <Edit v-show="showEdit" @certain="certainHandle" @cancle="cancleHandle"></Edit>
    <conditions>
      <template v-slot:1>
        <el-input v-model="goodsName" placeholder="商品名称"></el-input>
      </template>
      <template v-slot:2>
        <el-select v-model="goodsType" placeholder="商品类型">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>
      <template v-slot:3>
        <el-date-picker v-model="date" type="date" placeholder="出库时间" :editable="false"></el-date-picker>
      </template>
      <template v-slot:4>
        <el-button type="primary" icon="el-icon-search">查找</el-button>
      </template>
    </conditions>
    <div class="opts">
      <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="3"
          :file-list="fileList">
        <el-button icon="el-icon-upload" plain>批量上传</el-button>
      </el-upload>

      <el-button icon="el-icon-delete-solid" plain>批量删除</el-button>
    </div>
    <el-table ref="multipleTable" :data="goodsData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date}}</template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称" width="120"></el-table-column>
      <el-table-column prop="goodsType" label="商品类型"></el-table-column>
      <el-table-column prop="shelfLife" label="保质期"></el-table-column>
      <el-table-column prop="flavour" label="口味"></el-table-column>
      <el-table-column prop="tableEdit" label="操作">
        <template>
          <el-link type="primary" @click="handleEdit">编辑</el-link>
          <el-link type="danger" @click="handleDelete">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="400"
        layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
  import Conditions from '../../../components/Conditions/Index'
  import Edit from './Edit'
  import { getGoodsList } from '../../../api/index'
  export default {
    data() {
      return {
        showEdit: false,
        currentPage: 1,
        pageSize: 10,
        fileList: [],
        goodsId: '',
        goodsName: '',
        date: '',
        options: [{
          value: 'all',
          label: '全部'
        }, {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        goodsType: '',
        goodsData: [],
        multipleSelection: []
      }
    },
    components: {
      Conditions,
      Edit
    },
    mounted() {
      this.getGoodsList()
    },
    methods: {
      handleSelectionChange() {
      },
      handleSizeChange() {
      },
      handleCurrentChange() {
      },
      handleEdit() {
        this.showEdit = true
      },
      certainHandle() {
        this.showEdit = false
      },
      cancleHandle() {
        this.showEdit = false
      },
      handleDelete() {
        this.$confirm('确定删除该条记录吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      async getGoodsList() {
        const { goodsData } = await getGoodsList()
        this.goodsData = goodsData
      }

    }
  }
</script>

<style lang="less" scoped>
</style>