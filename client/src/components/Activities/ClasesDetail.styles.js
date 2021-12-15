import styled, { createGlobalStyle } from "styled-components";

const Style = {
  GlobalStyle: createGlobalStyle`
  * {
      margin:0;
      color: white;
  }`,
  BodyGen: styled.div`
    display: flex;
    position: absolute;
    width: -webkit-fill-available;
    height: 100vh;
    background-color: #00000070;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 7;
    position: fixed;
    top: 0;
    left: 0;

  `,
  Contenedor: styled.div`
    background-color: var(--darkBlue);
    padding: 2em;
    border-radius: 1em;
    display: flex;
    width: 60%;
    height: 45%;
    flex-direction: column;
    align-items: flex-start;
  `,

  Titulo: styled.h1`
    color: var(--green);
    font-weight: 600;
    margin-top: -1em;
  `,

  Cruz: styled.button`
    display: flex;
    width: 0.5em;
    height: 0.5em;
    padding: 1em;
    border-radius: 50%;
    text-decoration: none;
    border: none;
    background-color: var(--darkGray-base);
    color: var(--green);
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1em;
    margin-left: 38em;
    align-items: center;
    justify-content: center;
    margin-top: -1em;
    cursor: pointer;
    z-index: 6;
  `,

  Card: styled.div`
    width: 40em;
    height: 30em;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: space-evenly;
  `,

  ContenedorEdit: styled.div`
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  `,

  Edit: styled.button`
    background-color: var(--green);
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    width: 5em;
    color: var(--darkBlue);
    padding: 0.5em;
    cursor: pointer;
  `,

  Descripcion: styled.h2`
    color: var(--green);
  `,

  ContenedorDescripcion: styled.p`
    background-color: var(--green);
    color: var(--darkBlue);
    border-radius: 1em;
    padding: 1em;
  `,

  Image: styled.img`
    height: 20vh;
    width: auto;
    padding: 1em, 1em, 1em, 0;
    border-radius: 1em;
    margin-top: 1em;
  `,

  ContenedorInfo: styled.div`
    display: flex;
    height: 25vh;
  `,

  DivInfo: styled.div`
    display: flex;
    width: 15em;
    justify-content: space-between;
  `,
  DivData: styled.h3`
    font-weight: 200;
  `,

  Info: styled.div`
    background-color: var(--green-medium);
    color: white;
    font-weight: 500;
    border-radius: 0.7em;
    padding: 1em;
    width: auto;
    height: 12vh;
    margin: 1em;
  `,
};

export default Style;
