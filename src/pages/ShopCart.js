import React from 'react';
import { connect } from 'react-redux';

import '../assets/css/ShopCart.css'

class ShopCart extends React.Component {
    render() {
        let { clearCart,list } = this.props;
        return (
            <div>
                {
                    list.length > 0 && <div className="shopcart">
                        <ul>
                            {list.map((value, index) => {
                                return (
                                    <li key={index}>
                                        <input type='checkbox' className='checkbox'></input>
                                        <img src={value.search[0].detailImg} />
                                        <input type='button' value='-' className='reduce'></input>
                                        <span className='num'>{value.num}</span>
                                        <input type='button' value='+' className='increce'></input>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className='settlement' onClick={() => clearCart()}>结算</div>
                    </div> || <div>
                        您的购物车还没有宝贝哦~
                    </div>
                }
            </div>
        )
    }
}

//把App组件需要的数据从公共state里获取并返回给App
//maState接收外面的state
const mapState = (state, ownProps) => {
    return {
        list: state.list
    }
};

//把App组件需要发送的请求传出去，App需要用到的方法，返回给App
//mapDispatch接收外面的dispatch
const mapDispatch = (dispatch) => {
    return {
        clearCart: () => {
            dispatch({ type: 'CLEAR'})
            // alert('购买成功')
        }
    }
};

// let Container = connect(mapState, mapDispatch)(App);
// export default Container;
//容器组件
export default connect(mapState, mapDispatch)(ShopCart);