<template>
  <div ref="ecahrt">

  </div>
</template> 

<script>
import * as echarts from 'echarts'
export default {
   name: 'vies-eharts',
   props:{
      isAxisCharts:{
         type: Boolean,
         default: true
      },
      charData: {
         type:Object,
         default(){
            return{
               xData: [],
               series:[]
            }
         }
      }
   },
   data() {
      return {
         axisOptions:{ 
             legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: [],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: []
            
         },
         normalOptions: {
             tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [  ],
         },
         echart:null
      }
   },
   watch:{
      charData:{
         handler(){
            this.initCharts()
         },
         deep:true,
      }
   },
   methods: {
      initCharts(){
         this.initChartsData()
         if (this.echart) {
            this.echart.setOption(this.options)
         }else{
            this.echart = echarts.init(this.$refs.ecahrt)
            this.echart.setOption(this.options)
         }

      },
      initChartsData(){
         if(this.isAxisCharts){
            this.axisOptions.xAxis.data = this.charData.xData
            this.axisOptions.series = this.charData.series
         }else{
            this.normalOptions.series = this.charData.series
         }
      }
   },
   computed: {
      options(){
         return this.isAxisCharts ?this.axisOptions : this.normalOptions
      }
   }
}
</script>

<style>

</style>