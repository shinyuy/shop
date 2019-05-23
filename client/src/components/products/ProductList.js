import React, { Component } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    axios
      .get("http://localhost:8000/api/getproduct")
      .then(res => this.setState({ data: res.data }))
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.state.data);
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Row>
          {data.length <= 0
            ? `Loading Products...`
            : data.data.map(function(dat, i) {
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
                          {dat.description}
                          <br />
                          {dat.price}
                        </Card.Text>
                        <Button variant="primary" style={{marginRight: '4px'}}>Details</Button>
                        <Button variant="primary">Add to Cart</Button>
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
