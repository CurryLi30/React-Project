import React from 'react';

import { Carousel } from 'antd';
import './Carousel.css'

export default class Rarousel extends React.Component {
    render() {
        return (
            <Carousel effect="fade" autoplay>
                <div>
                    <h3></h3>
                </div>
                <div>
                    <h3></h3>
                </div>
                <div>
                    <h3></h3>
                </div>
            </Carousel>
        )
    }
}