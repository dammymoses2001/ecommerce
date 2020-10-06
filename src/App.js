import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Index from './containers/Index';
import Contact from './containers/Contact';
import Product from './containers/Product';
import SingleProduct from './containers/SingleProduct';

function App() {
  return (
    <div className='App site-wrap'>
      <Route exact path='/' component={Index} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/product' component={Product} />
      <Route exact path='/product/:product' component={SingleProduct} />
    </div>
  );
}

export default App;
