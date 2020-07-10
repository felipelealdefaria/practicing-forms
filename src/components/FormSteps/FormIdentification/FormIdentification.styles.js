import styled from 'styled-components'

export const TitleSection = styled.h3`
  color: #707070;
  font-size: 28px;
  text-align: left;
  margin: 25px 0 0 0;
  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
  }
`

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

export const FlexButton = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
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

export const ButtonStep = styled.button`
  opacity: 1;
  color: #fff;
  padding: 7px 39px;
  border-radius: 24px;
  background: #bdbdbd;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 1px 3px #0000001f;
`
