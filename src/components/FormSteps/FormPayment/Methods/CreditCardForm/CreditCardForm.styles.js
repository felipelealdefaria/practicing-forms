import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 10px;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  /* margin: 40px 0px 0px 0px; */
  border: 1px solid #e2e2e2;
  @media (max-width: 950px) {
    :nth-child(1n) {
      padding: 20px 0px 0px 0px;
    }
    flex-direction: column-reverse;
    div.ant-col-xs-24 {
      width: 95%;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  margin: 40px 0px 0px 0px;
`

export const TitleForm = styled.p`
  margin: 0px 0px 5px 20px;
`

export const FlexInput = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`
