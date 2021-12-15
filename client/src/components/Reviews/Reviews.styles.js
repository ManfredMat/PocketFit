import styled, { createGlobalStyle } from "styled-components";

const Style = {
  GlobalStyle: createGlobalStyle`
* {
    margin:0;
    color: white;
}`,
  Titulo: styled.h1`
  margin-left: .7em;
  font-size: 3em;
  padding-top: 1em;

  `,
  Container: styled.div`
      background-color: var(--darkGray-base);
      width: 100vw;
      padding-left: 2em;
  `,
  Barra: styled.div`
      color: var(--green);
      margin-left: 1.5em;
      font-size: 1.5em;
      display: flex;
      align-items: center;

  `,
    Filter: styled.select`
    background-color: var(--green);
    border-radius: 2rem;
    border-style: hidden;
    width: 12rem;
    font-size: .7em;
    line-height:1em;
    margin: 1em;
    margin-left: 1em;
  
    &::placeholder {
        color: black;
    }
    &:focus{
        outline: none;
    }
    color: var(--darkGray-base);
  `,
  Card: styled.div`
  background-color: var(--green);
  margin: 2em;
  padding: 2em;
  border-radius: 2em;
  height: 15em;
  display: flex;
  flex-direction: column;
  margin-right: 4em;
  `,
  InnerCard: styled.div`
  background-color: var(--green-medium);
  border-radius: 1em;
  height: -webkit-fill-available; 
  padding: 1em;
  font-size: 1.2em;
  overflow-y: scroll;
  &::-webkit-scrollbar {
      width: 0.8em;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--darkBlue);
      border-radius: 0.4em;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--yellow);
    }
  `,
  Type: styled.h2`
  background-color: var(--darkGray-base);
  color: var(--green);
  border-radius: 1em;
  /* padding-left: .5em;
  padding-right: .5em; */
  width: 20%;
  margin-right: .5em;
  font-weight: 500;
  padding: .3em .5em;
  text-align: center;
  text-transform: uppercase;
  `,
  Type2: styled.h2`
  background-color: var(--darkGray-base);
  color: white;
  border-radius: 1em;
  padding-left: .5em;
  padding-right: .5em;
  width: 80%;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  `,
  Type3: styled.div`
    display: flex; 
    width: -webkit-fill-available;
    flex-direction: row;
  `,
  Estrellita: styled.img`
  margin-right: .1em;
   
  `,
  DivBarra: styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  
  `,
  Button: styled.button`
  margin-left: 1em;
  text-decoration: none;
  border: none;
  /* height: 1.5em;
  width : 1.5em ; */
  margin: .2em;
  padding: .5em;
  border-radius: 50%;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1em;
  color: var(--darkBlue);
        background-color: ${(props) =>
            props.currentButton ? "var(--green)" : "var(--green-medium)"};
        &:hover{
          background-color: var(--green);
        cursor: pointer;
        }
        & p{
      width: 1.4em;
      color: var(--darkBlue);
    `,

  
  DivButton: styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 1em;
  padding: 1em;
  font-size: 1em;
  `
        }
        
export default Style;