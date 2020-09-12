import React from 'react';
//import components
import Header from '../components/Header';
import Categories from '../components/Categories';
import Product from '../components/Product';
import SocialPic from '../components/SocialPic';
import Footer from '../components/Footer';
//
function Index() {
  return (
    <div>
      <Header />
      <Categories />
      <Product />
      <SocialPic />
      <Footer />
    </div>
  );
}

export default Index;
