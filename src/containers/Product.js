import React from 'react';
import NavBar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Breadcrumbs from '../components/BreadCrumbs/Breadcrumbs';
import FilterBar from '../components/FilterBar/filterbar';
import model_5 from '../public/img/model_5.png';
import ProductDetails from '../components/Product/Products';
import Pagination from '../components/Pagination/Pagination';
function Product() {
  return (
    <div>
      <NavBar />
      <Header image={model_5} />
      <Breadcrumbs
        item1='Home'
        item2='Product'
        currentItem='Product'
        active='active'
      />
      <FilterBar />
      <ProductDetails />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Product;
