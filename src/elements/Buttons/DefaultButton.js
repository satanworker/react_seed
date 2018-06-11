import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { styled } from 'styled-components'

class DefaultButton extends PureComponent {
  render() {
    return (
      <Button>{this.props.children}</Button>
    )
  }
}

DefaultButton.propTypes = {
  children: PropTypes.string
}

const Button = styled.button`
  font-weight: bold;
`