import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 321px auto 0 auto;
  width: 366px;
  height: 439px;
  background-color: #FFFFFF;
  border-radius: 12px;
`

export const StyledInput = styled.input`
    //caret-color: transparent; 
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    border: none;
  //border-bottom: 2px solid #D0CECE;
    border-bottom: 2px solid ${prop => prop.$error ? "red" : "#D0CECE"};
    width: 279px;
    display: inline;
    &:focus {
    outline: none;
    }
`


export const StyledImg = styled.img`
margin: 43px 0 23px 0;
`

export const StyledButtonPurple = styled.button`
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
  margin-top: 60px;
`


export const StyledDivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`

export const ParagraphErrorLogEmail = styled.p`
    color: #a94442;
    font-size: 1.5rem;
`

export const ParagraphErrorLogPassword = styled.p`
  color: #a94442;
  font-size: 1.5rem;
  
`

export const DivErrorLogs = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #BF7877;
  border-radius: 10px;
  width: 50%;
  transition: 3s;
`
