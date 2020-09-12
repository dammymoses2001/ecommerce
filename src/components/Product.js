import React from 'react';
import model_5 from '../public/img/model_5.png';
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
        <div class='row'>
          <div class='col-lg-4 col-md-6 item-entry mb-4'>
            <a href='#' class='product-item md-height bg-gray d-block'>
              <img src={model_5} alt='Image' class='img-fluid' />
            </a>
            <h2 class='item-title'>
              <a href='#'>Gray Shoe</a>
            </h2>
            <strong class='item-price'>$20.00</strong>
          </div>
          <div class='col-lg-4 col-md-6 item-entry mb-4'>
            <a href='#' class='product-item md-height bg-gray d-block'>
              <img src={model_5} alt='Image' class='img-fluid' />
            </a>
            <h2 class='item-title'>
              <a href='#'>Blue Shoe High Heels</a>
            </h2>
            <strong class='item-price'>
              <del>$46.00</del> $28.00
            </strong>
          </div>

          <div class='col-lg-4 col-md-6 item-entry mb-4'>
            <a href='#' class='product-item md-height bg-gray d-block'>
              <img src={model_5} alt='Image' class='img-fluid' />
            </a>
            <h2 class='item-title'>
              <a href='#'>Denim Jacket</a>
            </h2>
            <strong class='item-price'>
              <del>$46.00</del> $28.00
            </strong>
          </div>
          <div class='col-lg-4 col-md-6 item-entry mb-4'>
            <a href='#' class='product-item md-height bg-gray d-block'>
              <img src={model_5} alt='Image' class='img-fluid' />
            </a>
            <h2 class='item-title'>
              <a href='#'>Denim Jacket</a>
            </h2>
            <strong class='item-price'>
              <del>$46.00</del> $28.00
            </strong>
          </div>
          <div class='col-lg-4 col-md-6 item-entry mb-4'>
            <a href='#' class='product-item md-height bg-gray d-block'>
              <img src={model_5} alt='Image' class='img-fluid' />
            </a>
            <h2 class='item-title'>
              <a href='#'>Denim Jacket</a>
            </h2>
            <strong class='item-price'>
              <del>$46.00</del> $28.00
            </strong>
          </div>
          <div class='col-lg-4 col-md-6 item-entry mb-4'>
            <a href='#' class='product-item md-height bg-gray d-block'>
              <img src={model_5} alt='Image' class='img-fluid' />
            </a>
            <h2 class='item-title'>
              <a href='#'>Denim Jacket</a>
            </h2>
            <strong class='item-price'>
              <del>$46.00</del> $28.00
            </strong>
          </div>
        </div>
        <p class='text-center'>
          <a href='#' class='btn btn-black rounded-0'>
            . . . Learn More . . .
          </a>
        </p>
      </div>
    </div>
  );
}

export default Product;
