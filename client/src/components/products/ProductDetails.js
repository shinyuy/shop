import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import shoe1 from "../../resources/shoe1.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

export default class ProductDetails extends Component {
  render() {
    return (
      <div>
       <Card style={{ width: "50rem", maxHeight: '60rem', margin: "50px" }}>
          <Row> 
            <Col>
              <Card.Img variant="top" src={shoe1} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Text>
                  <h3 style={{ paddingBottom: '10rem'}}>Product Title</h3>
                  <h3>35000 XAF</h3>
                  <p style={{ paddingBottom: '4rem'}}>Some quick example text to build on the card title and make up
                  the bulk of the card's content.</p>
                  <h5>Category: Ladies Shoes</h5>
                  <h5>Designer: Gucci</h5>
                </Card.Text>
                 <Button variant="primary" style={{ marginRight: '2rem'}}>Add to Cart</Button>
                 <Button variant="primary">Remove from Cart</Button>
              </Card.Body>
            </Col>
          </Row>
         </Card>
        
      </div>
    );
  }
}
