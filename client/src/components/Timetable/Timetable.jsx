import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClasesWeeklyView from "./ClasesWeeklyView";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import Detail from "./DetailEvents";
import Shifts from "./Shifts";
import ScheduleShift from "./ScheduleShift";
import ShiftsConfig from "./ShiftsConfig";
import ShiftsPreview from "./ShiftsPreview";
import { getTimetable } from "../../redux/Actions/actions-Horarios";
import Styles from "./Styles/TimetableStyled";
import moment from "moment";
import "moment/locale/es";
import Activities from "../Activities/Activities";
import ClassesDetail from "../Activities/ClassesDetail";
moment.locale("es");

function Timetable({ screenHeight }) {
  const [configTurnos, setconfigTurnos] = React.useState(false);
  const [takeShift, setTakeShift] = React.useState(false);
  const [shiftDetail, setShiftDetail] = React.useState(false);
  const [newClass, setNewClass] = React.useState(false);
  const [newEvent, setNewEvent] = React.useState(false);

  const [claseDetalle, setClaseDetalle] = React.useState(false);
  const [claseId, setClaseId] = useState("");

  const [overFlow, setOverFlow] = React.useState(false);

  //"5-21","M-YY"
  const month = moment().format("M");
  const monthName = moment().format("MMMM");
  const year = moment().format("YYYY");

  console.log(month);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimetable());
  }, []);

  return (
    <>
      <Styles.GlobalStyle />
      <Styles.BodyStyled screenHeight={screenHeight} overFlow={overFlow}>
        <Styles.StartBodyStyled>
          <Styles.TitleH1Styled>Horarios</Styles.TitleH1Styled>
          <Styles.ContentBodyStyled>
            <Styles.LeftColumnStyled>
              <div name="Eventos">
                <Styles.EventosHead>
                  <Styles.TitleH2Styled>
                    Eventos | {monthName}
                  </Styles.TitleH2Styled>
                  <Styles.LinkGreen>Ver Mas</Styles.LinkGreen>
                </Styles.EventosHead>
                <Calendar year={year} month={month} />
              </div>
              <div name="detalle">
                <Styles.EventosHead>
                  <Styles.TitleH2Styled>Detalle</Styles.TitleH2Styled>
                  <Styles.YellowButton onClick={() => setNewEvent(!newEvent)}>
                    Nuevo Evento
                  </Styles.YellowButton>
                </Styles.EventosHead>
                <Detail />
              </div>
            </Styles.LeftColumnStyled>
            <Styles.RigthColumnStyled screenHeight={screenHeight}>
              <Styles.RigthColumnStyledRow1>
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
              </Styles.RigthColumnStyledRow1>
              <Styles.RigthColumnStyledRow2 >
                <Styles.EventosHead>
                <Styles.TitleH2Styled>Clases Semanales</Styles.TitleH2Styled>
                <Styles.YellowButton onClick={() => setNewClass(!newClass)}>
                  Nueva Clase
                </Styles.YellowButton>
                  </Styles.EventosHead>
                  <ClasesWeeklyView claseDetalle={claseDetalle} setClaseId={setClaseId} setClaseDetalle={setClaseDetalle} setOverFlow={setOverFlow}/>
              </Styles.RigthColumnStyledRow2>
            </Styles.RigthColumnStyled>
          </Styles.ContentBodyStyled>
        </Styles.StartBodyStyled>
        {takeShift && <ScheduleShift display={setTakeShift} />}
        {configTurnos && <ShiftsConfig display={setconfigTurnos} />}
        {shiftDetail && <ShiftsPreview display={setShiftDetail} setOverFlow={setOverFlow}/>}
        {newClass && <Activities display={setNewClass} select="Clase" />}
        {newEvent && <Activities display={setNewEvent} select="Evento" />}
        {claseDetalle && <ClassesDetail id={claseId} display={setClaseDetalle} setOverFlow={setOverFlow}/>}
      </Styles.BodyStyled>
    </>
  );
}

export default Timetable;
