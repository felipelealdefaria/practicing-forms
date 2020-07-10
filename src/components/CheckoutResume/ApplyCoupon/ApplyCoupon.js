import React from 'react'
import { Container, Text, InputCoupon, ApplyButton } from './ApplyCoupon.styles'

function ApplyCoupon() {
  return (
    <Container>
      <Text>Cupom:</Text>
      <InputCoupon />
      <ApplyButton>Aplicar</ApplyButton>
    </Container>
  )
}

export default ApplyCoupon
