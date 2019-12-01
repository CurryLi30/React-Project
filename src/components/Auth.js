import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        if(document.cookie){
            this.state = {
                isLogin: true
            }
        } else {
            this.state = {
                isLogin: false
            }
        }
    }

    render() {
        let { component: Component, ...rest } = this.props;
        return <Route render={(props)=>{
            return this.state.isLogin ? <Component {...rest} {...props} /> : <Redirect to='/login' />
        }} />
    }
}