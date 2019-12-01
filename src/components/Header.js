import React from 'react';
import { withRouter } from 'react-router-dom'

import { PageHeader } from 'antd';

class Header extends React.Component {
    render() {
        return (
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                    backgroundColor: 'tomato'
                }}
                onBack={() => this.props.history.go(-1)}
                title={
                    this.props.location.pathname === '/home' && '首页' ||
                    this.props.location.pathname === '/shopcart' && '购物车' ||
                    this.props.location.pathname === '/my' && '我的' ||
                    this.props.location.pathname === '/detail' && '详情页' ||
                    this.props.location.pathname === '/regist' && '注册' ||
                    this.props.location.pathname === '/login' && '登录' ||
                    '404'
                }
                subTitle="欢迎来到我的网页"
            />
        )
    }
}

export default withRouter(Header);