import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
  * {
      margin:0;
      color: #ffffff;
  }`,
  StyledBody: styled.div`
    padding: 2rem;
    display: column;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: var(--darkGray-base);
    font-size: ${(props) => (1.65 * props.screenHeight) / 100}px;
    &::-webkit-scrollbar {
      width: 0.8em;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--green-medium);
      border-radius: 0.4em;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--green);
    }
  `,
  StyledFirstColumn: styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
  `,
  ContentDiv: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `,
  StyledCalendarContainer: styled.div`
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    width: 70%;
  `,
  TitleH2Styled: styled.h2`
    color: #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    text-transform: capitalize;
  `,
  StyledClasesContainer: styled.div`
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    width: 30%;
  `,
  StyledShiftsContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    font-size: 0.8em;
  `,
  TitleH2Styled: styled.h2`
    color: #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    text-transform: capitalize;
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
  GreenButton: styled.button`
    background-color: var(--green);
    padding: 0.5em 0.7em;
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    color: var(--darkGray-base);
    //width: 8em;
    height: 2em;
    font-weight: 700;
    margin-left: 1em;
  `,
  RigthColumnStyledRow1: styled.div`
    display: flex;
    flex-direction: column;
    height: 60%;
  `,
};

export default Styles;
