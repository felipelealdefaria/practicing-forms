import React from 'react'
import { useForm } from 'react-hook-form'
import { schema } from '../../../utils'
import { CreditCardMethod } from './Methods'
import { ButtonPayMethod, ButtonNext, ButtonPrev } from '../Buttons'
import { TitleSection, FlexButtons } from '../FormSteps.styles'
import { Container, WrapperButtons } from './FormPayment.styles'
import { useFormDataContext } from '../../../context/FormDataContext'

export default function FormPayment() {
  const {
    nextStep,
    prevStep,
    payMethod,
    setUserData,
    setPayMethod,
  } = useFormDataContext()
  const { handleSubmit, errors, register } = useForm({
    validationSchema: schema,
  })

  const onSubmit = (data) => {
    console.log(data)
    setUserData((oldData) => ({ ...oldData, payment: data }))
    nextStep()
  }

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
        <FlexButtons>
          <ButtonPrev title="Voltar" onClick={() => prevStep()} />
          {payMethod !== 0 && (
            <ButtonNext title="Próximo" onClick={handleSubmit(onSubmit)} />
          )}
        </FlexButtons>
      </>
    </Container>
  )
}
