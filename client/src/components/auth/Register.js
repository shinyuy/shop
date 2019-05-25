import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    success: false,
    errorMessage: false
  };

  register = (firstname, lastname, email, phoneNumber, password) => {
    axios
      .post("http://localhost:8000/api/register", {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password
      })
      .then(res => {
          console.log(res.status);
          this.setState({
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            password: "",
            success: true
          });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMessage: true
        });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    this.register(this.state);
  };

  render() {
    const { firstname, lastname, email, phoneNumber, password } = this.state;

    return (
      <div style={{ margin: "20px" }}>
        <Container>
          <Row>
            <Col />
            <Col>
              <h3>Not registered ? Register!</h3>
            </Col>
            <Col />
          </Row>

          <Row>
            <div style={{ color: "green" }}>
              {this.state.success === true ? "Registration Successful" : ""}
            </div>
            <div style={{ color: "red" }}>
              {this.state.errorMessage === true
                ? "Registration Unsuccessful, try again later"
                : ""}
            </div>
          </Row>

          <Row>
            <Col>
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col>
                    <label htmlFor="title">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={firstname}
                      id="firstname"
                      name="firstname"
                      onChange={this.handleChange}
                      placeholder="Enter First Name"
                    />
                  </Col>
                  <Col>
                    <label htmlFor="price">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={lastname}
                      id="lastname"
                      name="lastname"
                      onChange={this.handleChange}
                      required
                      placeholder="Enter Last Name"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor="">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      value={email}
                      id="email"
                      name="email"
                      onChange={this.handleChange}
                      required
                      placeholder="Enter Email Address"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label htmlFor="">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      value={password}
                      id="password"
                      name="password"
                      onChange={this.handleChange}
                      required
                      placeholder="Enter Password"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label htmlFor="">Phone Number</label>
                    <input
                      className="form-control"
                      type="phoneNumber"
                      value={phoneNumber}
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={this.handleChange}
                      required
                      placeholder="Enter Password"
                    />
                  </Col>
                </Row>

                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{ marginTop: "20px" }}
                >
                  Register
                </button>

                <div style={{ color: "green" }}>
                  {this.state.success === true ? "Registration Successful" : ""}
                </div>
                <div style={{ color: "red" }}>
                  {this.state.errorMessage === true
                    ? "Registration Unsuccessful, try again later"
                    : ""}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
