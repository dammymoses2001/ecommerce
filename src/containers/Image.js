import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Model1 from '../public/img/img-1.jpg'
import Model2 from '../public/img/img-2.jpg'
import Model3 from '../public/img/img-3.jpg'
import Model4 from '../public/img/img-4.jpg'


export default class Image extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            height: 800
        };
        return (
            <div >
                <Carousel>
                    <div style={{ width: '50%' }}>
                        <img src={Model2} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={Model3} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={Model1} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}
