import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import File from "./File";
import "./adminproduct.css";

export default class AddProduct extends Component {
  state = {
    product: [],
    title: "",
    price: "",
    description: "",
    categories: "",
    images: [],
    validated: false,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    success: false
  };

  putDataToDB = (title, price, description, categories) => {
    console.log(this.state);
    axios
      .post("http://localhost:8000/api/addproduct", {
        title: this.state.title,
        price: this.state.price,
        description: this.state.description,
        categories: this.state.categories,
        images: this.state.images
      })
      .then(res => {
        this.setState({
          title: "",
          price: "",
          description: "",
          categories: "",
          images: [],
          validated: false,
          intervalIsSet: false,
          idToDelete: null,
          idToUpdate: null,
          objectToUpdate: null,
          success: true
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
    this.setState({ [e.target.name]: e.target.value });
    this.putDataToDB(this.state);
  };

  imagesHandler = images => {
    this.setState({
      images: images
    });
    console.log(this.state);
  };

  render() {
    const { title, price, description, categories } = this.state;
    return (
      <Container style={{ paddingTop: "60px", paddingBottom: "150px" }}>
        <Row>
          <div style={{ color: "green" }}>
            {this.state.success === true ? "Product added succesfully" : ""}
          </div>
          <h2>Add Product</h2>
        </Row>

        <Row>
          <File
            imagesHandler={images => this.imagesHandler(images)}
            reset={this.state.formSuccess}
          />
        </Row>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <label htmlFor="title">Product Title</label>
              <input
                className="form-control"
                type="text"
                value={title}
                id="title"
                name="title"
                required
                onChange={this.handleChange}
                placeholder="Enter Product Title"
              />
            </Col>
            <Col>
              <label htmlFor="price">Product Price in XAF</label>
              <input
                className="form-control"
                type="number"
                value={price}
                id="price"
                name="price"
                onChange={this.handleChange}
                required
                placeholder="Enter Product Price"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="">Product Category</label>
              <input
                className="form-control"
                type="text"
                value={categories}
                id="categories"
                name="categories"
                onChange={this.handleChange}
                required
                placeholder="Enter Product Categories"
              />
            </Col>
          </Row>

          <label htmlFor="message">Product Description</label>
          <textarea
            className="form-control"
            rows="5"
            value={description}
            id="description"
            name="description"
            onChange={this.handleChange}
            required
            placeholder="Enter Product Description"
          />

          <button
            type="submit"
            className="btn btn-secondary"
            style={{ marginTop: "20px" }}
          >
            Add Product
          </button>
        </form>
        <div style={{ color: "green" }}>
          {this.state.success === true ? "Product added succesfully" : ""}
        </div>
      </Container>
    );
  }
}
