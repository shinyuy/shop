import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProductList from './components/products/ProductList';
import Home from './components/home/Home';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
