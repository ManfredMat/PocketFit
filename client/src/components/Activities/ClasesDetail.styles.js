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
    width: auto;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  `,
  DivContenedorTitulo: styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -1em;
  `,
  Titulo: styled.h1`
    color: var(--green);
    font-weight: 600;
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
    margin-top: -2em;
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
    height: auto;
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
    height: auto;
    width: 20%;
    padding: 1em, 1em, 1em, 0;
    border-radius: 1em;
    margin-top: 1em;
    margin-right: 3em;
  `,

  ContenedorInfo: styled.div`
    display: flex;
    align-items: center;
    margin-right: -1.2em;
    
  `,

  DivInfo: styled.div`
    display: flex;
    width: 15em;
    justify-content: space-between;
  `,
  DivData: styled.h3`
    font-weight: 200;
  `,
  
  Profesor: styled.h2`
  color: var(--green);
  font-weight: 300;
  font-size: 1.4em;
  `,
  Inscriptos: styled.h2`
  color: var(--green);
  font-size: 1.2em;
  font-weight: 300;
  `,
    DatosInscriptos: styled.h2`
    color: white;
    font-size: 1.2em;
    font-weight: 300;
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
