import React, { Component } from 'react'
import shoe1 from '../../resources/shoe1.jpg';

import './product.css'

export default class Product extends Component {
  render() {
    return (
      <div className="grid">
        <div className="card product-item">
          <header className="card__header">
            <h1 className="product__title">product.title</h1>
          </header>
          <div className="card__image">
            <img src={shoe1} alt="product.title" />
          </div>
          <div className="card__content">
            <h2 className="product__price">2500 XAF </h2>
            <p className="product__description">product.description</p>
          </div>
          <div className="card__actions">
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
