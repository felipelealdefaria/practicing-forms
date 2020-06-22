import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export const Input = styled(TextField)`
  margin: 20px 10px 0 10px !important;
  width: ${(props) => (props.width ? `${props.width}%` : 'inherit')} !important;

  .MuiOutlinedInput-root {
    border-radius: 10px;
    box-shadow: 0px 2px 3px #8f8f8f1f;
  }

  .MuiOutlinedInput-input {
    padding: 14px 14px;
  }

  @media (max-width: 976px) {
    width: 100% !important;
  }
`

export const Error = styled.p`
  color: #ba000d;
  font-size: 12px;
  margin: 3px 0px 0px 3px;
`
