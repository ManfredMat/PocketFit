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
  TitleH2Styled: styled.h2`
    color: #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 1em;
  `,
  InicioDay: styled.div`
    background-color: var(--yellow);
    padding: 0.6em;
    border-radius: 0.4rem;
    text-align: center;
    width: 20em;
    color: var(--darkGray-base);
  `,
  FinalDay: styled.div`
    margin-top: 0.8em;
    margin-bottom: 2em;
    background-color: var(--green);
    padding: 0.6em;
    border-radius: 0.4rem;
    text-align: center;
    width: 20em;
    color: var(--darkBlue);
  `,
  divClientes: styled.div`
    width: 30em;
    display: flex;
    flex-wrap: wrap;
  `,
  contClientes: styled.div`
    background-color: var(--green-medium);
    border-radius: 1em;
    padding: 1em;
  `
  }

export default Styles;
