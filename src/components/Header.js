import React from 'react';
import model_3 from '../public/img/model_3.png';
function Header() {
  return (
    <div>
      <div class='site-blocks-cover' data-aos='fade'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 ml-auto order-md-2 align-self-start'>
              <div class='site-block-cover-content'>
                <h2 class='sub-title'>#New Summer Collection 2019</h2>
                <h1>Arrivals Sales</h1>
                <p>
                  <a href='#' class='btn btn-black rounded-0'>
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
            <div class='col-md-6 order-1 align-self-end'>
              <img src={model_3} alt='Image' class='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
