/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Col } from 'antd'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const ColCardForm = styled(Col)`
  width: 100%;
  height: auto;
  /* padding: 25px 25px 0px 25px; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0px 33px 33px 0px;
  box-shadow: 0px 2px 30px #0000000d;
  @media (max-width: 768px) {
    height: 100%;
    border-radius: 33px 33px 0px 0px;
  }
`
