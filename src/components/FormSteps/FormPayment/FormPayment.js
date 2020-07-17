import React from 'react'
import { CreditCardMethod } from './Methods'
import { ButtonPayMethod } from '../Buttons'
import { TitleSection } from '../FormSteps.styles'
import { Container, WrapperButtons } from './FormPayment.styles'
import { useFormDataContext } from '../../../context/FormDataContext'

export default function FormPayment({ errors, register }) {
  const { payMethod, setPayMethod } = useFormDataContext()

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
      <>
        {/* {payMethod === 1 && <BoletoMethod />} */}
        {payMethod === 2 && (
          <CreditCardMethod errors={errors} register={register} />
        )}
        {/* {payMethod === 3 && <CreditCardBoletoMethod errors={errors} register={register} />}
        {payMethod === 4 && <TwoCreditCardMethod errors={errors} register={register} />}
        {payMethod === 5 && <FinancingMethod />} */}
      </>
    </Container>
  )
}
