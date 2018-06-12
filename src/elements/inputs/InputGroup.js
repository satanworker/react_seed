import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import InputError from 'src/elements/forms/InputError'

class InputGroup extends PureComponent {
  render () {
    const { label, error, ...rest } = this.props
    return (
      <Group>
        <Label>{label}</Label>
        <Input error={error} {...rest} />
        {error && error.length && <InputError>{error}</InputError>}
      </Group>
    )
  }
}

InputGroup.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string
}

const Group = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Input = styled.input`
`

export default InputGroup
