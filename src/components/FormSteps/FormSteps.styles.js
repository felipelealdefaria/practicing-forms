import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  width: 90%;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 80px 25px 25px 25px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 25px;
  }
`

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

export const FlexButtons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const FormWrapper = styled.div`
  /* padding: 15px; */
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`
export const StepsWrapper = styled.div`
  width: 100%;
  div.ant-steps {
    margin-bottom: 60px;
    @media (max-width: 768px) {
      margin: 0;
    }
  }
  .ant-steps-item.ant-steps-item-finish {
    .ant-steps-item-icon {
      border-color: #06986d;
      > .ant-steps-icon {
        color: #06986d;
      }
    }
    > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-title::after {
      background-color: #06986d;
    }
  }
  .ant-steps-item-process .ant-steps-item-icon {
    background: #06986d;
    border-color: #06986d;
  }
  @media (max-width: 528px) {
    .ant-steps-horizontal.ant-steps-label-horizontal {
      flex-direction: row;
      .ant-steps-item-container {
        display: flex;
        align-items: center;
        justify-content: center;
        .ant-steps-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          margin-right: 5px;
          span {
            top: 0;
            font-size: 12px;
          }
        }
      }
      .ant-steps-item-process .ant-steps-item-icon {
        background: #06986d;
        border-color: #06986d;
      }
      .ant-steps-item-content {
        display: flex;
        align-items: center;
        justify-content: center;
        .ant-steps-item-title {
          font-size: 14px;
          padding-right: 0px;
        }
      }
    }
  }
`
