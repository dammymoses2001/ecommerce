import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Index from './containers/Index';
import Contact from './containers/Contact'
function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Index} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
