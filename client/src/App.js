import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/products/ProductList";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import AddProduct from "./components/admin/AddProduct";
import Cart from "./components/user/Cart";
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
      <Layout auth={Auth}>
        <Switch>
          <Route exact path="/"  component={Auth(ProductList, null, false)} />
          <Route
            path="/user/dashboard"
            exact
            component={Auth(UserDashboard, true, false)}
          />
          <Route path="/user/cart" exact component={Auth(Cart, true, false)} />
          <Route path="/checkout" exact component={Auth(Checkout, true, false)} />
          <Route path="/register" exact component={Auth(Register, false, false)} />
          <Route path="/login" exact component={Auth(Login, false, false)} />
          <Route
            path="/product/:_id"
            exact
            component={Auth(ProductDetails, null, false)}
          />
          <Route
            path="/admin/product/:_id"
            exact
            component={Auth(AdminProductDetails, true, true)}
          />
          <Route path="/products" exact component={Auth(ProductList, null, false)} />
          <Route
            path="/admin/products"
            exact
            component={Auth(AdminProductList, true, true)}
          />
          <Route
            path="/admin/addproduct"
            exact
            component={Auth(AddProduct, true, true)}
          />
          <Route
            path="/admin/editproduct/:_id"
            exact
            component={Auth(EditProduct, true, true)}
          />
          <Route path="/admin/orders" exact component={Auth(Orders, true, true)} />
          <Route component={Auth(NotFound, null)} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
