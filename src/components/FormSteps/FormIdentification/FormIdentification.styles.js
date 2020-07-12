import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  text-align: center;
`

export const FlexInput = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`

export const ColMobile = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    justify-content: space-between;
    div {
      margin: 0;
      padding: 0;
    }
  }
`
