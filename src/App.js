import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { withRouter } from 'react-router-dom'

import theme from './utils/theme'

import Router from 'src/router'

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  loadSession: PropTypes.func,
  isUserInitializing: PropTypes.bool
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
