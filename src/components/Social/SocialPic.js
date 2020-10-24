import React from 'react';
import { Link } from 'react-router-dom';
import model_3 from '../../public/img/model_3.png';
import './social.css';
function SocialPic() {
  return (
    <div className='site-section'>
      <div className='relative instagram'>
        <div className='row align-items-stretch no-gutters'>
          <div className='col-lg-2'>
            <div className='product-item sm-height bg-gray mb-4'>
              <img src={model_3} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='product-item sm-height bg-gray mb-4'>
              <img src={model_3} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='product-item sm-height bg-gray mb-4'>
              <img src={model_3} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='product-item sm-height bg-gray mb-4'>
              <img src={model_3} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='product-item sm-height bg-gray mb-4'>
              <img src={model_3} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='product-item sm-height bg-gray mb-4'>
              <img src={model_3} alt='' className='img-fluid' />
            </div>
          </div>
        </div>
        <div className='btn-absolute'>
          <p className='text-center'>
            <Link to='/' className='btn btn-black rounded-0'>
              @instagram/facebook account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialPic;
