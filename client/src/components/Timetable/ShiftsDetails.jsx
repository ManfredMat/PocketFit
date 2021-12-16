import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllShifts } from "../../redux/Actions/actions-Horarios";
import ShiftWeeklyView from "./ShiftWeeklyView";
import ScheduleShift from "./ScheduleShift";
import ShiftsConfig from "./ShiftsConfig";
import ShiftActivate from "./ShiftActivate";
import Styles from "./Styles/ShiftDetailsStyled";
import moment from "moment";
import { useNavigate} from "react-router-dom";
import ShiftsPreview from "./ShiftsPreview";
import goBack from "../../assets/img/iconos/goBack.svg"


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

  let navigate = useNavigate();

  function handlerClick(e){
    e.preventDefault();
    navigate("/session/timetable")
}
  

  return (
    /* Aca hacer logica con style componentes para que si se activan los estados de los carteles el heigth sea fijo y el overFlowY quede hidden */

    render && (
      <>
        <Styles.GlobalStyle />
        <Styles.BodyStyled screenHeight={screenHeight} overFlow={overFlow}>
          <Styles.StartBodyStyled>
            <Styles.Header>
              <Styles.RightSide>
                <Styles.SearchButton onClick={handlerClick}><img src={goBack} alt="search-icon" height={"30rem"}/></Styles.SearchButton >
                <Styles.TitleH1Styled>Turnos Sala de Gimnasio</Styles.TitleH1Styled>
              </Styles.RightSide>
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
              <Styles.GenWeekContainer>
                  <Styles.ButtonsContainer overFlow={overFlow}>
                  <Styles.Buttons onClick={() => setWeek(week !== 0 && week - 1)}>
                  {"<<"}
                </Styles.Buttons>
                <Styles.Buttons onClick={() => setWeek(week + 1)}>{">>"}</Styles.Buttons>
                  </Styles.ButtonsContainer>
                
              <ShiftWeeklyView render={render} week={week} overFlow={overFlow} setOverFlow={setOverFlow} setShiftDetail={setShiftDetail}/>
              </Styles.GenWeekContainer>

            </div>
            <Styles.AllShiftsConteiner>
              <Styles.TitleH2Styled>Todos los Turnos</Styles.TitleH2Styled>
              <Styles.GridShifts
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "0.1rem ",
                }}
              >
                {labels.map((label) => (
                  <Styles.PropLabel>{label}</Styles.PropLabel>
                ))}
                {allShifts.map((shift , index) => (

                  <>
                  
                    {((index%2)==0)?<Styles.PropBox>{shift.beginning}hs - {shift.ending}hs</Styles.PropBox>:<Styles.PropBoxV2>{shift.beginning}hs - {shift.ending}hs</Styles.PropBoxV2>}
                    {((index%2)==0)?<Styles.PropBox>{shift.weekday}</Styles.PropBox>:<Styles.PropBoxV2>{shift.weekday}</Styles.PropBoxV2>}
                    {((index%2)==0)?<Styles.PropBox>{" "}{shift.day}/{shift.month}/{shift.year}</Styles.PropBox>:<Styles.PropBoxV2>{" "}{shift.day}/{shift.month}/{shift.year}</Styles.PropBoxV2>}
                    {((index%2)==0)?<Styles.PropBox>{shift.availability}/{shift.capacity}</Styles.PropBox>:<Styles.PropBoxV2>{shift.availability}/{shift.capacity}</Styles.PropBoxV2>}
                    {((index%2)==0)?<Styles.PropBox>{shift.week}</Styles.PropBox>:<Styles.PropBoxV2>{shift.availability}/{shift.capacity}</Styles.PropBoxV2>}
                  </>
                ))}
              </Styles.GridShifts>
            </Styles.AllShiftsConteiner>
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
