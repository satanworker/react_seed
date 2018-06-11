import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'

import MainLayout from 'src/layouts/MainLayout'

import HomePage from 'src/pages/home/HomePageContainer'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }} />
)

AppRoute.propTypes = {
  component: PropTypes.shape,
  layout: PropTypes.shape
}

export class Routes extends PureComponent {
  render () {
    return (
      <Switch>
        <AppRoute exact path='/' layout={MainLayout} component={HomePage} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
