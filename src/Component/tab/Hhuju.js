import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Style from '../assess/style.css'
import { Table } from 'antd';
import TimeRelatedForm from '../menu-S/fromT'
const { Header, Sider, Content } = Layout;
class Tab1 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
               <TimeRelatedForm></TimeRelatedForm>
            </div>
        )
    }
}
export default Tab1;