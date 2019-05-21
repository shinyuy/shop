import React, { Component } from "react";
import "./layout.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="main-nav">
          <header className="main-header">
            <nav className="main-header__nav">
              <ul className="main-header__item-list">
                <li className="main-header__item">
                  <a className="" href="/">
                    Shop
                  </a>
                </li>
                <li className="main-header__item">
                  <a className="active" href="/products">
                    Products
                  </a>
                </li>
                <li className="main-header__item">
                  <a className="" href="/cart">
                    Cart
                  </a>
                </li>
                <li className="main-header__item">
                  <a className="" href="/orders">
                    Orders
                  </a>
                </li>
                <li className="main-header__item">
                  <a className="" href="/add-product">
                    Add Product
                  </a>
                </li>
                <li className="main-header__item">
                  <a className="" href="/admin/products">
                    Admin Products
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <nav className="mobile-nav">
            <ul className="mobile-nav__item-list">
              <li className="mobile-nav__item">
                <a className="path === '/' ? 'active' : ''" href="/">
                  Shop
                </a>
              </li>
              <li className="mobile-nav__item">
                <a className="" href="/products">
                  Products
                </a>
              </li>
              <li className="mobile-nav__item">
                <a className="" href="/cart">
                  Cart
                </a>
              </li>
              <li className="mobile-nav__item">
                <a className="" href="/orders">
                  Orders
                </a>
              </li>
              <li className="mobile-nav__item">
                <a className="" href="/admin/add-product">
                  Add Product
                </a>
              </li>
              <li className="mobile-nav__item">
                <a className="" href="/admin/products">
                  Admin Products
                </a>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}
