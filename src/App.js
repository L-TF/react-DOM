import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Log from './Component/login/login'
import Menu1 from './Component/menu'
import Style from "./Component/assess/style.css"
import NormalLoginForm from './Component/login/login_div'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      msg: "海贸云商DEMO"

    }
  }
  getFooter = () => {
    // this.refs.APP2.lggin()
  }
  componentWillMount() {
    console.log(2)
  }
  componentDidMount() {
    console.log(1)
    // console.log(this.refs.aaa.msg)
  }
  render() {

    return (
    
      <Router>
        <div className="App Height">

          <Route exact path="/" component={Log} />
          {/* <button onClick={this.getFooter}>123123</button> */}
          <Route path="/menu" component={Menu1} />


        </div>
      </Router>
    );
  }
}

export default App;
