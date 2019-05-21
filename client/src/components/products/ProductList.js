import React, { Component } from 'react'
import Product from "../product/Product";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}
