import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
          </div>
    )
  }
}
