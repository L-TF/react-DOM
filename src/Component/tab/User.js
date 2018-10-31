import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'antd';
const { Header, Sider, Content } = Layout;
class Tab1 extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
       
    }
   
           
    render(){
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            filters: [{
              text: '赵四',
              value: '赵四',
            }, {
              text: '王五',
              value: '王五',
            }, {
              text: '子菜单',
              value: '子菜单',
              children: [{
                text: 'Green',
                value: 'Green',
              }, {
                text: 'Black',
                value: 'Black',
              }],
            }],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
          }, {
            title: '年龄',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
          }, {
            title: '住址',
            dataIndex: 'address',
            filters: [{
              text: 'London',
              value: 'London',
            }, {
              text: 'New York',
              value: 'New York',
            }],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length,
          }];
          
          const data = [{
            key: '1',
            name: '张三',
            age: 32,
            address: '青岛',
          }, {
            key: '2',
            name: '李四',
            age: 42,
            address: '上海',
          }, {
            key: '3',
            name: '赵四',
            age: 32,
            address: '北京',
          }, {
            key: '4',
            name: '王五',
            age: 32,
            address: '深圳',
          }];
          
          function onChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter);
          }
          
         return (
             <div style={{"marginTop":"1%"}}>
              <Table columns={columns} dataSource={data} onChange={onChange} />
             </div>
         )
    }
}
export default Tab1;