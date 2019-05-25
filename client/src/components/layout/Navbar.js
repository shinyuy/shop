import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
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
                <Link className="" to="/products">
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
              <Dropdown>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='drop'>
                    <Dropdown.Item className='dropitem' href="#/action-1">Men</Dropdown.Item>
                    <Dropdown.Item className='dropitem' href="#/action-2">
                      Women
                    </Dropdown.Item>
                    <Dropdown.Item className='dropitem' href="#/action-3">
                      Children
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                ; 
              <li className="main-header__item">
                <Link className="" to="/admin/addproduct">
                  Admin Products
                </Link>
              </li>
              <Dropdown style={{marginLeft: '20rem'}}>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    Register/Login
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='drop'>
                    <Dropdown.Item className='dropitem' href="/login">Login</Dropdown.Item>
                    <Dropdown.Item className='dropitem' href="/register">Register</Dropdown.Item>
                    <Dropdown.Item className='dropitem' href="#/action-3">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                ;
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
