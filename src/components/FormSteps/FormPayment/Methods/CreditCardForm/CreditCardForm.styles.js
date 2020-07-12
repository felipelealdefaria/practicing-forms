import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 10px;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  margin: 40px 0px 0px 0px;
  border: 1px solid #e2e2e2;
`

export const FlexInput = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`
