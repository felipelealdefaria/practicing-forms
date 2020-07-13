import React from 'react'
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded'
import { ButtonMethod } from './styles'
import { useFormDataContext } from '../../../context/FormDataContext'

export default function ButtonPayMethod({ title, onClick, close }) {
  const { setPayMethod } = useFormDataContext()

  return (
    <ButtonMethod onClick={onClick} close={close}>
      {title}
      {close && <HighlightOffRoundedIcon onClick={() => setPayMethod(0)} />}
    </ButtonMethod>
  )
}
