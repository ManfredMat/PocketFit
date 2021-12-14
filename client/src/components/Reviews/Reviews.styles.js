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
      //padding-left: 2em;
      margin-left: 1.5em;
      font-size: 1.5em;
  `,
    Filter: styled.select`
    background-color: var(--green);
    border-radius: 2rem;
    border-style: hidden;
    width: 12rem;
    margin: 1em;
    padding: .5em;
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
  border-radius: 3em;
  height: 15em;
  display: flex;
  flex-direction: column;
  margin-right: 4em;
  `,
  InnerCard: styled.div`
  background-color: var(--green-medium);
  border-radius: 1em;
  height: -webkit-fill-available; 
  `,
  Type: styled.h2`
  background-color: var(--darkGray-base);
  color: var(--green);
  border-radius: .8em;
  padding-left: .5em;
  padding-right: .5em;
  width: 20%;
  margin-right: 1em;
  `,
  Type2: styled.h2`
  background-color: var(--darkGray-base);
  color: white;
  border-radius: .8em;
  padding-left: .5em;
  padding-right: .5em;
  width: 80%;
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
}


export default Style