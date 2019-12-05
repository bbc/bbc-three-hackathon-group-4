import React from 'react'
import { Row, Col, Container, Navbar } from 'react-bootstrap'

export default function home () {
  return (
  <Container>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Threegions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
    <Row>
      <Col>
        PUT MAP HERE
      </Col>
    </Row>
  </Container>
  )
}
