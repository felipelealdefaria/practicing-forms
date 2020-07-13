import React from 'react'
import { CreditCardMethod } from './Methods'
import { ButtonPrev, ButtonNext, ButtonPayMethod } from '../Buttons'
import { FlexButtons, TitleSection } from '../FormSteps.styles'
import { Container, WrapperButtons } from './FormPayment.styles'
import { useFormDataContext } from '../../../context/FormDataContext'

export default function FormPayment() {
  const { prevStep, nextStep, payMethod, setPayMethod } = useFormDataContext()

  return (
    <Container>
      <TitleSection>Método de Pagamento</TitleSection>
      {payMethod === 0 && (
        <WrapperButtons>
          <ButtonPayMethod
            title="Boleto Bancário"
            onClick={() => setPayMethod(1)}
          />
          <ButtonPayMethod
            title="Cartão de Crédito"
            onClick={() => setPayMethod(2)}
          />
          <ButtonPayMethod
            title="Cartão de Crédito + Boleto"
            onClick={() => setPayMethod(3)}
          />
          <ButtonPayMethod
            title="2 Cartões de Crédito"
            onClick={() => setPayMethod(4)}
          />
          <ButtonPayMethod
            title="Financiamento"
            onClick={() => setPayMethod(5)}
          />
        </WrapperButtons>
      )}

      {/* {payMethod === 1 && <BoletoMethod />} */}
      {payMethod === 2 && <CreditCardMethod />}
      {/* {payMethod === 3 && <CreditCardBoletoMethod />}
      {payMethod === 4 && <TwoCreditCardMethod />}
      {payMethod === 5 && <FinancingMethod />} */}

      <FlexButtons>
        <ButtonPrev title="Voltar" onClick={() => prevStep()} />
        {payMethod !== 0 && (
          <ButtonNext title="Próximo" onClick={() => nextStep()} />
        )}
      </FlexButtons>
    </Container>
  )
}
