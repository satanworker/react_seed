import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { isUserLoggedIn } from 'src/store/user'
import DefaultHeader from 'src/modules/navigation/header/containers/DefaultHeader'

class UserLayout extends PureComponent {
  render () {
    const { isUserLoggedIn } = this.props

    if (!isUserLoggedIn) {
      return <Redirect to='/' />
    }

    return (
      <Wrapper>
        <DefaultHeader />
        {this.props.children}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 100%
`

const mapStateToProps = ({ user }) => ({
  user,
  isUserLoggedIn: isUserLoggedIn(user)
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout)
