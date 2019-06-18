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
    user: [],
    rmvSuccessStatus: false
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

            console.log(res.data);
            this.setState({
              user: res.data
            });

            if (user.cart.length > 0) {
              this.calculateTotal(user);
            }
          });
      }
    }
  }

  calculateTotal = state => {
    console.log(this.state.user);
    let total = 0;

    this.state.user.forEach(item => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    this.setState({
      total,
      showTotal: true
    });
  };

  showNoItemMessage = () => (
    <div className="cart_no_items">
      <FontAwesomeIcon icon={faFrown} />
      <div>You have no items</div>
    </div>
  );

  removeFromCart = id => {
    let user = this.props.user;
    axios
      .get(`http://localhost:3000/api/removeFromCart?_id=${id}`)
      .then(res => {
        user.cart.forEach(item => {
          user.cart.forEach((k, i) => {
            if (item.id === k._id) {
              user.cart[i].quantity = item.quantity;
            }
          });
        });
        this.setState({
          rmvSuccessStatus: true
        });
        return res.data;
      })
      .then(() => {
        if (user.cart.length <= 0) {
          this.setState({
            showTotal: false
          });
        } else {
          this.calculateTotal(user);
        }
      });
  };

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
            {this.state.showTotal ? (
              <div>
                <div className="user_cart_sum">
                  <div>Total amount: $ {this.state.total}</div>
                </div>
              </div>
            ) : this.state.showSuccess ? (
              <div className="cart_success">
                <FontAwesomeIcon icon={faSmile} />
                <div>THANK YOU</div>
                <div>YOUR ORDER IS NOW COMPLETE</div>
              </div>
            ) : (
              this.showNoItemMessage()
            )}
          </div>
          {this.state.rmvSuccessStatus === true
            ? alert("Item removed successfully")
            : ""}
          <div>
             {this.state.showTotal ? (
            <div><button className="paypal_button_container">PayPal</button></div>
          ) : null}
          </div>
         
        </div>
      </UserLayout>
    );
  }
}
