import React from 'react';
import model_3 from '../public/img/model_3.png';
function Categories() {
  return (
    <div>
      <div class='site-section'>
        <div class=''>
          <div class='row align-items-stretch'>
            <div class='col-lg-4'>
              <div class='product-item sm-height bg-gray mb-4'>
                <a href='#' class='product-category'>
                  Men <span>25 items</span>
                </a>
                <img src={model_3} alt='Image' class='img-fluid' />
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='product-item sm-height bg-gray mb-4'>
                <a href='#' class='product-category'>
                  Women <span>25 items</span>
                </a>
                <img src={model_3} alt='Image' class='img-fluid' />
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='product-item sm-height bg-gray mb-4'>
                <a href='#' class='product-category'>
                  Shoes <span>25 items</span>
                </a>
                <img src={model_3} alt='Image' class='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
