import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
function Header({ image }) {
  return (
    <div>
      <div className='site-blocks-cover' data-aos='fade'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 ml-auto order-md-2 align-self-start'>
              <div className='site-block-cover-content'>
                <h2 className='sub-title'>#New Summer Collection 2019</h2>
                <h1>Arrivals Sales</h1>
                <p>
                  <Link to='#' className='btn btn-black rounded-0'>
                    Shop Now
                  </Link>
                </p>
              </div>
            </div>
            <div className='col-md-6 order-1 align-self-end'>
              <img src={image} alt='' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
