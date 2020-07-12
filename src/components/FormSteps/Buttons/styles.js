import styled from 'styled-components'

export const ButtonPrevStep = styled.button`
  color: #bdbdbd;
  background: #fff;
  padding: 7px 39px;
  border-radius: 24px;
  border: 1px solid #bdbdbd;
  :hover {
    opacity: 0.8;
  }
`
export const ButtonNextStep = styled.button`
  color: #fff;
  margin: 0 12px;
  padding: 7px 39px;
  border-radius: 24px;
  box-shadow: 0px 1px 3px #0000001f;
  background: ${({ disabled }) => (disabled ? '#bdbdbd' : '#149e75')};
  border: ${({ disabled }) => (disabled ? '1px solid #bdbdbd' : 'none')};
  box-shadow: ${({ disabled }) =>
    disabled ? '0px 1px 3px #0000001F' : '0px 3px 13px #149E753D'};
  :hover {
    opacity: 0.8;
  }
`

export const ButtonMethod = styled.button`
  width: 100%;
  display: flex;
  font-size: 16px;
  margin: 10px 0px;
  padding: 12px 40px;
  border-radius: 8px;
  border: 1px solid #06986d;
  color: ${({ close }) => (!close ? '#06986d' : '#fff')};
  background: ${({ close }) => (close ? '#06986d' : '#fff')};
  justify-content: ${({ close }) => (close ? 'space-between' : 'center')};
  :hover {
    opacity: 0.8;
    color: #fff;
    background-color: #06986d;
  }
  :active {
    color: #fff;
    background-color: #06986d;
  }
`
