import React from 'react'
import { Steps } from 'antd'
// import { useForm } from 'react-hook-form'
// import { schema } from '../../utils'
import FormPayment from './FormPayment'
import PurchaseResume from './PurchaseResume'
import FormIdentification from './FormIdentification'
import { useFormDataContext } from '../../context/FormDataContext'
import { Container, StepsWrapper, FormWrapper } from './FormSteps.styles'

const { Step } = Steps

export default function FormSteps() {
  const { stepCurrent } = useFormDataContext()
  // const { handleSubmit } = useForm({
  //   validationSchema: schema,
  // })

  const steps = [
    {
      title: 'Dados',
      content: <FormIdentification />,
    },
    {
      title: 'Pagamento',
      content: <FormPayment />,
    },
    {
      title: 'Revisão',
      content: <PurchaseResume />,
    },
  ]

  // const onSubmit = (data) => {
  //   console.log(data)
  // }

  // const handleNextStepSubmit = () => {
  //   const data = handleSubmit(onSubmit)
  //   console.log(data)
  //   nextStep()
  // }

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

        {/* <FlexButtons>
          {stepCurrent > 0 && (
            <ButtonPrev title="Voltar" onClick={() => prevStep()} />
          )}
          {stepCurrent < steps.length - 1 && (
            <ButtonNext title="Próximo" onClick={() => handleNextStepSubmit()} />
          )}
          {stepCurrent === steps.length - 1 && (
            <ButtonNext title="Finalizar" onClick={handleSubmit(onSubmit)} />
          )}
        </FlexButtons> */}
      </StepsWrapper>
    </Container>
  )
}
