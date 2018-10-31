import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col } from 'antd';
import Daiban from '../menu-S/daiban'
import EchartsTest from '../Echarts/echarts'
import Bar from '../Echarts/bar'
import Line from '../Echarts/line'
const { Header, Sider, Content } = Layout;

class Tab1 extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={10}>
                   
                    <Bar></Bar>
                    </Col>
                    <Col span={14}>
                    <Line></Line>
                  </Col>
                    {/* <Col span={6}>col-12</Col> */}
                </Row>
                <Row>
                    <Col span={24}>
                    <Daiban></Daiban>
                    {/* <EchartsTest></EchartsTest> */}
                    </Col>
                    {/* <Col span={16}></Col> */}
                </Row>
            </div>
        )
    }
}
export default Tab1;