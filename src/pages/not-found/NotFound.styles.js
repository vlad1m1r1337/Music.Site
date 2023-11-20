import styled from "styled-components";

export const ErrorNumber = styled.div`
  position: relative;
  margin-top: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ParagraphNotFound = styled.p`
  font-size: 32px;
  font-weight: 400;
`

export const PageNotFound = styled.div`
  margin: 3px 0 19px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FourZeroFour = styled.p`
  width: 255px;
  height: 168px;
  font-weight: 400;
  font-size: 160px;
`

export const Paragraph = styled.p`
  margin-bottom: 36px;
  color:#4E4E4E;
`

export const Button = styled.button`
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    width: 278px;
    height: 52px;
    border-radius: 6px;
    color: white;
    background-color: #580EA2;
    border: none;
    transition: 0.2s;
    &: hover {
      background-color: #3F007D;
    }
    &: active {
      background-color: #271A58;
    }
`