import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFrown from "@fortawesome/fontawesome-free-solid/faFrown";
import faSmile from "@fortawesome/fontawesome-free-solid/faSmile";
import axios from "axios";
import UserLayout from "../../HOC/UserLayout";
import ProductBlock from "../utils/ProductBlock";

export default class Cart extends Component {
  state = {
    total: 0,
    showTotal: false,
    showSuccess: false,
    user: []
  };

  componentDidMount() {
    let cartItems = [];
    let user = this.props.user;

    if (user.cart) {
      if (user.cart.length > 0) {
        user.cart.forEach(item => {
          cartItems.push(item.id);
        });

        axios
          .get(
            `http://localhost:8000/api/cart/products_by_id?id=${cartItems}&type=array`
          )
          .then(res => {
            user.cart.forEach(item => {
              res.data.forEach((k, i) => {
                if (item.id === k._id) {
                  res.data[i].quantity = item.quantity;
                }
              });
            });
           
            this.setState({
              user: res.data
            });
           
          });
      }
    }
  }

  

  render() {
    return (
      <UserLayout user={this.props.user}>
        <div>
          <h1>My Cart</h1>
          <div className="user_cart">
            <ProductBlock
              products={this.state.user}
              type="cart"
              removeItem={id => this.removeFromCart(id)}
            />
           
          </div>
        </div>
      </UserLayout>
    );
  }
}
