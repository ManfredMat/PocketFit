import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllShifts } from "../../redux/Actions/actions-Horarios";
import ShiftWeeklyView from "./ShiftWeeklyView";
import ScheduleShift from "./ScheduleShift";
import ShiftsConfig from "./ShiftsConfig";
import ShiftActivate from "./ShiftActivate";
import Styles from "./Styles/ShiftDetailsStyled";
import moment from "moment";

import ShiftsPreview from "./ShiftsPreview";

function ShiftsDetails({ screenHeight }) {
  let today = moment().format("M-D-YYYY").split("-");
  const labels = ["Horario", "Dia", "Fecha", "Disponibilidad", "Semana"];
  const dispatch = useDispatch();
  const allShifts = useSelector((state) => state.timetable.allShifts);
  const [render, setRender] = React.useState(false);
  const [week, setWeek] = React.useState(0);
  const [overFlow, setOverFlow] = React.useState(false);
  const [configTurnos, setconfigTurnos] = React.useState(false);
  const [activateShifts, setActivateShifts] = React.useState(false);
  const [shiftDetail, setShiftDetail] = React.useState(false);
  const [takeShift, setTakeShift] = React.useState(false);

  useEffect(() => {
    setRender(true);
    setWeek(0);
    dispatch(getAllShifts(today[2], today[0], today[1]));
  }, [render]);

  

  return (
    /* Aca hacer logica con style componentes para que si se activan los estados de los carteles el heigth sea fijo y el overFlowY quede hidden */

    render && (
      <>
        <Styles.GlobalStyle />
        <Styles.BodyStyled screenHeight={screenHeight} overFlow={overFlow}>
          <Styles.StartBodyStyled>
            <Styles.Header>
              <Styles.TitleH1Styled>Turnos Sala de Gimnasio</Styles.TitleH1Styled>
              <Styles.ButtonsContainer>
              <Styles.GreenButton onClick={() => {
                setTakeShift(!takeShift);
                setOverFlow(true)
                }}>
                Agendar Turno
              </Styles.GreenButton>
              <Styles.YellowButton onClick={() => {
                setActivateShifts(!activateShifts)
                setOverFlow(true)
                }}>
                Activar Turnos
              </Styles.YellowButton>
              <Styles.UnableButton>
                Configurar Turnos
              </Styles.UnableButton>
              </Styles.ButtonsContainer>
              
            </Styles.Header>
            <div>
              <Styles.genWeekContainer>
                  <Styles.buttonsContainer overFlow={overFlow}>
                  <Styles.buttons onClick={() => setWeek(week !== 0 && week - 1)}>
                  {"<<"}
                </Styles.buttons>
                <Styles.buttons onClick={() => setWeek(week + 1)}>{">>"}</Styles.buttons>
                  </Styles.buttonsContainer>
                
              <ShiftWeeklyView render={render} week={week} overFlow={overFlow} setOverFlow={setOverFlow} setShiftDetail={setShiftDetail}/>
              </Styles.genWeekContainer>

            </div>
            <div>
              <h2>Todos los Turnos</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "2rem ",
                }}
              >
                {labels.map((label) => (
                  <div>{label}</div>
                ))}
                {allShifts.map((shift) => (
                  <>
                    <p>
                      {shift.beginning}hs - {shift.ending}hs
                    </p>
                    <p>{shift.weekday}</p>
                    <p>
                      {" "}
                      {shift.day}/{shift.month}/{shift.year}
                    </p>
                    <p>
                      {shift.availability}/{shift.capacity}
                    </p>
                    <p>{shift.week}</p>
                  </>
                ))}
              </div>
            </div>
          </Styles.StartBodyStyled>
          {takeShift && <ScheduleShift display={setTakeShift} setOverFlow={setOverFlow}/>}
          {configTurnos && <ShiftsConfig display={setconfigTurnos} setOverFlow={setOverFlow} />}
          {activateShifts && (
            <ShiftActivate
              display={setActivateShifts}
              setRender={setRender}
              render={render}
              setOverFlow={setOverFlow}
            />
          )}
          {shiftDetail && <ShiftsPreview display={setShiftDetail} setOverFlow={setOverFlow}/>}
        </Styles.BodyStyled>
      </>
    )
  );
}

export default ShiftsDetails;
