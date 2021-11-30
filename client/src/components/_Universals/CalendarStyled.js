import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0
      }`,
  StyledContainer: styled.div`
    display: flex;
  `,
  StyledGrid: styled.div`
    flex:1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2rem;
    height: 25rem;
  `,
};

export default Styles;
