/* eslint-disable react/button-has-type */
import React from 'react'
import { BasicInput } from '../Inputs'
import { TitleSection } from '../FormSteps.styles'
import { useFormDataContext } from '../../../context/FormDataContext'
import { Form, ColMobile, FlexInput } from './FormIdentification.styles'

export default function FormIdentification({ errors, register }) {
  const { userData } = useFormDataContext()
  const { user } = userData

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
            defaultValue={user?.fullName}
            label="Nome completo"
            placeholder="Nome completo"
          />

          <BasicInput
            width={50}
            name="cpf"
            type="text"
            label="CPF"
            errors={errors}
            // defaultValue={user?.cpf}
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
            defaultValue={user?.email}
            register={register}
            placeholder="Email"
          />

          <BasicInput
            width={50}
            type="email"
            errors={errors}
            register={register}
            name="confirmEmail"
            // defaultValue={user?.confirmEmail}
            label="Confirmação do e-mail"
            placeholder="Confirmar e-mail"
          />
        </FlexInput>
      </>
      <TitleSection>Endereço de Entrega</TitleSection>
      <FlexInput>
        <BasicInput
          type="text"
          name="zipCode"
          width={35}
          label="CEP"
          errors={errors}
          register={register}
          defaultValue={user?.zipCode}
          placeholder="000000-000"
        />

        <BasicInput
          width={65}
          type="text"
          name="street"
          errors={errors}
          label="Logradouro"
          defaultValue={user?.street}
          register={register}
          placeholder="Rua/Avenida..."
        />
      </FlexInput>

      <FlexInput>
        <ColMobile>
          <BasicInput
            width={20}
            type="text"
            colMobile={27}
            label="Número"
            errors={errors}
            name="numberStreet"
            register={register}
            placeholder="Número"
            defaultValue={user?.numberStreet}
          />

          <BasicInput
            width={80}
            type="text"
            colMobile={70}
            errors={errors}
            register={register}
            name="complement"
            label="Complemento"
            defaultValue={user?.complement}
            placeholder="Complemento"
          />
        </ColMobile>

        <BasicInput
          width={30}
          type="text"
          label="Bairro"
          errors={errors}
          register={register}
          name="neighborhood"
          placeholder="Bairro"
          defaultValue={user?.neighborhood}
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
            defaultValue={user?.city}
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
            defaultValue={user?.uf}
            placeholder="UF"
            register={register}
          />
        </ColMobile>

        <BasicInput
          width={80}
          type="text"
          name="phone"
          label="Celular"
          errors={errors}
          defaultValue={user?.phone}
          register={register}
          placeholder="Celular"
        />
        {/* {userData && userData} */}
      </FlexInput>
      <input style={{ display: 'none' }} type="submit" />
    </Form>
  )
}
