import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
          text-decoration: none;
      }`,
  BodyStyled: styled.div`
    font-size: ${(props) => (1.65 * props.screenHeight) / 100}px;
    display: flex;
    position: relative;
    width: -webkit-fill-available;
    background-color: var(--darkGray-base);
    overflow: hidden;
    height: 100vh;
  `,
  StartBodyStyled: styled.div`
    padding: 1.3em 0em 0em 3em;
    position: relative;
    margin-top: 0.5em;
    width: -webkit-fill-available;
    height: 100vh;
  `,
  ContentBodyStyled: styled.div`
    display: flex;
  `,
  LeftColumnStyled: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em 2.5em 0em 0em;
    width: 50%;
  `,
  RigthColumnStyled: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em 2.5em 0em 0em;
    width: 50%;
  `,
  RigthColumnStyledRow1: styled.div`
    display: flex;
    flex-direction: column;
    height: 48%;
  `,
  RigthColumnStyledRow2: styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
  `,
  TitleH2Styled: styled.h2`
    color: #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    text-transform: capitalize;
  `,
  TitleH1Styled: styled.h1`
    color: #ffffff;
    font-weight: 400;
    font-size: 2em;
  `,
  EventosHead: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  LinkGreen: styled.a`
    font-size: 1.2em;
    color: var(--green);
  `,
  DetallesCOntainer: styled.div`
    height: -webkit-fill-available;
  `,
  YellowButton: styled.button`
    background-color: var(--yellow);
    padding: 0.5em 0.7em;
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    color: var(--darkGray-base);
    //width: 8em;
    height: 2em;
    font-weight:700;
    &:hover {
      cursor: pointer;
    }
  `,
  GreenButton: styled.button`
    background-color: var(--green);
    padding: 0.5em 0.7em;
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    color: var(--darkGray-base);
    //width: 8em;
    height: 2em;
    font-weight:700;
    margin-left: 1em;
  `,
};

export default Styles;
