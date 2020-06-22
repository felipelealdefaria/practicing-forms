import React from 'react'
// import { useForm } from 'react-hook-form'
// import { schema } from '../../../utils'
import { Input, Error } from './styles'

export default function BasicInput({
  width,
  type,
  name,
  label,
  placeholder,
  register,
  errors,
}) {
  // const { errors, register } = useForm({
  //   validationSchema: schema,
  // })

  return (
    <>
      <Input
        width={width}
        type={type}
        name={name}
        label={label}
        variant="outlined"
        inputRef={register}
        placeholder={placeholder}
      />
      {errors[name] && <Error>{errors[name].message}</Error>}
    </>
  )
}
