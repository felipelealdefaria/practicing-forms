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

export const StepsWrapper = styled.div`
  width: 100%;
  div.ant-steps {
    margin-bottom: 60px;
    @media (max-width: 768px) {
      margin: 0;
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

export const FormWrapper = styled.div`
  /* padding: 15px; */
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`
