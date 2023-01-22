import React from "react";
import "./Activities.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import italy2023 from '../../assets/italy2023.jpg'
import iraq2021 from '../../assets/iraq2021.jpg'
import dubai2021 from '../../assets/dubai2021.jpg'
import iraq2018 from '../../assets/iraq2018.jpg'

export default function Activities() {
  return (
    <Container>
    <Row className="parent">
      <Col className="card1" xs>  <Card style={{ width: '21rem' }}>
     <Card.Img variant="top" className="card-img" src={italy2023} />
     <Card.Body>
       <Card.Title>Italy</Card.Title>
       <Card.Text>
       Advanced course in zygomatic. Trans Nasal & pterygoid implant placement in Italy 🇮🇹 Modena <span className="year firstspan">2023</span>
       </Card.Text>
       <Link to="italy2023"><Button className="activity-btn">More Details</Button></Link>
     </Card.Body>
   </Card></Col>

      <Col className="card2" xs={{ order: 12 }}>  <Card style={{ width: '21rem' }}>
     <Card.Img variant="top" className="card-img" src={iraq2021} />
     <Card.Body>
       <Card.Title>Iraq</Card.Title>
       <Card.Text>
       Advanced bone and soft tissue management course <span className="year">2021</span>
       </Card.Text>
       <Link to="iraq2021"><Button className="activity-btn">More Details</Button></Link>
     </Card.Body>
   </Card></Col>

      <Col className="card3" xs={{ order: 1 }}>  <Card style={{ width: '21rem' }}>
     <Card.Img variant="top" className="card-img"  src={dubai2021} />
     <Card.Body>
       <Card.Title>UAE</Card.Title>
       <Card.Text>
       Advanced course in Hard and Soft Tissue Management in Dubai<span className="year">2021</span>
       </Card.Text>
       <Link to="uae2021"><Button className="activity-btn">More Details</Button></Link>
     </Card.Body>
   </Card></Col>

   <Col className="card4" xs={{ order: 1 }}>  <Card style={{ width: '21rem' }}>
     <Card.Img variant="top" className="card-img" src={iraq2018} />
     <Card.Body>
       <Card.Title>Iraq</Card.Title>
       <Card.Text>
       Annual dental implantology conference<br/> <br/> <span className="year">2018</span>
       </Card.Text>
       <Link to="Iraq2018"><Button className="activity-btn">More Details</Button></Link>
     </Card.Body>
   </Card></Col>
    </Row>
  </Container>
  









  );
}
