import styled from "styled-components";

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  margin-bottom: 16px;
  &: hover {
    cursor: pointer;  
    color: #B672FF;
    text-decoration: underline;
  }
  color: ${prop => prop.$filter ? "rgb(182, 114, 255)" : ""};
`