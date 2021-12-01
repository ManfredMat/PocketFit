import React, { useState } from "react";
import Calendar from "../_Universals/Calendar";
import Clases from "./Clases";
import Turnos from './Turnos'
import Styles from "./HomeStyled";
import datos from "./Datos-Hard";

const GymName = "FitnessGym";

function month(date) {
  let options = { month: "long" };
  return date.toLocaleDateString(undefined, options);
}

function Home() {
  localStorage.setItem("isLogged", "true");

  const date = new Date();
  return (
    <React.Fragment>
      <Styles.GlobalStyle />
      <Styles.StyledBody>
        <h1>Bienvenido, {GymName}!</h1>
        <Styles.StyledFirstRow>
          <Styles.StyledCalendarContainer>
            <h2>{month(date)}</h2>
            <Calendar year={date.getFullYear()} month={date.getMonth()} />
          </Styles.StyledCalendarContainer>

          <section>
            <h2>Hoy</h2>
            <Styles.StyledTodayRows>
              <Styles.StyledLeftColumn>
                <Styles.StyledLeftColumnHead>
                  <h3>Clases</h3>
                  <p>Ver Todas</p>
                </Styles.StyledLeftColumnHead>
                <Clases clases={datos.actividades}/>
                <h3>Mañana</h3>
                <Clases clases={datos.actividadesMañana}/>
              </Styles.StyledLeftColumn>
              <section>
                <div>
                  <h3>Turnos</h3>
                  <p>Ver Detalle</p>
                </div>
                <Turnos turnos={datos.turnos}/>
              </section>
            </Styles.StyledTodayRows>
          </section>
        </Styles.StyledFirstRow>

        <div name="row-2"></div>
      </Styles.StyledBody>
    </React.Fragment>
  );
}

export default Home;
