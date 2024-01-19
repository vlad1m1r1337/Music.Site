import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 321px auto 0 auto;
  width: 366px;
  height: 439px;
  background-color: #FFFFFF;
  border-radius: 12px;
`

export const Input = styled.input`
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    border: none;
    border-bottom: 2px solid #D0CECE;
    width: 279px;
    &:focus {
    outline: none; /* Remove outline on focus */
    }
    &:last-child {
    margin: 38px 0 60px 0;
}
`

export const Img = styled.img`
margin: 43px 0 23px 0;
`

export const ButtonWhite = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 6px;
  color: black;
  background-color: white;
  margin: 20px 0 47px 0;
  border: 1px solid #D0CECE;
  transition: 0.2s;
  &:hover {
    background-color: #D9D9D9;
  }
  &:active {
    background-color: #D0CECE;
  }
`

export const ButtonPurpl = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 6px;
  color: white;
  background-color: #580EA2;
  border: 1px solid #D0CECE;
  transition: 0.2s;
  &:hover {
    background-color: #3F007D;
  }
  &:active {
    background-color: #271A58;
  }
`


export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
`