import React from 'react'
import { Container } from '../Methods.styles'
import CreditCardForm from '../CreditCardForm'
import { ButtonPayMethod } from '../../../Buttons'

export default function CreditCardMethod() {
  return (
    <Container>
      <ButtonPayMethod title="Cartão de Crédito" close />
      <CreditCardForm />
    </Container>
  )
}
