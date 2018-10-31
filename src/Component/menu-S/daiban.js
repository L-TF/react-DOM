import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'antd';
const { Header, Sider, Content } = Layout;
class Daiban extends Component {
    constructor(props){
        super(props);
        this.state={
        }
       
    }
   
           
    render(){
        
        const dataSource = [{
            key: '1',
            name: '1',
            age: 'AC0001',
            address: '平均价格',
            Dtate_model1:'18-12-12-1',
            Dtate_model2:'海尔日日顺海尔冰箱'
          }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
            Dtate_model1:'123',
            Dtate_model2:'2'
          }, {
            key: '3',
            name: '胡彦祖',
            age: 44,
            address: '西湖区湖底公园1号',
            Dtate_model1:'123',
            Dtate_model2:'2'
          }];
          
          const columns = [{
            title: '序号',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '单号',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '业务',
            dataIndex: 'address',
            key: 'address',
          }
          , {
            title: '提交时间',
            dataIndex: 'Dtate_model1',
            key: 'address1',
          }, {
            title: '描述',
            dataIndex: 'Dtate_model2',
            key: 'address2',
          }
        ];
          
          
         return (
             <div style={{"marginTop":"1%","marginLeft":"3%"}}>
             <Table dataSource={dataSource}    pagination={false} columns={columns} />
             </div>
         )
    }
}
export default Daiban;