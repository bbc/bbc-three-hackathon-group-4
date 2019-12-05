import React, { Fragment } from 'react'
import { Row, Col, Navbar } from 'react-bootstrap'
import Modal from './modal'

export default function home () {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Threegions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <Row>
        <Col>
          <Modal />
        </Col>
      </Row>
    </Fragment>
  )
}
