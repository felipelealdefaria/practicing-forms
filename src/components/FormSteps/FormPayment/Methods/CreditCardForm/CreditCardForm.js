import { Col } from 'antd'
import Cards from 'react-credit-cards'
import React, { useState } from 'react'
import { BasicInput } from '../../../Inputs'
import { Form, FlexInput, Container, TitleForm } from './CreditCardForm.styles'

export default function CreditCardForm({ errors, register }) {
  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  })

  const handleInputFocus = (e) => {
    setCard((old) => ({ ...old, focus: e.target.name }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCard((old) => ({ ...old, [name]: value }))
  }

  return (
    <Container>
      <TitleForm>Dados do cartão:</TitleForm>
      <Form>
        <Col span={12}>
          <BasicInput
            type="text"
            name="name"
            errors={errors}
            value={card.name}
            register={register}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            placeholder="LUIS F L FARIA"
            label="Nome impresso no cartão"
          />

          <BasicInput
            name="number"
            type="tel"
            errors={errors}
            value={card.number}
            register={register}
            label="Número do cartão"
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            placeholder="0000 0000 0000 0000"
          />

          <FlexInput>
            <BasicInput
              width={50}
              type="tel"
              name="expiry"
              errors={errors}
              placeholder="00/00"
              value={card.expiry}
              register={register}
              label="Validade do Cartão"
              onFocus={handleInputFocus}
              onChange={handleInputChange}
            />

            <BasicInput
              width={50}
              name="cvc"
              type="tel"
              label="CVC"
              errors={errors}
              value={card.cvc}
              placeholder="XXX"
              register={register}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
            />
          </FlexInput>
        </Col>
        <Col span={12}>
          <Cards
            cvc={card.cvc}
            name={card.name}
            expiry={card.expiry}
            focused={card.focus}
            number={card.number}
          />
        </Col>
      </Form>
    </Container>
  )
}
