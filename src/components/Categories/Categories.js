import React from 'react';
import { Link } from 'react-router-dom';
import model_3 from '../../public/img/model_3.png';
function Categories() {
  return (
    <div>
      <div className='site-section'>
        <div className=''>
          <div className='row align-items-stretch'>
            <div className='col-lg-4'>
              <div className='product-item sm-height bg-gray mb-4'>
                <Link href='#' className='product-category'>
                  Men <span>25 items</span>
                </Link>
                <img src={model_3} alt='' className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='product-item sm-height bg-gray mb-4'>
                <Link href='#' className='product-category'>
                  Women <span>25 items</span>
                </Link>
                <img src={model_3} alt='' className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='product-item sm-height bg-gray mb-4'>
                <Link href='#' className='product-category'>
                  Shoes <span>25 items</span>
                </Link>
                <img src={model_3} alt='' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
