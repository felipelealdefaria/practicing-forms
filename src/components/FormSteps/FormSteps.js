import React, { useState } from 'react'
import { Steps, Button } from 'antd'
import FormPayment from './FormPayment'
import PurchaseResume from './PurchaseResume'
import FormIdentification from './FormIdentification'
import { Container, StepsWrapper, FormWrapper } from './FormSteps.styles'

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
  const [current, setCurrent] = useState(0)

  const next = () => {
    const aux = current + 1
    setCurrent(aux)
  }

  const prev = () => {
    const aux = current - 1
    setCurrent(aux)
  }

  return (
    <Container>
      <StepsWrapper>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className="steps-content">
          <FormWrapper>{steps[current].content}</FormWrapper>
        </div>

        <div className="steps-action">
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
        </div>
      </StepsWrapper>
    </Container>
  )
}
