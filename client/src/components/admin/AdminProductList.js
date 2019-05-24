import React, { Component } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  state = {
    data: [],
    title: null,
    price: null,
    categories: null,
    images: [],
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 6000000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    axios
      .get("http://localhost:8000/api/getproduct")
      .then(res => this.setState({ data: res.data}))
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.state.data);
  };

  render() {
    //const { data } = this.state;
    return (
      <div>
        <Row>
          {this.state.data.length <= 0
            ? `Loading Products...`
            : this.state.data.data.map(function(dat, i) {
                return (
                  <div key={i}>
                    <Card
                      style={{
                        width: "18rem",
                        maxHeight: "70rem",
                        margin: "50px"
                      }}
                    >
                      <Card.Img variant="top" src={dat.images[0].url} />
                      <Card.Body>
                        <Card.Title>{dat.title}</Card.Title>
                        <Card.Text>
                          {dat.price} XAF
                          <br />
                          {dat.description} 
                        </Card.Text>
                        <Button variant="primary" style={{marginRight: '2px'}}><Link to={'/admin/product/' + dat._id}>Details</Link></Button>
                        <Button variant="primary" style={{marginRight: '2px'}}><Link to={'/admin/editproduct/' + dat._id}>Edit</Link></Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
        </Row>
      </div>
    );
  }
}
