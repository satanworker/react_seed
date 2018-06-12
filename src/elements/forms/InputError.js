import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop } from 'styled-tools'

class InputError extends PureComponent {
  render () {
    return (
      <Element activeStyle={{ color: '#ea7352' }}>
        {this.props.children}
      </Element>
    )
  }
}

InputError.propTypes = {
  children: PropTypes.node
}

const Element = styled.p`
  display: inline-block;
  width: 100%;
  padding: 6px 0px 0px 10px;
  font-size: 11px;
  color: ${prop('theme.colors.orange')};
`

export default InputError
