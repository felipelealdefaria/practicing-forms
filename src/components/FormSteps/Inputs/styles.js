import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export const Input = styled(TextField)`
  width: 100% !important;

  label.Mui-focused {
    color: #08845f;
  }

  .MuiOutlinedInput-root {
    border-radius: 10px;
    box-shadow: 0px 2px 3px #8f8f8f1f;
    & fieldset {
      /* border: 1px solid #707070;
      box-shadow: 0px 2px 3px #8f8f8f1f; */
    }
    &:hover fieldset {
      /* border-color: yellow; */
    }
    &.Mui-focused fieldset {
      border-color: #06986d;
    }
  }

  .MuiOutlinedInput-input {
    padding: 14px;
  }

  @media (max-width: 976px) {
    width: 100% !important;
  }
`

export const Error = styled.p`
  top: 100%;
  color: #ba000d;
  font-size: 12px;
  position: absolute;
  margin: 3px 0px 0px 3px;
`
export const InputWrapper = styled.div`
  display: flex;
  padding: 12px 10px;
  position: relative;
  width: ${({ width }) => (width ? `${width}%` : '100%')};
  /* width: 100%; */
  @media (max-width: 768px) {
    width: ${({ colMobile }) => (colMobile ? `${colMobile}%` : '100%')};
    margin: 30px 0px;
    padding: 0px;
  }
`
