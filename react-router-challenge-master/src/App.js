import React from 'react';
import './App.css';

import Header from './Header'
import Footer from './Footer'

import ProductsAll from './ProductsAll'
import PageAbout from './PageAbout'
import PageContact from './PageContact'
import ProductDetail from './ProductDetail'

import data from './data'

import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App" style={{width:'960px', margin: 'auto'}}>
      <Header />

      <Route path='/' exact component={ProductsAll} />
      <Route path='/about' component={PageAbout} />
      <Route path='/contact' component={PageContact} />
      {/* <Route path='/' exact component={ProductDetail} {...data[0]} /> */}
      <Route path='/product-detail' exact component={ProductDetail} />

      <Footer />
    </div>
    </Router>
  );
}

export default App;
