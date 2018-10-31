
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import Style from './assess/style.css'


import Home from './tab/Home';
import User from './tab/User';
import News from './tab/News';
import Hhuju from './tab/Hhuju';

import '../index.css';



//antd 布局

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;




let routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },

    {
        path: "/user",
        component: User
    },
    {
        path: "/news",
        component: News
    },
    {
        path: "/hhuju",
        component: Hhuju
    }
];



class Menu1 extends Component {
    constructor(props){
        super(props);
        this.state={
            aid:"asdqeasczxczcz"
        }
    }
    componentDidMount(){
        console.log(this.Link)
        console.log(this.props.title)
        this.setState({
            // msg:
           
        })
    }
    
    setDATA=()=>{
        console.log(this)
        let msg=this.refs.res.props.children;
        // console.log(msg)
       this.setState({
           msg:msg
       })
    }
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (

            <Router>
                <div className="app Height">
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                        >
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span> <Link ref="res" onClick={this.setDATA} to="/">首页</Link></span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="desktop" />
                                    <span><Link to="/news" onClick={this.setDATA} >汇率区域</Link></span>
                                </Menu.Item>
                                <SubMenu
                                    key="sub1"
                                    title={<span><Icon type="user" /><span>User</span></span>}
                                >
                                   <Menu.Item key="3"> <span><Link  onClick={this.setDATA} to="/user">数据表格</Link></span></Menu.Item>
                                    <Menu.Item key="4">   <span><Link to="/hhuju" onClick={this.setDATA} >选择时间</Link></span></Menu.Item>
                                    <Menu.Item key="5">Alex</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={<span><Icon type="team" /><span>Team</span></span>}
                                >
                                    <Menu.Item key="6">Team 1</Menu.Item>
                                    <Menu.Item key="8">Team 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="9">
                                    <Icon type="file" />
                                    <span>File</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                {this.state.msg}
                            </Header>
                            <Content style={{ margin: '0 16px' }}>
                                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb> */}
                                {
                                    routes.map((route, key) => {

                                        if (route.exact) {

                                            return <Route key={key} exact path={route.path} component={route.component} />
                                        } else {
                                            return <Route key={key} path={route.path} component={route.component} />

                                        }
                                    })
                                }
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                海贸云商综合出口平台
                             </Footer>
                        </Layout>
                    </Layout>








                </div>
            </Router>
        );
    }
}

export default Menu1;
