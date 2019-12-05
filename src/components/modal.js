import React from 'react'
import { Modal, ListGroup, Col, Row } from 'react-bootstrap'
import './modal.css'
import DemographicImage from '../assets/demographic.png'

export default function home () {
  return (
    <Modal.Dialog className="region-modal">
      <Modal.Header closeButton>
        <Modal.Title>Selected region - breakdown</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* percentage change modal content */}

        {/* Top 5 shows in this region */}
        <Row>
          <Col>
            <ListGroup className="top-shows">
              <ListGroup.Item>1. RuPauls Drag Race UK</ListGroup.Item>
              <ListGroup.Item>2. Hometown: A Killing</ListGroup.Item>
              <ListGroup.Item>3. The Young Offenders</ListGroup.Item>
              <ListGroup.Item>4. Tagged: Life On Lockdown</ListGroup.Item>
              <ListGroup.Item>5. Ladhood</ListGroup.Item>
            </ListGroup>
          </Col>
          {/* <Col sm={4}>
            <img src={DemographicImage} width="200" height="200" />
          </Col> */}
        </Row>

        <Row>
          <Col>
            <img src={DemographicImage} width="200" height="200" />
          </Col>
        </Row>
        {/* common characteristics of the top 5 shows */}
        

        {/* google trends? twitter api? scrolling text? trending in this region? */}


      </Modal.Body>
    </Modal.Dialog>
  )
}
