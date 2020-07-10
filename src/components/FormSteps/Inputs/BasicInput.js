import React from 'react'
import { Input, Error, InputWrapper } from './styles'

export default function BasicInput({
  width,
  type,
  name,
  label,
  errors,
  register,
  colMobile,
  placeholder,
}) {
  return (
    <InputWrapper width={width} colMobile={colMobile}>
      <Input
        type={type}
        name={name}
        label={label}
        variant="outlined"
        inputRef={register}
        placeholder={placeholder}
      />
      {errors[name] && <Error>{errors[name].message}</Error>}
    </InputWrapper>
  )
}
