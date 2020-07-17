import React from 'react'
import ApplyCoupon from './ApplyCoupon'
import {
  Container,
  InfoResume,
  ResmedLogo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from './CheckoutResume.styles'

export default function CheckoutResume() {
  return (
    <Container>
      <InfoResume>
        <ResmedLogo
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/90836a4f885e4033ba48ab4800fbf3db_9366/Tenis_Marathon_Tech_Borgonha_EF4400_EF4400_04_standard.jpg"
          alt="Resmed Logo"
          title="Resmed"
        />
        <ProductTitle>TÊNIS MARATHON TECH</ProductTitle>
        <ProductDescription>
          ESTILO RETRÔ COM MATERIAIS ATUAIS
          <br />
          <span>
            Os anos 70 estão mais vivos do que nunca. Este tênis Marathon Tech é
            inspirado no primeiro tênis adidas para corrida de trilha. O cabedal
            permanece fiel ao modelo original, com mesh de dois tons e
            sobreposições de camurça.
          </span>
        </ProductDescription>
        <ApplyCoupon />
        <ProductPrice>R$ 549,99</ProductPrice>
      </InfoResume>
    </Container>
  )
}
