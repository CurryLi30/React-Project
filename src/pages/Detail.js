import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import '../assets/css/Detail.css'

class Detail extends React.Component {
    state = {
        list:[]
    }
    constructor(props) {
        super();
        axios({
            url: '/api/detail/' + props.location.search.slice(1, 2)
        }).then(
            res => this.setState({ list: res.data })
        )
    }

    render() {
        let { addToShopCart, buyNow } = this.props;
        return (
            <div>
                {
                    this.state.list.length > 0 && <div className="detail">
                        <img src={this.state.list[0].detailImg} />
                        <p>{this.state.list[0].detail}</p>
                        <input type='button' value='加入购物车' onClick={() => addToShopCart(this.state.list)}/>
                        {/* <input type='button' value='立即购买' onClick={() => buyNow(this.props.location.search.slice(1, 2))}/> */}
                        <Link to='/shopcart' onClick={() => buyNow(this.state.list)}>立即购买</Link>
                    </div>
                }
            </div>
        )
    }
}

//把App组件需要的数据从公共state里获取并返回给App
//maState接收外面的state
const mapState = (state,ownProps) => {
    return {
        list: state.list
    }
};

//把App组件需要发送的请求传出去，App需要用到的方法，返回给App
//mapDispatch接收外面的dispatch
const mapDispatch = (dispatch) => {
    return {
        addToShopCart: (search) => {
            dispatch({ type: 'ADD', payload: search })
            alert('添加成功')
        },
        buyNow: (search) => {
            dispatch({ type: 'BUY', payload: search })
        }
    }
};

// let Container = connect(mapState, mapDispatch)(App);
// export default Container;
//容器组件
export default connect(mapState, mapDispatch)(Detail);