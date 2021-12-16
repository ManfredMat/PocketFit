import styled, { createGlobalStyle } from "styled-components";

const Style = {
  GlobalStyle: createGlobalStyle`
  * {
      margin:0;
      color: white;
  }`,

  Contenedor: styled.div`
    background-color: var(--darkBlue);
    padding: 2em;
    position: "absolute";
    border-radius: 1em;
    height: auto;
    width: auto;
  `,

  DivEditFlip: styled.div`
    display: flex;
    justify-content: space-between;
    margin-right:1em;
  `,

  DivBotonesFlip: styled.div`
    display: flex;
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
    margin-bottom: 0.5em;
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
    margin-right: 1em;
  `,
  EditGuardar: styled.button`
    background-color: var(--green);
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    width: 5.2em;
    color: var(--darkBlue);
    padding: 0.5em;
    cursor: pointer;
    margin-right: 1em;
  `,
  Edit2: styled.label`
    background-color: var(--green);
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    width: 6em;
    color: var(--darkBlue);
    padding: 0.5em;
    cursor: pointer;
    text-align: center;

  `,
  EditCancel: styled.button`
    background-color: var(--green-medium);
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    width: 5.2em;
    color: white;
    padding: 0.5em;
    cursor: pointer;
    font-weight: 100;
    padding-right: 5em;
  `,
  InputEdit: styled.input`
    background-color: var(--green);
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    color: var(--darkBlue);
    padding: 0.5em;
    width: 10em;
  `,

  Descripcion: styled.h2`
    font-weight: 300;
    font-size: 1em;
    color: var(--green);
    
  `,
  Descripcion2: styled.h2`
    font-weight: 300;
    font-size: 1.4em;
    color: var(--green);
    margin-bottom: 1em;
  `,
  InputTitle: styled.input`
    background-color: var(--green);
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    color: var(--darkBlue);
    font-weight: 500;
    font-size: 1.4em;
    font-family: 'Poppins', sans-serif;
  `,

  ContenedorDescripcion: styled.p`
    background-color: var(--green);
    color: var(--darkBlue);
    border-radius: 1em;
    padding: 1em;
    height: 10em;
    width: -webkit-fill-available;
  `,

  Image: styled.img`
    height: 20vh;
    width: auto;
    padding: 1em, 1em, 1em, 0;
    border-radius: 1em;
    margin-top: 1em;
  `,
  Image2: styled.img`
    height: 20vh;
    width: auto;
    padding: 1em, 1em, 1em, 0;
    border-radius: 1em;
    //margin-top: 1em;
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
  DivInfo2: styled.div`
    display: flex;
    //width: 15em;
    justify-content: space-between;
    margin-bottom: 0.5em;
  `,

  DivData: styled.h3`
    font-weight: 200;
  `,
  DivData2: styled.h4`
    font-weight: 300;
    margin-right: 2em;
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
  Info2: styled.div`
    background-color: var(--green-medium);
    color: white;
    font-weight: 500;
    border-radius: 0.7em;
    padding: 1em;
    //height: 20vh;
    width: auto;
    margin: 1em;
    display: flex;
    align-content: space-around;
    flex-direction: column;
    justify-content: space-around;
  `,
  InputDescripcion: styled.textarea`
    padding: 0.5rem;
    resize: none;
    font-family: "Poppins", sans-serif;
    border-radius: 1em;
    background-color: var(--green-medium);
    border: none;
    color: var(--green);
    font-family: 'Poppins', sans-serif;
  `,
};

export default Style;
