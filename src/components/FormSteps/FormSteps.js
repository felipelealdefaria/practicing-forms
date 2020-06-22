import React from 'react'
import { Steps } from 'antd'
import FormPayment from './FormPayment'
import PurchaseResume from './PurchaseResume'
import FormIdentification from './FormIdentification'
import { Container, StepsWrapper, FormWrapper } from './FormSteps.styles'
import { useFormDataContext } from '../../context/FormDataContext'

const { Step } = Steps

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

export default function FormSteps() {
  const { stepCurrent } = useFormDataContext()
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

        {/* <div className="steps-action">
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Voltar
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Próximo
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="submit">Finalizar</Button>
          )}
        </div> */}
      </StepsWrapper>
    </Container>
  )
}
