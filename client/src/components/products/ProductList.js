import React, { Component } from "react";
import axios from "axios";
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
    objectToUpdate: null,
    addSuccessStatus: false
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
  };

  
  addToCart = (dat) => {
     let _id = dat._id
    console.log(_id)
     axios.post(`http://localhost:3000/api/addToCart?productId=${_id}`)
     .then(res => {
       this.setState({
         addSuccessStatus: true
       })
     })
  };

  render() {
    console.log(this.props)
    const { data } = this.state;
    return (
      <div className='products'>
          {data.length <= 0
            ? `Loading Products...`
            : data.data.map(function(dat, i) {
                return (
                  <div key={i}>
                    <Card className='product-card'>
                      <Card.Img variant="top" src={dat.images[0].url} style={{height: '400px'}} />
                      <Card.Body>
                        <Card.Title>{dat.title}</Card.Title>
                        <Card.Text>
                          {dat.price} XAF
                          <br />
                          {dat.description} 
                        </Card.Text>
                        <Button variant="primary" style={{marginRight: '4px'}}><Link to={'/product/' + dat._id}>Details</Link></Button>
                        <Button variant="primary" onClick={
                          this.props.user.isAuth ? 
                          ()=> this.addToCart(dat)
                           :
                           console.log('Not authenticated')
                        }>Add to Cart</Button>
                      </Card.Body>
                    </Card>
                  {this.state.addSuccessStatus === true? alert('Item added successfully'): ''}
                  </div>
                );
              }, this)}
      </div>
    );
  }
}
