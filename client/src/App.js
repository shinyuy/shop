import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProductList from "./components/products/ProductList";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import AddProduct from "./components/admin/AddProduct";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Register from "./components/auth/Register";
import EditProduct from "./components/admin/EditProduct";
import AdminProductList from './components/admin/AdminProductList';
import AdminProductDetails from './components/admin/AdminProductDetails';
import Orders from "./components/admin/Orders";
import NotFound from "./components/notfound/NotFound";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Home />
          <Switch>
            <Route exact path="/"/>
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/product/:_id" component={ProductDetails} />
            <Route path="/admin/product/:_id" component={AdminProductDetails} />
            <Route path="/products" component={ProductList} />
            <Route path="/admin/products" component={AdminProductList} />
            <Route path="/admin/addproduct" component={AddProduct} />
            <Route path="/admin/editproduct/:_id" component={EditProduct} />
            <Route path="/admin/orders" component={Orders} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
