import React from 'react';
//import components
import NavBar from '../components/NavBar/Navbar';
import IndexSubHeader from '../components/indexSubHeader.js/indexSubHeader';
import Categories from '../components/Categories/Categories';
import Product from '../components/Product';
import SocialPic from '../components/Social/SocialPic';
import Footer from '../components/Footer/Footer';
//
function Index() {
  return (
    <div>
      <NavBar />
      <IndexSubHeader />
      <Categories />
      <Product />
      <SocialPic />
      <Footer />
    </div>
  );
}

export default Index;
