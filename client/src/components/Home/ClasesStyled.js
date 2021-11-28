import styled, { createGlobalStyle } from "styled-components";


const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0
      }`,
  StyledContainer: styled.div`
    flex:1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  `,
};

export default Styles;