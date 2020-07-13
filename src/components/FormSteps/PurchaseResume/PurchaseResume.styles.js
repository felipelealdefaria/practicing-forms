import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  text-align: center;
`

export const ZebraGrid = styled.div`
  width: 100%;
  opacity: 1;
  margin: 10px 0px;
  border-radius: 8px;
  background: #66666617;
  div:nth-child(2n) {
    background: #fff;
  }
`

export const DataRow = styled.div`
  width: 100%;
  display: flex;
  /* margin: 10px 0px; */
  padding: 7px 10px;
  justify-content: space-between;
  span {
    font-size: 16px;
  }
  span:nth-child(1) {
    color: #616161;
    opacity: 0.66;
  }
`
