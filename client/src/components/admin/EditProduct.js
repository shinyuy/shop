import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import File from "./File";
import "./adminproduct.css";

export default class EditProduct extends Component {
  state = {
    data: null,
    title: null,
    price: null,
    description: null,
    categories: null,
    images: []
  }

  componentDidMount() {
    let id = this.props.match.params._id;
    axios.get("http://localhost:8000/api/getproduct/" + id)
      .then(res => {
        this.setState({
          data: res.data,
          title: res.data.data.title,
          price: res.data.data.price,
          description: res.data.data.description,
          categories: res.data.data.categories,
          images:res.data.data.images
        })
        console.log(this.state.data)
      });
  }

  editData = (e) => {
    let id = this.props.match.params._id;
    axios.post("http://localhost:8000/api/updateproduct/" + id, {
      title: this.state.title,
      price: this.state.price,
      description: this.state.description,
      categories: this.state.categories,
      images: this.state.images
    })
      .then(res => console.log(res.data));
    setTimeout(() => {
      this.props.history.push('/products');
    }, 2000);

  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
    console.log(this.state);
}

handleSubmit = (e) => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
  this.editData(this.state);
}



  render() {
    const data = this.state.data ? (
      <div>
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
             <Col>
                <label htmlFor="title">Product Image URL</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.images}
                  id="title"
                  name="title"
                  onChange={this.handleChange}
                  placeholder="Enter Product Title"
                />
              </Col>
          </Row>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <label htmlFor="title">Product Title</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.title}
                  id="title"
                  name="title"
                  onChange={this.handleChange}
                  placeholder="Enter Product Title"
                />
              </Col>
              <Col>
                <label htmlFor="price">Product Price in XAF</label>
                <input
                  className="form-control"
                  type="number"
                  value={this.state.price}
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
                  value={this.state.categories}
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
              value={this.state.description}
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
              onClick={this.editData}
            >
              Edit Product
            </button>
          </form>
          <div style={{ color: "green" }}>
            {this.state.success === true ? "Product added succesfully" : ""}
          </div>
        </Container>
        );
      </div>
    ) : (
      <div>Loading Product Information...</div>
    )
    return(
      <div>
        {data}
      </div>
    )
  }
}
