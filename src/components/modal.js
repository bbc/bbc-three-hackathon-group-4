import React, { Component } from 'react'
import { Modal, ListGroup, Col, Row } from 'react-bootstrap'
import './modal.css'
import DemographicImage from '../assets/demographic.png'
import regionData from '../components/regionData.json'

class modal extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    console.log(regionData);
  }

  render () {
    console.log('Modal render with show', this.props.show)
    return (
      <Modal show={this.props.show} onHide={this.props.hide} className="region-modal">
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedRegion}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* percentage change modal content */}
          {/* Top 5 shows in this region */}
          <div className={"row-wrapper"}>
            <Row><h4>Top 5 Programmes</h4></Row>
            <Row className={"top-shows-row"}>
              <Col>
                <ListGroup className="top-shows">
                  <ListGroup.Item>1. RuPauls Drag Race UK</ListGroup.Item>
                  <ListGroup.Item>2. Hometown: A Killing</ListGroup.Item>
                  <ListGroup.Item>3. The Young Offenders</ListGroup.Item>
                  <ListGroup.Item>4. Tagged: Life On Lockdown</ListGroup.Item>
                  <ListGroup.Item>5. Ladhood</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>

          <div className={"row-wrapper"}>
            <Row><h4>Demographic Graphics</h4></Row>
            <Row className={"demographics-row"}>
              <Col>
                <img src={DemographicImage} width="150" height="150" />
              </Col>
            </Row>
          </div>

          {/* common characteristics of the top 5 shows */}
          <div className={"row-wrapper"}>
            <Row><h4>Common Characteristics</h4></Row>
            <Row className={"common-characteristics-row"}>
              <Col>
                <ListGroup className="common-characteristics">
                  <ListGroup.Item>Comedy</ListGroup.Item>
                  <ListGroup.Item>Female lead</ListGroup.Item>
                  <ListGroup.Item>30 minute run time</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>

          {/* google trends? twitter api? scrolling text? trending in this region? */}


        </Modal.Body>
      </Modal>
    )
  }
}

export default modal
