import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './home'
import About from './about'
import PageNotFound from './page-not-found'

class app extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}

export default app
