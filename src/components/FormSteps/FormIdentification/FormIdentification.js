/* eslint-disable react/button-has-type */
import React from 'react'
import { useForm } from 'react-hook-form'
import { BasicInput } from '../Inputs'
import { schema } from '../../../utils'
import { useFormDataContext } from '../../../context/FormDataContext'
import {
  TitleSection,
  Form,
  ColMobile,
  FlexInput,
  FlexButton,
  ButtonStep,
} from './FormIdentification.styles'

export default function FormIdentification() {
  const { nextStep, setUserData } = useFormDataContext()
  const { handleSubmit, errors, register } = useForm({
    validationSchema: schema,
  })

  const onSubmit = (data) => {
    console.log(data)
    setUserData(data)
    nextStep()
  }

  return (
    <Form>
      <TitleSection>Identificação</TitleSection>
      <>
        <FlexInput>
          <BasicInput
            width={50}
            type="text"
            name="fullName"
            errors={errors}
            register={register}
            label="Nome completo"
            placeholder="Nome completo"
          />

          <BasicInput
            width={50}
            name="cpf"
            type="text"
            label="CPF"
            errors={errors}
            register={register}
            placeholder="000.0000.000-00"
          />
        </FlexInput>
        <FlexInput>
          <BasicInput
            width={50}
            type="email"
            name="email"
            label="E-mail"
            errors={errors}
            register={register}
            placeholder="Email"
          />

          <BasicInput
            width={50}
            type="email"
            errors={errors}
            register={register}
            name="confirmEmail"
            label="Confirmação do e-mail"
            placeholder="Confirmar e-mail"
          />
        </FlexInput>
      </>
      <TitleSection>Endereço de Entrega</TitleSection>
      <FlexInput>
        <BasicInput
          type="text"
          name="cep"
          width={35}
          label="CEP"
          errors={errors}
          register={register}
          placeholder="000000-000"
        />

        <BasicInput
          width={65}
          type="text"
          name="street"
          errors={errors}
          register={register}
          label="Logradouro"
          placeholder="Rua/Avenida..."
        />
      </FlexInput>

      <FlexInput>
        <ColMobile>
          <BasicInput
            width={20}
            colMobile={27}
            type="text"
            label="Número"
            name="number-street"
            errors={errors}
            register={register}
            placeholder="Número"
          />

          <BasicInput
            width={80}
            type="text"
            colMobile={70}
            errors={errors}
            register={register}
            name="complement"
            label="Complemento"
            placeholder="Complemento"
          />
        </ColMobile>

        <BasicInput
          width={30}
          type="text"
          errors={errors}
          register={register}
          label="Bairro"
          name="neighborhood"
          placeholder="Bairro"
        />
      </FlexInput>

      <FlexInput>
        <ColMobile>
          <BasicInput
            width={75}
            type="text"
            name="city"
            label="Cidade"
            colMobile={75}
            errors={errors}
            register={register}
            placeholder="Cidade"
          />

          <BasicInput
            width={25}
            name="uf"
            label="UF"
            type="text"
            colMobile={22}
            errors={errors}
            register={register}
            placeholder="UF"
          />
        </ColMobile>

        <BasicInput
          width={80}
          type="text"
          name="phone"
          label="Celular"
          errors={errors}
          register={register}
          placeholder="Celular"
        />
      </FlexInput>
      <FlexButton>
        <ButtonStep type="primary" onClick={handleSubmit(onSubmit)}>
          Próximo
        </ButtonStep>
      </FlexButton>
    </Form>
  )
}
