import React from "react";
import girl from '../../resources/girl.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import '../layout/layout.css';

function Home(props) {
  return (
    <div>
      <Jumbotron className="home" style={{backgroundImage: `url(${girl})`}}>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for<br/>
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
