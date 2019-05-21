import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Product from './components/product/Product';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Product />
      <Product />
      <Product />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
