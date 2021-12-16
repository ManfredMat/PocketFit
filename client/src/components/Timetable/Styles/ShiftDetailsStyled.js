import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
      },
      * {
          scrollbar-width: thin;
          scrollbar-color: blue orange;
        }
      `,

  BodyStyled: styled.div`
    font-size: ${(props) => (1.65 * props.screenHeight) / 100}px;
    display: flex;
    position: relative;
    width: -webkit-fill-available;
    background-color: var(--darkGray-base);
    height: ${(props) => (props.overFlow ? "100vh" : "auto")};
    overflow-y: ${(props) => (props.overFlow ? "hidden" : "auto")};
    &::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: orange;
    }
  `,
  StartBodyStyled: styled.div`
    padding: 1.3em 3em 0em 3em;
    position: relative;
    margin-top: 0.5em;
    width: -webkit-fill-available;
  `,
  GenWeekContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    align-content: center;
  `,
  ButtonsContainer: styled.div`
    padding-top: 1.25em;
    width: 6em;
    z-index: ${(props) => (props.overFlow ? 0 : 2)};
  `,
  Buttons: styled.button`
    background-color: var(--darkBlue);
    color: var(--green);
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    height: 3em;
    width: 3em;
    font-weight: 700;
    margin-left: 0.3em;
    z-index: 2;
    &:hover {
      cursor: pointer;
    }
  `,
  TitleH1Styled: styled.h1`
    color: #ffffff;
    font-weight: 400;
    font-size: 2em;
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
    font-weight: 700;
    margin-left: 1em;
    font-size: 1em;
    &:hover {
      cursor: pointer;
    }
  `,
  UnableButton: styled.button`
  background-color: grey;
  padding: 0.5em 0.7em;
  text-decoration: none;
  border-radius: 0.5em;
  border: none;
  color: var(--darkGray-base);
  //width: 8em;
  height: 2em;
  font-weight: 700;
  margin-left: 1em;
  font-size: 1em;
  &:hover {
      cursor: pointer;
    }
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
    //margin-left: 1em;
    font-size: 1em;
    &:hover {
      cursor: pointer;
    }
  `,
  Header: styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  `,
  ButtonsContainer: styled.div`
    margin-right: -0.5em;
  `,
  SearchButton: styled.button`
  background-color: transparent;
  border: none;
  margin-left: .3rem;
  &:hover {
      cursor: pointer;
  }
`,
 RightSide: styled.div`
display:flex;

 `,
};

export default Styles;
