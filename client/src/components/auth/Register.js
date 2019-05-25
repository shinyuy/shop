import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
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
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Row>
                    <Col>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Last Name" />
                    </Col>
                  </Row>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>

                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your phone number with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ margin: "20px" }}
                >
                  Submit
                </Button>

                <Form.Text className="text-muted">
                  <Link to="/privacy_policy_client_data">
                    Why we collect this information.
                  </Link>
                </Form.Text>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
