import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Map from './Map'

class app extends Component {
  render () {
    return (
      <Map/>
    )
  }
}

export default app
