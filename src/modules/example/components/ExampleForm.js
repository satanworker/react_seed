import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Yup from '../../../utils/yup'
import { t } from '../../../locales/i18n'

import BaseForm from 'src/elements/forms/BaseForm'
import InputGroup from 'src/elements/inputs/InputGroup'

class ExampleForm extends PureComponent {
  constructor (props) {
    super(props)

    this.validationSchema = this.validationSchema.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  validationSchema () {
    return Yup.object().shape({
      email: Yup.string().email(t('inputs.errors.email')).required(t('inputs.errors.required')),
      password: Yup.string().required(t('inputs.errors.required'))
    })
  }

  handleSubmit (values) {
    this.props.onSend(values)
  }

  renderForm (props) {
    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleChange,
      handleSubmit,
      handleBlur
    } = props
    return (
      <form onSubmit={handleSubmit}>
        <InputGroup
          name='email'
          type='text'
          value={values['email']}
          error={errors['email'] && touched['email'] ? errors['email'] : null}
          label='e-mail'
          onBlur={handleBlur}
          onChange={handleChange} />
        <InputGroup
          name='password'
          value={values['password']}
          error={errors['password'] && touched['password'] ? errors['password'] : null}
          label='password'
          type='password'
          onBlur={handleBlur}
          onChange={handleChange} />

        <ButtonContainer>
          <Button type='submit' disabled={isSubmitting} size={'largest'}>Submit</Button>
        </ButtonContainer>
      </form>
    )
  }

  render () {
    return (
      <BaseForm
        initialValues={this.props.values}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
        render={this.renderForm}
      />
    )
  }
}

ExampleForm.propTypes = {
  onSend: PropTypes.func,
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  })
}

ExampleForm.defaultProps = {
  values: {
    email: '',
    password: ''
  }
}

const Button = styled.button``

const ButtonContainer = styled.div`
  margin-bottom: 23px;
`

export default ExampleForm
