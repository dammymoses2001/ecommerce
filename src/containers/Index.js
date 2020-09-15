import React from 'react';
//import components
import NavBar from '../components/NavBar/Navbar';
import Header from '../components/Header/Header';
import Categories from '../components/Categories';
import Product from '../components/Product';
import SocialPic from '../components/Social/SocialPic';
import Footer from '../components/Footer/Footer';
import model_3 from '../public/img/model_3.png';
//
function Index() {
  return (
    <div>
      <NavBar />
      <Header image={model_3} />
      <Categories />
      <Product />
      <SocialPic />
      <Footer />
    </div>
  );
}

export default Index;
