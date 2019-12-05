import React, { Fragment } from 'react'
import { Row, Col, Navbar } from 'react-bootstrap'
import Map from './Map'
import Logo from '../assets/logo.png'
import './home.css';

export default function home () {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img className={"logoImg"} src={Logo} width={"60"} height={"60"} />
          Threegions
        </Navbar.Brand>
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
