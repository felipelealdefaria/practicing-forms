import React from 'react'
import ApplyCoupon from './ApplyCoupon'
import {
  Container,
  InfoResume,
  ResmedLogo,
  ProductTitle,
  ProductPrice,
} from './CheckoutResume.styles'

export default function CheckoutResume() {
  return (
    <Container>
      <InfoResume>
        <ResmedLogo
          src="https://dlmpdvi9499e9.cloudfront.net/residenciamedica/img/logo.png"
          alt="Resmed Logo"
          title="Resmed"
        />
        <ProductTitle>Extensivo Sanar Residência Médica - R1</ProductTitle>
        <ApplyCoupon />
        <ProductPrice>R$ 1.919,00</ProductPrice>
      </InfoResume>
    </Container>
  )
}
