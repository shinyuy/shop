import React, { Component } from 'react'
import shoe1 from '../../resources/shoe1.jpg';

import './product.css'

export default class Product extends Component {
  render() {
    return (
      <div className="grid">
        <article class="card product-item">
          <header class="card__header">
            <h1 class="product__title">product.title</h1>
          </header>
          <div class="card__image">
            <img src={shoe1} alt="product.title" />
          </div>
          <div class="card__content">
            <h2 class="product__price">2500 XAF </h2>
            <p class="product__description">product.description</p>
          </div>
          <div class="card__actions">
            <form action="/add-to-cart" method="POST">
              <button class="btn">Add to Cart</button>
            </form>
          </div>
        </article>
      </div>
    );
  }
}
