import React from 'react';
import {NavLink} from 'react-router-dom'

import './Footer.css'


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <NavLink to='/home' className="firstPage" activeStyle={{color: '#fff'}}>首页</NavLink>
                <NavLink to='/shopcart' className="shopCar" activeStyle={{color: '#fff'}}>购物车</NavLink>
                <NavLink to='/my' className="myPage" activeStyle={{color: '#fff'}}>我的</NavLink>
            </div>
        )
    }
}

export default Footer;