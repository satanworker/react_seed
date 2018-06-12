import React, { PureComponent } from 'react'
import styled from 'styled-components'

import ExampleComponent from 'src/modules/example/components/ExampleComponent'

class HomePageComponent extends PureComponent {
  render () {
    return (
      <Container>
        <h1>Here goes home page</h1>
        <ExampleComponent />
      </Container>
    )
  }
}

const Container = styled.div``

export default HomePageComponent
