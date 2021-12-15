import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
      }`,
  BodyStyled: styled.div`
    display: flex;
    position: fixed;
    width: -webkit-fill-available;
    height: 100vh;
    background-color: #00000099;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  `,
  BoxStyle: styled.div`
    display: flex;
    //width: 40%;
    //height: 25%;
    padding: 2em;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--darkBlue);
    border-radius: 2em;
    position: relative;
  `,
  CloseButton: styled.button`
    border-style: none;
    background-color: var(--darkGray-base);
    border-radius: 50%;
    margin: 1rem;
    color: var(--green);
    position: absolute;
    //bottom: 80vh;
    right: 0;
    top: 0;
    width: 2rem;
    height: 2rem;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1rem;
    &:hover {
      cursor: pointer;
    }
  `,
  }

export default Styles;
