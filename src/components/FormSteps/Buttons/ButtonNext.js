import React from 'react'
import { ButtonNextStep } from './styles'

export default function ButtonNext({ onClick, title, disabled }) {
  return (
    <ButtonNextStep type="primary" onClick={onClick} disabled={disabled}>
      {title}
    </ButtonNextStep>
  )
}
