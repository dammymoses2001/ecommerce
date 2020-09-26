import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
function Header({ image }) {
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
                  <Link href='#' class='btn btn-black rounded-0'>
                    Shop Now
                  </Link>
                </p>
              </div>
            </div>
            <div class='col-md-6 order-1 align-self-end'>
              <img src={image} alt='' class='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
