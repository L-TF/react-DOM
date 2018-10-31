import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class Line extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main3'));
        
        
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
             
            grid: {
                top:"15%",
                left:0,
                width:'90%',
                height:"80%",
                containLabel: true,
                backgroundColor:"red"
        
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        });
       
    }
    render() {
        return (
            <div id="main3" style={{"marginTop":"0%","width":"100%","height":"200px"}}></div>
        );
    }
}

export default Line;