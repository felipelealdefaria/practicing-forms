import React from 'react'
import { Steps, message } from 'antd'
import { useForm } from 'react-hook-form'
import { schema } from '../../utils'
import FormPayment from './FormPayment'
import PurchaseResume from './PurchaseResume'
import { ButtonNext, ButtonPrev } from './Buttons'
import FormIdentification from './FormIdentification'
import { useFormDataContext } from '../../context/FormDataContext'
import {
  Container,
  StepsWrapper,
  FormWrapper,
  FlexButtons,
} from './FormSteps.styles'

const { Step } = Steps

export default function FormSteps() {
  const {
    stepCurrent,
    nextStep,
    prevStep,
    setUserData,
    userData,
  } = useFormDataContext()
  const { handleSubmit, errors, register } = useForm({
    validationSchema: schema,
  })

  const steps = [
    {
      title: 'Dados',
      content: <FormIdentification errors={errors} register={register} />,
    },
    {
      title: 'Pagamento',
      content: <FormPayment errors={errors} register={register} />,
    },
    {
      title: 'Revisão',
      content: <PurchaseResume />,
    },
  ]

  const onSubmit = (data) => {
    if (stepCurrent === 0) {
      console.log('user', data)
      setUserData((oldData) => ({ ...oldData, user: data }))
      nextStep()
    } else {
      console.log('payment', data)
      setUserData((oldData) => ({ ...oldData, payment: data }))
      nextStep()
    }
    // setUserData('teste')
    console.log(userData)
  }

  return (
    <Container>
      <StepsWrapper>
        <Steps current={stepCurrent}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className="steps-content">
          <FormWrapper>{steps[stepCurrent].content}</FormWrapper>
        </div>

        <FlexButtons>
          {stepCurrent > 0 && (
            <ButtonPrev title="Voltar" onClick={() => prevStep()} />
          )}
          {stepCurrent < steps.length - 1 && (
            <ButtonNext title="Próximo" onClick={handleSubmit(onSubmit)} />
          )}
          {stepCurrent === steps.length - 1 && (
            <ButtonNext
              title="Finalizar"
              onClick={() => message.success('Processing complete!')}
            />
          )}
        </FlexButtons>
      </StepsWrapper>
    </Container>
  )
}
