import React from 'react';
import Nav from '../components/NavBar/Navbar';
import Header from '../components/Header/Header';
import AProduct from '../components/SingleProduct/ProductDetail';
import Breadcrumbs from '../components/BreadCrumbs/Breadcrumbs';
import model_5 from '../public/img/model_5.png';
import Footer from '../components/Footer/Footer';

function SingleProduct() {
  return (
    <div>
      <Nav />
      <Header image={model_5} />
      <Breadcrumbs
        item1='Home'
        item2='Product'
        item3='Cool Clothing with Brown Stripes'
        active='active'
        currentItem='Cool Clothing with Brown Stripes'
      />
      <AProduct />
      <Footer />
    </div>
  );
}

export default SingleProduct;
