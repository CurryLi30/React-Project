import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import Auth from '../components/Auth'

import 'antd/dist/antd.css';
import 'antd-mobile/lib/date-picker/style/css'; 

import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Home from './Home';
import My from './My';
import ShopCart from "./ShopCart";
import Detail from './Detail'
import ErrorPage from './ErrorPage'
import Regist from './Regist'
import Login from './Login'

class App extends React.Component {
    render() {
        return (
            <div className={'App'}>
                <Header></Header>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path='/home' component={Home}></Route>
                    <Auth path='/my' component={My}></Auth>
                    <Auth path='/shopcart' component={ShopCart}></Auth>
                    <Route path='/detail' component={Detail}></Route>
                    <Route path='/regist' component={Regist} />
                    <Route path='/login' component={Login} />
                    <Route component={ErrorPage} />
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;