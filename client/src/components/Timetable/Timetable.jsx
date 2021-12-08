import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ClasesWeeklyView from "./ClasesWeeklyView";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from 'react-redux';
import Detail from "./DetailEvents";
import Shifts from "./Shifts";
import ScheduleShift from "./ScheduleShift";
import ShiftsConfig from "./ShiftsConfig";
import ShiftsPreview from "./ShiftsPreview";
import { getTimetable } from '../../redux/Actions/actions-Horarios';
import Styles from "./Styles/TimetableStyled";
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es')



function Timetable({ screenHeight }) {
  const [configTurnos, setconfigTurnos] = React.useState(false)
  const [takeShift, setTakeShift] = React.useState(false)
  const [shiftDetail, setShiftDetail] = React.useState(false)
  //"5-21","M-YY"
  const month = moment().format('M')
  const monthName = moment().format('MMMM')
  const year = moment().format('YYYY')

  console.log(month)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimetable())
  }, []);

  return (
    <>
      <Styles.GlobalStyle/>
      <Styles.BodyStyled screenHeight={screenHeight}>
        <Styles.StartBodyStyled>
          <Styles.TitleH1Styled>Horarios</Styles.TitleH1Styled>
          <Styles.ContentBodyStyled>
            <Styles.LeftColumnStyled>
              <div name="Eventos">
                <Styles.EventosHead>
                  <Styles.TitleH2Styled>Eventos | {monthName}</Styles.TitleH2Styled>
                  <Styles.LinkGreen>Ver Mas</Styles.LinkGreen>
                </Styles.EventosHead>
                <Calendar year={year} month={month} />
              </div>
              <div name="detalle">
                <Styles.EventosHead>
                <Styles.TitleH2Styled>Detalle</Styles.TitleH2Styled>
                <Styles.YellowButton>Nuevo Evento</Styles.YellowButton>
                </Styles.EventosHead>
                <Detail />
              </div>
            </Styles.LeftColumnStyled>
            <Styles.RigthColumnStyled>
              <div name="row-1">
                <div>
                  <Styles.TitleH2Styled>Turnos</Styles.TitleH2Styled>

                  <button onClick={() => setTakeShift(!takeShift)}>Agendar Turno</button>
                  <button onClick={() => setconfigTurnos(!configTurnos)}>Configurar Turnos</button>
                </div>
                <Shifts setShiftDetail={setShiftDetail} />
                <Link to="/session/timetable/ShiftsDetails">
                  <button>Ver detalle</button>
                </Link>
              </div>
              <div name="Row-2">
                <div name="Clases Semanales">
                  <h2>Clases Semanales</h2>
                  <ClasesWeeklyView />
                </div>
              </div>
            </Styles.RigthColumnStyled>
          </Styles.ContentBodyStyled>
        </Styles.StartBodyStyled>
        {takeShift &&
          <ScheduleShift display={setTakeShift} />}
        {configTurnos &&
          <ShiftsConfig display={setconfigTurnos} />}
        {shiftDetail &&
          <ShiftsPreview display={setShiftDetail} />}
      </Styles.BodyStyled>
    </>
  );
}

export default Timetable;
