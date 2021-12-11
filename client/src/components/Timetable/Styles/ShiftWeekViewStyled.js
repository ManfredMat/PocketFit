import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
      }`,
  BodyStyled: styled.div`
    width: -webkit-fill-available;
  `,
  ContainerStyled: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  ColumnsStyle: styled.div`
    width: 16.4%;
  `,
  CardShiftContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  CardShift: styled.div`
    background-color: var(--yellow);
    padding: 2em;
    margin: 0.4em 0.3em;
    border-radius: 0.6em;
    height: 3.5em;
  `,
  CardNums: styled.div`
    height: 3.5em;
    padding: 2em 1em;

  `,
  Nums:styled.p`
  `
};

export default Styles;
