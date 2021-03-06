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
    background-color: var(--darkGray-base);
    font-size: ${(props) => (1.65 * props.screenHeight) / 100}px;
    height: ${(props) => (props.overFlow ? "100vh" : "auto")};
    overflow-y: ${(props) => (props.overFlow ? "hidden" : "auto")};
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
  StyledContent: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  FirstRow: styled.div`
    display: flex;
    flex-direction: row;
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
  StyledClasesContainer: styled.div`
    margin-left: 1rem;
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
    margin-bottom: 0.5em;
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
  WeekPlan: styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 6% repeat(6, 1fr);
    grid-template-rows: 8% 92%;
    gap: 0.6em;
  `,
  WeekPlanContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
  `,
  FirstRowWeek: styled.div`
    padding: 0.8em;
    border-radius: 0.5em;
    background-color: var(--yellow);
    color: var(--darkGray-base);
    font-weight: 600;
    text-align: center;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  BlocksGenContainer: styled.div``,
  BlocksContainers: styled.div`
    background-color: ${(props) =>
      props.block === 1
        ? "#D9FB52"
        : props.block === 2
        ? "#CEFA1F"
        : props.block === 3
        ? "#B4E005"
        : "#D9FB52"};
    border-radius: 0.5em;
    margin-bottom: 0.6em;
    padding: 0.3em 0.5em;
    height: 10.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  `,
  ExeName: styled.p`
    background-color: var(--darkGray-base);
    border-radius: 0.4em;
    padding: 0.4em;
    font-size: 0.8em;
    margin-bottom: 0.5em;
    text-align: center;
    text-transform: uppercase;
  `,
  BlockName: styled.h3`
    color: var(--darkGray-base);
    text-transform: capitalize;
    font-weight: 500;
  `,
  BlockRounds: styled.p`
    background-color: var(--green);
    color: var(--darkGray-base);
    border-radius: 0.6em;
    text-align: center;
  `,
  Nums: styled.p`
    text-align: center;
    font-size: ${(props) => (props.flag ? "1.3em" : "0.8em")};
    color: white;
    background-color: var(--darkGray-base);
    border-radius: 50%;
    font-weight: 600;
    padding: 0.3em;
    width: 1.3em;
    height: 1.3em;
    align-self: center;
  `,
};

export default Styles;
