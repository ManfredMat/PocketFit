import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          
      }`,
  StyledContainer: styled.div`
    display: flex;
    margin: 0.6em 0em 2em;
    width: -webkit-fill-available;
  `,
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
  StyledCalendarContainers: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--green-medium);
    font-size: 0.9em;
    height: 5em;
    border-radius: 0.4em;
    padding: 0.4em;
  `,
  StyledGrid: styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5em;
  `,
  NumContainer: styled.div`
    display: flex;
    width: -webkit-fill-available;
    justify-content: right;
  `,
  Num: styled.p`
    text-align: center;
    font-size: 0.8em;
    color: var(--darkGray-base);
    background-color: var(--green);
    border-radius: 50%;
    font-weight: 700;
    padding: 0.3em;
    width: 1.3em;
    height: 1.3em;
  `,
  EventsContainer: styled.div`
    height: -webkit-fill-available;
  `,
  EventeInCalendarContainer: styled.div`
    width: auto;
    height: 0.8em;
    overflow: hidden;
    background-color: var(--yellow);
    padding: 0.4em;
    border-radius: 0.5em;
  `,
  EventParaghrap: styled.p`
    color: var(--darkGray-base);
    hyphens: auto;
    font-size: 0.75em;
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }
  `,
};

export default Styles;
