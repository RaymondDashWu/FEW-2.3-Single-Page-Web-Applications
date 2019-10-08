import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import PageHeader from './PageHeader';
import Footer from './Footer';
import ImgurGetAlbum from './ImgurGetAlbum';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery}>
          <ImgurGetAlbum />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
