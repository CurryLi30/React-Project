import React from 'react';

import Carousel from '../components/Carousel/Carousel'
import List from '../components/List/List'

import axios from 'axios'

class Home extends React.Component {
    state = {
        list: []
    }
    constructor(props) {
        super()
        axios({
            url: '/api/list'
        }).then(
            res => this.setState({ list: res.data })
        )
    }
    render() {
        let { list } = this.state;
        return (
            <div className={'home'}>
                <Carousel></Carousel>
                <List list={list} dataName="home" />
            </div>
        )
    }
}

export default Home;