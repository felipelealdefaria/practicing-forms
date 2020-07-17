import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0px;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  @media (max-width: 768px) {
    border: none;
    padding: 5px 0px;
    justify-content: center;
  }
`

export const Text = styled.p`
  margin: 0;
  color: #707070;
  font-size: 14px;
`

export const InputCoupon = styled.input`
  width: 150px;
  opacity: 0.33;
  color: #1d2026;
  margin: 0px 8px;
  border-radius: 11px;
  border: 1px solid #707070;
  background-color: #f5f5f5;
  :hover {
    border-color: #1d2026;
  }
`

export const ApplyButton = styled.a`
  opacity: 0.7;
  color: #707070;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 18px;
  background-color: #f5f5f5;
  border: 1px solid #707070;
  :hover {
    color: #fff;
    background-color: #6c2732;
    border: 1px solid #6c2732;
  }
`
