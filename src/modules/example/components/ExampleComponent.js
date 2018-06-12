import React, { PureComponent } from 'react'
import styled from 'styled-components'

import ExampleForm from 'src/modules/example/components/ExampleForm'

class ExampleComponent extends PureComponent {
  constructor (props) {
    super(props)

    this.onBtnClick = this.onBtnClick.bind(this)
  }

  onBtnClick () {
    console.log('Clicked')
  }

  render () {
    return (
      <Container>
        <Title>Example component</Title>
        <ExampleForm onSend={this.onBtnClick} />
      </Container>
    )
  }
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding-top: 40px;
`

const Title = styled.p`
  margin-bottom: 20px;
`

export default ExampleComponent
