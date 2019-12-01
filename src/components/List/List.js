import React from 'react';
import {Link} from 'react-router-dom'

import './List.css'


class List extends React.Component {
    render() {
        return (
            <div className="list">
                <ul>
                    {
                        this.props.list.map((item, index) => (
                            <Link className="goods" key={index} to={'detail?'+ (index + 1)}>
                                <img src={item.goodsImg} className="goodsImg" />
                                <div className="goodsDetail">
                                    <p className="goodsName">{item.goodsName}</p>
                                    <span className="goodsPrice">{item.goodsPrice}</span>
                                </div>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default List;