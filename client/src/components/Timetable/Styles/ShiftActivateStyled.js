import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
          text-decoration: none;
      }`,
  BodyStyled: styled.div`
    display: flex;
    position: fixed;
    width: -webkit-fill-available;
    height: 100vh;
    background-color: #00000070;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    //overflow-y: hidden;
  `,
  BoxStyle: styled.div`
    display: flex;
    //width: 40%;
    //height: 25%;
    padding: 2em;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--darkBlue);
    border-radius: 2em;
    position: relative;
  `,
  SelectBack: styled.div`
    background-color: var(--green);
    //margin-right: 1em;
  `,
  Select: styled.select`
  align-self: center;
    background-color: var(--green);
    border-radius: 2em;
    border-style: hidden;
    padding: 0.7em;
    width: 25em;
    color: var(--darkBlue);
    &::placeholder {
      color: black;
    }
    &:focus {
      outline: none;
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
  `,
  TitleH2Styled: styled.h2`
    color: #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    text-transform: capitalize;
    display: inline;
  `,
  Content: styled.div`
    display: flex;
  `,
  FormContent: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em 2em 1em 0em;
  `,
  CloseButton: styled.button`
    border-style: none;
    background-color: var(--darkGray-base);
    border-radius: 50%;
    margin: 1rem;
    color: var(--green);
    position: absolute;
    //bottom: 80vh;
    right: 0;
    top: 0;
    width: 2rem;
    height: 2rem;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1rem;
    &:hover {
      cursor: pointer;
    }
  `,
  GreenButton: styled.button`
    color: var(--darkBlue);
    background-color: var(--green);
    border-radius: 1rem;
    border: none;
    padding: 0.5rem;
    width: 5rem;
    margin-right: 1em;
    &:hover {
      cursor: pointer;
    }
  `,
  GreenDarkButton: styled.button`
    color: var(white);
    background-color: var(--green-medium);
    border-radius: 1rem;
    border: none;
    padding: 0.5rem;
    width: 5rem;
    margin-right: 1em;
    &:hover {
      cursor: pointer;
    }
  `,
  DaysContainer: styled.div`
    background-color: var(--green-medium);
    border-radius: 1rem;
    padding: 1.5em;
  `,
  InicioDay: styled.p`
    background-color: var(--darkBlue);
    padding: 0.6em;
    border-radius: 0.4rem;
    text-align: center;
    width: 20em;
  `,
  FinalDay: styled.p`
    margin-top: 0.8em;
    background-color: var(--green);
    padding: 0.6em;
    border-radius: 0.4rem;
    text-align: center;
    width: 20em;
    color: var(--darkBlue);
  `,
  TitleH3Styled: styled.h3`
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 500;
    text-transform: capitalize;
    margin: 1em 0em 0.5em 0em;
  `,
  TitleLabelStyled: styled.label`
    color: #ffffff;
    font-size: 1.2em;
    text-transform: capitalize;
    margin: 1em 0em 0.5em 0em;
  `,
};

export default Styles;
