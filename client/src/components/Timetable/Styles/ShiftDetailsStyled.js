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
  `,
  genWeekContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    align-content: center;
  `,
  buttonsContainer: styled.div`
    padding-top: 1em;
    width:6em;
    z-index: 2;
  `,
  buttons: styled.button`
    background-color: var(--green);
    padding: 0.6em;
    color: var(--darkGray-base);
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    height: 2em;
    font-weight: 700;
    margin-left: 0.3em;
    z-index: 2;
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
    margin-left: 1em;
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
    //margin-left: 1em;
  `,
};

export default Styles;
