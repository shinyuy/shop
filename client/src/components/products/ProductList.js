import React, { Component } from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
        </Row>
      </div>
    );
  }
}
