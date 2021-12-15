import React from "react";
import Calendar from "../Timetable/Calendar";
import Clases from "./Clases";
import { Link } from "react-router-dom";
import Styles from "./Styles/HomeStyled";
import datos from "./Datos-Hard";
import Shifts from "../Timetable/Shifts";

const GymName = "FitnessGym";

function month(date) {
  let options = { month: "long" };
  return date.toLocaleDateString(undefined, options);
}

function Home({ screenHeight }) {
  localStorage.setItem("isLogged", "true");
  const [takeShift, setTakeShift] = React.useState(false);
  const [shiftDetail, setShiftDetail] = React.useState(false);

  const date = new Date();
  return (
    <React.Fragment>
      <Styles.GlobalStyle />
      <Styles.StyledBody screenHeight={screenHeight}>
        <h1>Bienvenido, {GymName}!</h1>
        <Styles.ContentDiv>
          <Styles.StyledFirstColumn>
            <Styles.StyledCalendarContainer>
              <Styles.TitleH2Styled>{month(date)}</Styles.TitleH2Styled>
              <Calendar year={date.getFullYear()} month={date.getMonth()} />
            </Styles.StyledCalendarContainer>

            <Styles.StyledClasesContainer>
              <h2>Hoy</h2>
              <div>
                <div>
                  <h3>Clases</h3>
                  <p>Ver Todas</p>
                </div>
                <Clases clases={datos.actividades} />
                <h3>Mañana</h3>
                <Clases clases={datos.actividadesMañana} />
              </div>
            </Styles.StyledClasesContainer>
          </Styles.StyledFirstColumn>
          <Styles.StyledShiftsContainer>
            <Styles.EventosHead>
              <Styles.TitleH2Styled>Turnos</Styles.TitleH2Styled>
              <div>
                <Link to="/session/timetable/ShiftsDetails">
                  <Styles.LinkGreen>Ver detalle</Styles.LinkGreen>
                </Link>
                <Styles.GreenButton onClick={() => setTakeShift(!takeShift)}>
                  Agendar Turno
                </Styles.GreenButton>
              </div>
              {/* <button onClick={() => setconfigTurnos(!configTurnos)}>Configurar Turnos</button> */}
            </Styles.EventosHead>
            <Shifts setShiftDetail={setShiftDetail} />
          </Styles.StyledShiftsContainer>
        </Styles.ContentDiv>

        <div name="row-2"></div>
      </Styles.StyledBody>
    </React.Fragment>
  );
}

export default Home;
