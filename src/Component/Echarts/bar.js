import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class Bar extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'));
        // 绘制图表
        myChart.setOption({
            title:{
                text:"销售业绩分布",
                textStyle:{
                    fontSize:16,
                    color:"#ababab"
                } 
              },
              tooltip : {
                  trigger: 'axis',
                //   top:"10%",
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              
              grid: {
                  left: '3%',
                  right: '4%',
                  top:"15%",
                  width:'90%',
                  height:"80%",
                  containLabel: true,
                  backgroundColor:"red"
          
              },
              xAxis : [
                  {
                      type : 'category',
                      data : ['1月','2月','3月','4月','5月','6月'],
                      splitLine:false
                  }
              ],
              yAxis : [
                  {
                      type : 'value',
                      splitLine:false
                  }
              ],
              series : [
                  {
                      name:'实际',
                      type:'bar',
                      stack: '实际预算比',
                      data:[10, 10, 10, 10, 10, 10],
                      barWidth:30,
                      color:"#76b3ff"
                  },
                  {
                      name:'预算',
                      type:'bar',
                      stack: '实际预算比',
                      data:[20, 20, 20, 20, 20, 20],
                      barWidth:30,
                      color:"#6d799b"
                  }
              ]
        });
    }
    render() {
        return (
            <div style={{"marginTop":"0%","width":"100%","height":"200px"}} id="main1"></div>
        );
    }
}

export default Bar;