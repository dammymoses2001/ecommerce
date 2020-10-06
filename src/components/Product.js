import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Product/Products';
function Product() {
  return (
    <div className='site-section'>
      <div className='container'>
        <div className='row'>
          <div className='title-section text-center mb-5 col-12'>
            <h2 className='text-uppercase'>Popular Products</h2>
            <div className='title-section-sublist'>
              <ul className='list-unstyled'>
                <li className='text-active'>New Arrivals</li>
                <li>Featured</li>
                <li>Featured</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------- */}
        <Products />

        {/* -------------------------------------------------------------------- */}
        <p className='text-center'>
          <Link href='#' className='btn btn-black rounded-0'>
            . . . Learn More . . .
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Product;
