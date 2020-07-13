import React from 'react'
import { ButtonPrevStep } from './styles'

export default function ButtonPrev({ onClick, title }) {
  return (
    <ButtonPrevStep type="primary" onClick={onClick} prev>
      {title}
    </ButtonPrevStep>
  )
}
