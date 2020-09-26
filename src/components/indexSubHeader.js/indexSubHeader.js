import React from 'react';
import './indexSubHeader.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import model_3 from '../../public/img/model_1.png';
import model_6 from '../../public/img/model_6.png';
import model_7 from '../../public/img/model_7.png';
function indexSubHeader() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div class='site-blocks-cover' data-aos='fade'>
            <div class='container'>
              <div class='row'>
                <div class='col-md-6 ml-auto order-md-2 align-self-start'>
                  <div class='site-block-cover-content'>
                    <h2 class='sub-title'>#New Summer Collection 2019</h2>
                    <h1>Arrivals Sales</h1>
                    <p>
                      <Link href='#' class='btn btn-black rounded-0'>
                        Shop Now
                      </Link>
                    </p>
                  </div>
                </div>
                <div class='col-md-6 order-1 align-self-end'>
                  <img src={model_3} alt='' class='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class='site-blocks-cover' data-aos='fade'>
            <div class='container'>
              <div class='row'>
                <div class='col-md-6 ml-auto order-md-2 align-self-start'>
                  <div class='site-block-cover-content'>
                    <h2 class='sub-title'>#New Winter Collection 2019</h2>
                    <h1>Arrivals Sales</h1>
                    <p>
                      <Link href='#' class='btn btn-black rounded-0'>
                        Shop Now
                      </Link>
                    </p>
                  </div>
                </div>
                <div class='col-md-6 order-1 align-self-end'>
                  <img src={model_6} alt='' class='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class='site-blocks-cover' data-aos='fade'>
            <div class='container'>
              <div class='row'>
                <div class='col-md-6 ml-auto order-md-2 align-self-start'>
                  <div class='site-block-cover-content'>
                    <h2 class='sub-title'>#New Shopping </h2>
                    <h1>Arrivals Sales</h1>
                    <p>
                      <Link href='#' class='btn btn-black rounded-0'>
                        Shop Now
                      </Link>
                    </p>
                  </div>
                </div>
                <div class='col-md-6 order-1 align-self-end'>
                  <img src={model_7} alt='' class='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default indexSubHeader;
