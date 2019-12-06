import React, { Component } from 'react'
import { Modal, ListGroup, Col, Row } from 'react-bootstrap'
import './modal.css'
import London from '../assets/london.png'
import Ireland from '../assets/northern_ireland.png'
import regionData from '../components/regionData.json'

class modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const demographicImage = this.props.selectedRegion === 'Northern Ireland' ? Ireland : London
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
    {regionData[this.props.selectedRegion] ? regionData[this.props.selectedRegion].Top.map((show, i) => <ListGroup.Item>{i + 1}. {show}</ListGroup.Item>) : null}
                </ListGroup>
              </Col>
            </Row>
          </div>

          <div className={"row-wrapper"}>
            <Row><h4>Demographic Graphics</h4></Row>
            <Row className={"demographics-row"}>
              <Col>
                <img src={demographicImage} width="150" height="150" />
              </Col>
            </Row>
          </div>

          {/* common characteristics of the top 5 shows */}
          <div className={"row-wrapper"}>
            <Row><h4>Common Characteristics</h4></Row>
            <Row className={"common-characteristics-row"}>
              <Col>
                <ListGroup className="common-characteristics">
                  {regionData[this.props.selectedRegion] ? regionData[this.props.selectedRegion].commonChars.map(chars => <ListGroup.Item><span class="badge badge-info">{chars}</span></ListGroup.Item>) : null}
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
