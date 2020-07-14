import React from 'react'
import { Container } from '../Methods.styles'
import CreditCardForm from '../CreditCardForm'
import { ButtonPayMethod } from '../../../Buttons'

export default function CreditCardMethod({ errors, register }) {
  return (
    <Container>
      <ButtonPayMethod title="Cartão de Crédito" close />
      <CreditCardForm errors={errors} register={register} />
    </Container>
  )
}
