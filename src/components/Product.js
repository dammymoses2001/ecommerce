import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Product/Products'
function Product() {
  return (
    <div class='site-section'>
      <div class='container'>
        <div class='row'>
          <div class='title-section text-center mb-5 col-12'>
            <h2 class='text-uppercase'>Popular Products</h2>
            <div class='title-section-sublist'>
              <ul class='list-unstyled'>
                <li class='text-active'>New Arrivals</li>
                <li>Featured</li>
                <li>Featured</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------- */}
        <Products />

        {/* -------------------------------------------------------------------- */}
        <p class='text-center'>
          <Link href='#' class='btn btn-black rounded-0'>
            . . . Learn More . . .
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Product;
