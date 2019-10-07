import React from 'react';
import logo from './logo.svg';
import './App.css';

import PageHeader from './PageHeader';
import Footer from './Footer';
import ImgurGetAlbum from './ImgurGetAlbum';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <ImgurGetAlbum />
      <Footer />
    </div>
  );
}

export default App;
