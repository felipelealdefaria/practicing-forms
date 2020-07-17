/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Input, Error, InputWrapper } from './styles'

export default function BasicInput(props) {
  return (
    <InputWrapper width={props.width} colMobile={props.colMobile}>
      <Input
        type={props.type}
        name={props.name}
        variant="outlined"
        label={props.label}
        value={props.value}
        onFocus={props.onFocus}
        onChange={props.onChange}
        inputRef={props.register}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
      {props.errors[props.name] && (
        <Error>{props.errors[props.name].message}</Error>
      )}
    </InputWrapper>
  )
}
