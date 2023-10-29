import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <PeopleFill size={100} />
        <h1>Multiple Users</h1>
        <h5>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</h5>
      </Col>

      <Col xs={4}>
        <FileEarmarkTextFill size={100} />
        <h1>Contact Details</h1>
        <p>For each contact, you can save their name, address, and phone number.</p>
      </Col>

      <Col xs={4}>
        
      </Col>
    </Row>
  </Container>
);

export default Landing;
