import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/products/ProductList";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import AddProduct from "./components/admin/AddProduct";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Register from "./components/auth/Register";
import EditProduct from "./components/admin/EditProduct";
import AdminProductList from "./components/admin/AdminProductList";
import AdminProductDetails from "./components/admin/AdminProductDetails";
import Orders from "./components/admin/Orders";
import NotFound from "./components/notfound/NotFound";
import Login from "./components/auth/Login";
import UserDashboard from "./components/user/index";
import Auth from "./HOC/Auth";
import Layout from "./HOC/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/"  component={Auth(ProductList, null)} />
          <Route
            path="/user/dashboard"
            exact
            component={Auth(UserDashboard, true)}
          />
          <Route path="/cart" exact component={Auth(Cart, true)} />
          <Route path="/checkout" exact component={Auth(Checkout, true)} />
          <Route path="/register" exact component={Auth(Register, false)} />
          <Route path="/login" exact component={Auth(Login, false)} />
          <Route
            path="/product/:_id"
            exact
            component={Auth(ProductDetails, null)}
          />
          <Route
            path="/admin/product/:_id"
            exact
            component={Auth(AdminProductDetails, true)}
          />
          <Route path="/products" exact component={Auth(ProductList, null)} />
          <Route
            path="/admin/products"
            exact
            component={Auth(AdminProductList, true)}
          />
          <Route
            path="/admin/addproduct"
            exact
            component={Auth(AddProduct, true)}
          />
          <Route
            path="/admin/editproduct/:_id"
            exact
            component={Auth(EditProduct, true)}
          />
          <Route path="/admin/orders" exact component={Auth(Orders, true)} />
          <Route component={Auth(NotFound, null)} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
