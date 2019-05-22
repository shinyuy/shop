import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import shoe1 from '../../resources/shoe1.jpg';

export default class Product extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem", maxHeight: '70rem', margin: "50px" }}>
          <Card.Img variant="top" src={shoe1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        ;
      </div>
    );
  }
}
