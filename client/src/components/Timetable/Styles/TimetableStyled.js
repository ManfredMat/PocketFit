import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
      }`,
  BodyStyled: styled.div`
    font-size: ${(props) => (1.65 * props.screenHeight) / 100}px;
    display: flex;
    position: relative;
    width: -webkit-fill-available;
    height: 100vh;
    background-color: var(--darkGray-base);
    //overflow: hidden;
  `,
  StartBodyStyled: styled.div`
    padding: 1.3em 0em 0em 3em;
    position: relative;
    margin-top: 0.5em;
    width: -webkit-fill-available;
  `,
  ContentBodyStyled: styled.div`
    display: flex;
  `,
  LeftColumnStyled: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em 2.5em 0em 0em;
    width: 40%;
  `,
  RigthColumnStyled: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em 2.5em 0em 0em;
    width: 60%;
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
  LinkGreen: styled.p`
    font-size: 1.2em;
    color: var(--green);
  `,
  DetallesCOntainer: styled.div`
    height: -webkit-fill-available;
  `,
  YellowButton: styled.button`
    background-color: var(--yellow);
    padding: 0.5em;
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    color: var(--darkGray-base);
    width: 8em;
  `,
};

export default Styles;
