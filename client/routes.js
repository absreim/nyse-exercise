import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {CompaniesList} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/companies" component={CompaniesList} />
        <Redirect to="/companies" />
      </Switch>
    )
  }
}

export default Routes
