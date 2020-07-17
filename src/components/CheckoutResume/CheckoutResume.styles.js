import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 25px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoResume = styled.div`
  width: 65%;
  text-align: justify;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const ResmedLogo = styled.img`
  width: auto;
  max-height: 300px;
  border-radius: 50%;
  margin: 25px 0 25px 0;
  /* background-color: #fff; */
  @media (max-width: 768px) {
    width: 60%;
    margin: 5px;
    height: auto;
  }
`

export const ProductTitle = styled.h1`
  color: #707070;
  font-size: 22px;
  font-weight: 600px;
  margin: 25px 0px 0px 0px;
  @media (max-width: 768px) {
    margin: 15px 50px;
    font-size: 18px;
  }
`

export const ProductDescription = styled.p`
  color: #707070;
  font-size: 18px;
  margin: 10px 0 25px 0;
  span {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    margin: 15px 50px;
    font-size: 15px;
    span {
      font-size: 13px;
    }
  }
`

export const ProductPrice = styled.p`
  color: #6c2732;
  font-size: 46px;
  font-weight: bold;
  margin: 25px 0 25px 0;
  @media (max-width: 768px) {
    margin: 25px 35px;
    font-size: 26px;
    padding: 5px 0px;
    border-radius: 7px;
    background-color: #ddebe7;
  }
`
