import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class MainLayout extends PureComponent {
  render () {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.shape
}

const Wrapper = styled.div`
  height: 100%
`

export default MainLayout
