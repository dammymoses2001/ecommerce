import React from 'react'
import product_2 from '../../public/img/product_image_1.jpg';
import './style.css'
import { FaHeart, FaStar, FaShoppingCart, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function ProductDetail() {
    return (

        <div className="product">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="product_image_slider_container">
                            <div id="slider" className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <img src={product_2} alt='' />
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 product_col">
                        <div className="product_info mt-5">
                            <div className="product_name">Cool Clothing with Brown Stripes</div>
                            <div className="product_category">In <a href="category.html">Category</a></div>
                            <div className="product_rating_container d-flex flex-row align-items-center justify-content-start">
                                <div className="rating_r rating_r_4 product_rating"><FaStar /> <FaStar /><FaStar /><FaStarHalfAlt />
                                </div>

                                <div className="product_reviews">4.7 out of (3514)</div>
                                <div className="product_reviews_link"><Link href="#">Reviews</Link></div>
                            </div>
                            <div className="product_price">$3<span>.99</span></div>
                            <div className="product_size">
                                <div className="product_size_title">Select Size</div>
                                <ul className="d-flex flex-row align-items-start justify-content-start">
                                    <li>
                                        <input type="radio" id="radio_1" disabled name="product_radio"
                                            className="regular_radio radio_1" />
                                        <label for="radio_1">XS</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="radio_2" name="product_radio" className="regular_radio radio_2"
                                            checked />
                                        <label for="radio_2">S</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="radio_3" name="product_radio" className="regular_radio radio_3" />
                                        <label for="radio_3">M</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="radio_4" name="product_radio" className="regular_radio radio_4" />
                                        <label for="radio_4">L</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="radio_5" name="product_radio" className="regular_radio radio_5" />
                                        <label for="radio_5">XL</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="radio_6" disabled name="product_radio"
                                            className="regular_radio radio_6" />
                                        <label for="radio_6">XXL</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="product_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat
                                lorem. Maecenas elementum at diam consequat bibendum. Mauris iaculis fringilla
                                ex, sit amet semper libero facilisis sit amet. Nunc ut aliquet metus. Praesent
                                pulvinar justo sed velit tempus bibendum. Quisque dictum lorem id mi viverra, in
                                auctor justo laoreet. Nam at massa malesuada, ullamcorper metus vel, consequat
                                risus. Phasellus ultricies velit vel accumsan porta.</p>
                            </div>
                            <div className="product_buttons">
                                <div className="text-right d-flex flex-row align-items-start justify-content-start">
                                    <div
                                        className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <div><FaHeart fontSize='40' />
                                                <div>+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <div><FaShoppingCart fontSize='40' />
                                                <div>+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
