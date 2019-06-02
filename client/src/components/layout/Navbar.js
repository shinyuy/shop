import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./layout.css";
import axios from "axios";

class Navbar extends Component {
  state = {
    page: [
      {
        name: "Home",
        linkTo: "/",
        public: true
      },
      {
        name: "Products",
        linkTo: "/products",
        public: true
      }
    ],
    user: [
      {
        name: "My Cart",
        linkTo: "/user/cart",
        public: false
      },
      {
        name: "My Account",
        linkTo: "/user/dashboard",
        public: false
      },
      {
        name: "Login/Register",
        linkTo: "/login",
        public: true
      },
      {
        name: "Log out",
        linkTo: "/login",
        public: false
      }
    ]
  };

  logoutHandler = () => {
    axios
      .get("http://localhost:3000/api/logout")
      .then(res => {
        if (res.data.success) {
          this.props.history.push("/");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  cartLink = (item, i) => {
    const user = this.props.user;

    return (
      <div  key={i}>
        <Link to={item.linkTo}>{item.name}</Link>
        <span style={{color: 'white', marginLeft:'4px'}}>{user.cart ? user.cart.length : 0}</span>
      </div>
    );
  };

  defaultLink = (item, i) =>
    item.name === "Log out" ? (
      <li key={i}
        className="main-header__item"
        >
          <Link to='' onClick={() => this.logoutHandler()}>
          {item.name}
          </Link> 
      </li>
    ) : (
      <li className="main-header__item">
        <Link to={item.linkTo} key={i}>
          {item.name}
        </Link>
      </li>
    );

  showLinks = type => {
    let list = [];
    if (this.props.user) {
      type.forEach(item => {
        if (!this.props.user.isAuth) {
          if (item.public === true) {
            list.push(item);
          }
        }else {
          if (item.name !== "Login/Register") {
            list.push(item);
          }
        }
      });
    }

    return list.map((item, i) => {
      if (item.name !== "My Cart") {
        return this.defaultLink(item, i);
      } else {
        return this.cartLink(item, i);
      }
    });
  };

  render() {
    return (
      <div className="main-nav">
        <header className="main-header">
          <nav className="main-header__nav">
            <ul className="main-header__item-list">
              {this.showLinks(this.state.page)}
              {this.showLinks(this.state.user)}
              <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop">
                  <Dropdown.Item className="dropitem" href="#/action-1">
                    Men
                  </Dropdown.Item>
                  <Dropdown.Item className="dropitem" href="#/action-2">
                    Women
                  </Dropdown.Item>
                  <Dropdown.Item className="dropitem" href="#/action-3">
                    Children
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

export default withRouter(Navbar);
