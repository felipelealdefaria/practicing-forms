import React from 'react'
import { Col } from 'antd'
import { Container, ColCardForm } from './Main.styles'
import { CheckoutResume, FormSteps } from '../../components'

function Main() {
  return (
    <Container>
      <ColCardForm xs={24} sm={24} md={24} lg={15} xl={15}>
        <FormSteps />
      </ColCardForm>
      <Col xs={24} sm={24} md={24} lg={9} xl={9}>
        <CheckoutResume />
      </Col>
    </Container>
  )
}

export default Main
