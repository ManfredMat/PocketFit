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
    background-color: var(--darkGray-base);

  `,
  StartBodyStyled: styled.div`
    padding: 1.3em 3em 0em 3em;
    position: relative;
    margin-top: 0.5em;
    width: -webkit-fill-available;
  `
  }

export default Styles;

