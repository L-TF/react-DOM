import React, { Component } from 'react';
// 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Style from "../assess/Login.css"
import NormalLoginForm from './login_div'
import { Menu, Icon, Button, Tabs, Input, Radio } from 'antd';

import axios from 'axios';
import Meun from '../menu'
const TabPane = Tabs.TabPane;
class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Logusername:'账号密码',
            list: [],
            id: 1
        }
    }

    getData = () => {
        var api = 'http://a.itying.com/api/productlist ';   //接口后台允许了跨域

        axios.get(api)
            .then((response) => {
                console.log(response.data.result)
                let lists = response.data.result[0].list;
                lists.map((v, k) => {
                    this.setState({
                        
                        id: v.id

                    })
                    console.log(v._id)
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
    }
    lggin = () => {
    //    let ints=this.refs.int.value;
    //    console.log(ints)
    }
    render() {
        function callback(key) {
            console.log(key);
        }
        return (
            <div className="Height" style={{ "backgroundImage": "url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)" }}>
                {/* {this.state.Logusername} */}
                <div className=" ">
                    <h1 style={{ "textAlign": "center","paddingTop":"6%"}}>DEMO</h1>
                    <h2 style={{ "textAlign": "center" }}>海贸云商出口业务综合服务平台</h2>
                </div>
                <div className="antd-pro-pages-user-login-main" style={{ "marginTop": "3%" }}>
                    <p className="P_style" ></p>
                    <NormalLoginForm ref="Normal" from="首页"></NormalLoginForm>
                </div>
            </div>
        )
    }
}
export default Log;