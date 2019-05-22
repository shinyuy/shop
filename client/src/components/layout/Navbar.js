import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./layout.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="main-nav">
          <header className="main-header">
            <nav className="main-header__nav">
              <ul className="main-header__item-list">
                <li className="main-header__item">
                  <Link className="" to="/">
                    Shop
                  </Link>
                </li>
                <li className="main-header__item">
                  <Link className='' to="/products">
                    Products
                  </Link>
                </li>
                <li className="main-header__item">
                  <Link className="" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="main-header__item">
                  <Link className="" to="/admin/orders">
                    Orders
                  </Link>
                </li>
                <li className="main-header__item">
                  <Link className="" to="/register_login">
                    Register/Login
                </Link>
                </li>
                <li className="main-header__item">
                  <Link className="" to="/admin/addproduct">
                    Admin Products
                  </Link>
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
