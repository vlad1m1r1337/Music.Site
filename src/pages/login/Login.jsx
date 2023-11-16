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
    outline: none; /* Remove outline on focus */
    }
    &:last-child {
    margin: 38px 0 60px 0;
}
`


const StyledImg = styled.img`
margin: 43px 0 23px 0;
`

// const Styled = styled.div`
//
// `


const StyledButtonWhite = styled.button`
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

const StyledButtonPurpl = styled.button`
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


const StyledDivInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const Login = () => {
    return (
    <>
        <GlobalStyle/>
        <StyledDiv>
           <StyledImg src="/img/SkyPro_logo.png" alt="SkyPro"/>
            <StyledDivInput>
                <StyledInput placeholder="Почта" type="text"/>
                <StyledInput placeholder="Пароль" type="text"/>
            </StyledDivInput>
            <StyledButtonPurpl>Войти</StyledButtonPurpl>
            <StyledButtonWhite>Зарегестрироваться</StyledButtonWhite>
        </StyledDiv>
    </>
    )
}