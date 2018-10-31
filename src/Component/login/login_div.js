import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { BrowserRouter as Router, Route, Link ,Redirect } from "react-router-dom";
import Meun1 from '../menu'
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
          Flag:false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log(values)
          if (values.userName=="admin" && values.password =="123456" ) {
              alert("登录成功")
              this.setState({
                  Flag:true
              })
          }else{
            alert("登录失败")
          }
        });
        
      }
      chang=()=>{
        this.props.form.validateFields((err, values) => {
          // values.userName="123";
          if(!values.remember){
            //  console.log(values.userName);
             localStorage.setItem("username",values.userName)
             localStorage.setItem("password",values.password)
          }

        })
      }
    render(){
        if(this.state.Flag){
          return  <Redirect to='/menu' />
        }
        const { getFieldDecorator } = this.props.form;
          return(
            <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入账号' }],
              })(
                <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox onChange={this.chang}>记住密码</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码</a>
              {/* <Link to='/menu'> */}
              <Button style={{"width":"100%"}} type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              {/* </Link> */}
              
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
          )
      }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;

