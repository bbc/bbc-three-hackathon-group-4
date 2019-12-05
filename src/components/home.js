import React, { Fragment } from 'react'
import { Row, Col, Container, Navbar } from 'react-bootstrap'
import  Map from './Map'

export default function home () {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Threegions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <Row>
        <Col>
          <Map/>
        </Col>
      </Row>
    </Fragment>
  )
}
