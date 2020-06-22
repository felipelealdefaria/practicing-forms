import React from 'react'
import { Col } from 'antd'
import { Container, ColCardForm } from './Main.styles'
import { CheckoutResume, FormSteps } from '../../components'

function Main() {
  return (
    <Container>
      <ColCardForm span={15}>
        <FormSteps />
      </ColCardForm>
      <Col span={9}>
        <CheckoutResume />
      </Col>
    </Container>
  )
}

export default Main
