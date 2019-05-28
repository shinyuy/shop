import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Home from '../components/home/Home';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <div className="page_container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;