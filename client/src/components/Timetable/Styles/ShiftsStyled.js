import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
      }`,
  ListContainer: styled.div`
    display: flex;
    width: -webkit-fill-available;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0.8em;
  `,
  ShiftButton: styled.button`
    font-size: 1em;
    background-color: var(--yellow);
    padding: 0.5em 0.5em;
    margin-top: 1em;
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    color: var(--darkGray-base);
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  NumParagrahp: styled.p`
    text-align: center;
    font-size: 0.8em;
    color: var(--darkGray-base);
    background-color: var(--green);
    border-radius: 50%;
    font-weight: 700;
    padding: 0.3em;
    width: 1.3em;
    height: 1.3em;
    align-self: flex-start;
  `,
  DateContainer: styled.div`
    background-color: var(--darkGray-base);
    width: 3.3em;
    height: 3.3em;
    border-radius: 50%;
    display: flex;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0.3em 1.4em;
  `,
  DateParagrahp: styled.p`
    font-weight: 400;
    font-size: 0.8em;
  `,
  AvaParagrahp: styled.p`
    font-weight: 500;
    font-size: 1.3em;
    color: var(--green);
  `,
  HourParagrahp: styled.p`
    color: var(--darkGray-base);
    font-size: 1em;
  `,
  TitleH3Styled: styled.h2`
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 0.7em;
  `,
};

export default Styles;
