import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Login extends Component {
  render() {
    return (
      <div style={{margin: '20px'}}>
        <Container>
            <Row>
                <Col></Col>
                <Col><h3>Registered ? Login!</h3></Col>
                <Col></Col>     
            </Row>
          <Row>
              <Col>
            <Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" style={{margin: '20px'}}>
                Submit
              </Button>
            </Form>
            ;
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
