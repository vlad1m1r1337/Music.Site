import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 321px auto 0 auto;
  width: 366px;
  height: 439px;
  background-color: #FFFFFF;
  border-radius: 12px;
`

const StyledInput = styled.input`
    //caret-color: transparent; 
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    border: none;
    border-bottom: 2px solid #D0CECE;
    width: 279px;
    &:focus {
    outline: none;
    }
`


const StyledImg = styled.img`
margin: 43px 0 23px 0;
`

const StyledButtonPurple = styled.button`
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


const StyledDivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`

export const Registration = () => {
    return (
        <>
            <GlobalStyle/>
            <StyledDiv>
                <StyledImg src="/img/SkyPro_logo.png" alt="SkyPro"/>
                <StyledDivInput>
                    <StyledInput placeholder="Почта" type="text"/>
                    <StyledInput placeholder="Пароль" type="text"/>
                    <StyledInput placeholder="Повторите пароль" type="text"/>
                </StyledDivInput>
                <StyledButtonPurple>Зарегистрироваться</StyledButtonPurple>
            </StyledDiv>
        </>
    )
}