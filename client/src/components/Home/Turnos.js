import React from "react";
import Styles from "./TurnosStyled";


function Clases({ turnos }) {
  return (
    <>
      <Styles.GlobalStyle />
      <Styles.StyledContainer>

        {turnos.map((t) => (
          <div style={{display:"flex", flexDirection:'column',margin:"1rem",padding:'1rem',background:'grey'}}>
            <div>{t.orden}</div>
            <div>
            <p>{t.ocupado}/{t.cupo}</p>
            </div>
            <p>{t.franjahoraria}</p>
          </div>
        ))}
      </Styles.StyledContainer>
    </>
  );
}

export default Clases;
