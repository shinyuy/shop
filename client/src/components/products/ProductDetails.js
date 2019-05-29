import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

export default class ProductDetails extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    let id = this.props.match.params._id;
    axios.get("http://localhost:8000/api/getproduct/" + id)
      .then(res => {
        this.setState({
          data: res.data
        })
        console.log(this.state.data)
      });
  }

  

  render() {
    const data = this.state.data ? (
      <div>
      <Card style={{ width: "50rem", maxHeight: '60rem', margin: "50px" }}>
         <Row> 
           <Col>
             <Card.Img variant="top" src={this.state.data.data.images[0].url} />
           </Col>
           <Col>
             <Card.Body>
               <Card.Text>
                 <h3 style={{ paddingBottom: '10rem'}}>{this.state.data.data.title}</h3>
                 <h3>{this.state.data.data.price} XAF</h3>
                 <p style={{ paddingBottom: '4rem'}}>{this.state.data.data.description}</p>
                 <h5>Category: {this.state.data.data.categories}</h5>
                 <h5>Designer: Gucci</h5>
               </Card.Text>
                <Button variant="primary" style={{ marginRight: '2rem'}}>Add to Cart</Button>
                <Button variant="primary">Remove from Cart</Button>
             </Card.Body>
           </Col>
         </Row>
        </Card>
       
     </div>
    ) :
    (
      <div>Loading Product Information...</div>
    )
    return (
       <div>
         {data}
       </div>
    );
  }
}
