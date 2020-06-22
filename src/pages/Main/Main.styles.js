/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Col } from 'antd'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`

export const ColCardForm = styled(Col)`
  width: 100%;
  height: 100vh;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0px 33px 33px 0px;
  box-shadow: 0px 2px 30px #0000000d;
`
