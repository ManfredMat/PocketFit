import React from "react";
import Styles from "./ClasesStyled";

const labelsNames = ["Clase", "Horario", "Profe"];

function Clases({ clases }) {
  return (
    <>
      <Styles.GlobalStyle />
      <Styles.StyledContainer>
        {labelsNames.map((label, index) => (
          <div>{label}</div>
        ))}
        {clases.map((c) => (
          <>
            <div>{c.clase}</div>
            <div>{c.horario}</div>
            <div>{c.profe}</div>
          </>
        ))}
      </Styles.StyledContainer>
    </>
  );
}

export default Clases;
