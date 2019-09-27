<template>
  <div class="home">
    <div>
      <el-divider content-position="left">欢迎登录系统~</el-divider>
      <span>祝你有美好的一天</span>
    </div>
    <div class="statistics">
      <el-divider content-position="left">数据统计</el-divider>
      <el-row :gutter="12">
        <el-col :span="4">
          <el-card shadow="always">
            商品数量： 5000
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            上架数量： 3000
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            下单数量： 1000
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover">
            交易数量： 800
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="never">
            文章阅读总数: 200
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="never">
            视频播放总数: 300
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="charts">
      <div class="charts-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>交错正负轴标签</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div ref="chart1" :style="{width: '400px', height: '300px'}"></div>
        </el-card>
      </div>
      <div class="charts-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>仪表盘</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div ref="chart2" :style="{width: '400px', height: '300px'}"></div>
        </el-card>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/chart/gauge'
  import 'echarts/lib/component/tooltip'
  export default {
    mounted() {
      this.drawLine()
      this.drawDashboard()
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(this.$refs.chart1)
        const labelRight = {
          normal: {
            position: 'right'
          }
        }
        // 绘制图表
        myChart.setOption({
          title: {
            text: '交错正负轴标签',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            top: 20,
            right: 10,
            bottom: 0,
            left: 10
          },
          xAxis: {
            type: 'value',
            position: 'top',
            splitLine: { lineStyle: { type: 'dashed' } }
          },
          yAxis: {
            type: 'category',
            axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
          },
          series: [
            {
              name: '生活费',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  formatter: '{b}'
                }
              },
              data: [
                { value: -0.07, label: labelRight },
                { value: -0.09, label: labelRight },
                0.2, 0.44,
                { value: -0.23, label: labelRight },
                0.08,
                { value: -0.17, label: labelRight },
                0.47,
                { value: -0.36, label: labelRight },
                0.18
              ]
            }
          ]
        })
      },
      drawDashboard() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(this.$refs.chart2)
        myChart.setOption({
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: '业务指标',
              type: 'gauge',
              detail: { formatter: '{value}%' },
              data: [{ value: 50, name: '完成率' }]
            }
          ]
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .home{
    .statistics {
      margin-top: 20px;
    }
    .charts {
      margin-top: 20px;
      .charts-item{
        float: left;
        margin-right: 30px;
      }
    }
  }

</style>