import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../assets/css/Regist.css';

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios({
                    url: '/api/login',
                    method: 'post',
                    data: values
                }).then((res) => {
                    if (res.data.err == 0) {
                        document.cookie = `username=${values.username};path=/`
                        this.props.history.push('/home')
                    } else {
                        alert('用户名或密码不正确')
                    }
                }
                ).catch(
                    res => alert('登录失败')
                )
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id='components-form-demo-normal-login'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住我</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            忘记密码了?
                    </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                    </Button>
                        去 <Link to="/regist">注册</Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm