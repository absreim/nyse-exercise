import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {CompaniesList, Upload} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/companies" component={CompaniesList} />
        <Route path="/upload" component={Upload} />
        <Redirect to="/companies" />
      </Switch>
    )
  }
}

export default Routes
