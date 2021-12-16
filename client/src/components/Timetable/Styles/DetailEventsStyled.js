import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
* {
    margin:0;
    
}`,
  StyledContainer: styled.div`
    width: -webkit-fill-available;
    margin: 0.6em 0em 2em;
  `,
  labels: styled.th`
    font-weight: 400;
    text-align: left;
    height: 2.4em;
    color: var(--green);
    border-collapse: collapse;
  `,
  table: styled.table`
    width: 100%;
    height: -webkit-fill-available;
    border-collapse: collapse;
  `,
  TableTd: styled.td`
    border-collapse: collapse;
    padding: 0.2em 0 0.2em 0;
  `,
  tableTr: styled.tr`
    font-size: 1em;
    height: 2.5em;
    border-collapse: collapse;
    border-bottom: ${(props) =>
      props.border ? "0.5px solid white" : "0px solid white"};
  `,
};

export default Styles;
