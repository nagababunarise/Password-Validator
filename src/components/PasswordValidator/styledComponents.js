import styled from 'styled-components'

export const BgContainer = styled.div`
  background: #24263c;
  height: 100vh;
  //   max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.div`
  background: #383a4e;
  border-radius: 20px;
  padding: 30px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin: 0px 20px 0px 20px;
  }
`
export const Heading = styled.h1`
  color: #edeeff;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1px;
`
export const Paragraph = styled.p`
  color: #edeeff;
  font-family: Roboto;
  font-size: 10px;
  letter-spacing: 1px;
`

export const InputElement = styled.input`
  width: 100%;
  padding: 8px 0px 8px 5px;
  outline: none;
  background: #edeeff;
  border: 0;
  margin-top: 30px;
`
export const SpanEle = styled.span`
  color: #ef4444;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 30px;
`
