import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBarComponents from './Components/NavBarComponents';
import Name from './Components/NameComponents';
import Description from './Components/DescriptionComponents';
import Image from './Components/ImagesComponents';
import Price from './Components/PriceComponents';
import './App.css';
import Greeting from './Components/Greeting components';


function App() {
  return (
    <div>
      <NavBarComponents/>
        <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Card.Title>   
          <Name />
        </Card.Title>
        <Card.Text>
         <Description />
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Price />
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Nike Product</Card.Link>
        <Card.Link href="#">Similar sneakers</Card.Link>
      </Card.Body>
    </Card>
    <Greeting />
  </div>


  );
}

export default App;
