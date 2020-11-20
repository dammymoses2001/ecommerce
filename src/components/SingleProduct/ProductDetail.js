import React, { useState } from "react";
import product_2 from "../../public/img/product_image_1.jpg";
import image2 from "../../public/img/img-2.jpg";
import image3 from "../../public/img/img-3.jpg";
import image4 from "../../public/img/img-4.jpg";
import "./style.css";
import { FaHeart, FaStar, FaShoppingCart, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStore } from "../../mobx/helpers/use-store";
import { useLocalStore, useObserver } from "mobx-react";

const images = [product_2, image2, image3, image4];

function ProductDetail() {
  const [imagesList, setImagesList] = useState("" || product_2);
  const Productstore = useStore();
  console.log(Productstore.homepageText);

  return useObserver(() => (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product_image_slider_container">
              <div id="slider" className="flexslider">
                <ul className="slides">
                  <li>
                    <img src={imagesList} alt="" />
                  </li>
                </ul>
              </div>
              <hr />
              <div className="othersImages">
                <div className="d-flex text-center othersImage-container">
                  {images.map((img, index) => (
                    <div
                      className="productImageList ml-2"
                      key={index}
                      onClick={() => setImagesList(img)}
                    >
                      <img src={img} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 product_col">
            <div className="product_info mt-5">
              <div className="product_name">
                Cool Clothing with Brown Stripes {Productstore.homepageText}
                llllllll
              </div>
              <div className="product_category">
                In <a href="category.html">Category</a>
              </div>
              <div className="product_rating_container d-flex flex-row align-items-center justify-content-start">
                <div className="rating_r rating_r_4 product_rating">
                  <FaStar /> <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>

                <div className="product_reviews">4.7 out of (3514)</div>
                <div className="product_reviews_link">
                  <Link to="#">Reviews</Link>
                </div>
              </div>
              <div className="product_price">
                $3<span>.99</span>
              </div>
              <div className="product_size">
                <div className="product_size_title">Select Size</div>
                <ul className="d-flex flex-row align-items-start justify-content-start">
                  <input
                    type="radio"
                    id="radio_1"
                    disabled
                    name="product_radio"
                    className="regular_radio radio_1"
                  />
                  <label htmlFor="radio_1">XS</label>

                  <input
                    type="radio"
                    id="radio_2"
                    name="product_radio"
                    className="regular_radio radio_2"
                    checked
                  />
                  <label htmlFor="radio_2">S</label>

                  <input
                    type="radio"
                    id="radio_3"
                    name="product_radio"
                    className="regular_radio radio_3"
                  />
                  <label htmlFor="radio_3">M</label>

                  <input
                    type="radio"
                    id="radio_4"
                    name="product_radio"
                    className="regular_radio radio_4"
                  />
                  <label htmlFor="radio_4">L</label>

                  <input
                    type="radio"
                    id="radio_5"
                    name="product_radio"
                    className="regular_radio radio_5"
                  />
                  <label htmlFor="radio_5">XL</label>

                  <input
                    type="radio"
                    id="radio_6"
                    disabled
                    name="product_radio"
                    className="regular_radio radio_6"
                  />
                  <label htmlFor="radio_6">XXL</label>
                </ul>
              </div>
              <div className="product_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nec consequat lorem. Maecenas elementum at diam
                  consequat bibendum. Mauris iaculis fringilla ex, sit amet
                  semper libero facilisis sit amet. Nunc ut aliquet metus.
                  Praesent pulvinar justo sed velit tempus bibendum. Quisque
                  dictum lorem id mi viverra, in auctor justo laoreet. Nam at
                  massa malesuada, ullamcorper metus vel, consequat risus.
                  Phasellus ultricies velit vel accumsan porta.
                </p>
              </div>
              <div className="product_buttons">
                <div className="text-right d-flex flex-row align-items-start justify-content-start">
                  <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <div>
                        <FaHeart fontSize="40" />
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                  <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <div>
                        <FaShoppingCart fontSize="40" />
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
  ));
}

export default ProductDetail;
