import styled, { createGlobalStyle } from "styled-components";


const Style = {
    GlobalStyle: createGlobalStyle`
  * {
      margin:0;
      color: white;
  }`,
  Unorder: styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    //padding: 2em;
    margin-left:-3.25em;
  `,
  Order: styled.li`
    text-decoration: none;
    list-style: none;
  `,

  Button: styled.button`
  text-decoration: none;
  border: none;
  margin: .2em;
  padding: .5em;
  border-radius: .3em;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1em;
  color: var(--darkBlue);
        background-color: ${(props) =>
            props.currentButton ? "var(--green)" : "var(--green-medium)"};
        &:hover{
        background-color: var(--green);
        cursor: pointer;
        };
  & p{
      width: 1.4em;
      color: var(--darkBlue);
  }
  `,
}

export default Style