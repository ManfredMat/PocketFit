import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
      }`,
  StyledDaysContainers: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--green);
    color: var(--darkGray-base);
    font-size: 0.9em;
    font-weight: 500;
    height: 1.6em;
    border-radius: 0.4em;
  `,
  StyledGrid: styled.div`
    margin-top: 0.6em;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5em;
    overflow-y: scroll;
    padding-right: 0.3em;
    &::-webkit-scrollbar {
      width: 1em;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--yellow);
      border-radius: 0.4em;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--green);
    }
  `,
  StyledClasesContainers: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--green-medium);
    font-size: 0.9em;
    height: 2em;
    border-radius: 0.4em;
    padding: 0.8em;
    margin-top: 0.5em;
  `,
  TitleH3Styled: styled.h2`
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 500;
    text-transform: capitalize;
  `,
  StyledContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
  `,
};

export default Styles;
