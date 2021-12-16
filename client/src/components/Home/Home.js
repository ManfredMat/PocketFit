import React from "react";
import Calendar from "../Timetable/Calendar";
import Clases from "./Clases";
import { Link } from "react-router-dom";
import Styles from "./Styles/HomeStyled";
import { useSelector, useDispatch } from "react-redux";
import Shifts from "../Timetable/Shifts";
import ShiftsPreview from "../Timetable/ShiftsPreview";
import ScheduleShift from "../Timetable/ScheduleShift";

import { getRoutine, getLessons } from "../../redux/Actions/actions-Horarios";
//import * as routine from "./hardCode.json";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const GymName = "FitnessGym";


function Home({ screenHeight }) {
  const today = moment().format("dddd");
  const tomorrow = moment().add(1, "d").format("dddd");
  localStorage.setItem("isLogged", "true");
  const routine = useSelector((state) => state.timetable.routine);
  const lessons = useSelector(state => state.timetable.lessons)
  const [takeShift, setTakeShift] = React.useState(false);
  const [shiftDetail, setShiftDetail] = React.useState(false);
  const [overFlow, setOverFlow] = React.useState(false);
  const dispatch = useDispatch();

  const month = moment().format("M");
  const monthName = moment().format("MMMM");
  const year = moment().format("YYYY");


  var weekDays = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  React.useEffect(() => {
    dispatch(getRoutine());
    dispatch(getLessons());
  }, [dispatch]);

  console.log(routine);
  console.log(lessons);

  return (
    <React.Fragment>
      <Styles.GlobalStyle />
      <Styles.StyledBody screenHeight={screenHeight} overFlow={overFlow}>
        <h1>Bienvenido, {GymName}!</h1>
        <Styles.StyledContent>

          {/* First Row */}
          <Styles.FirstRow>
            <Styles.WeekPlanContainer>
            <Styles.TitleH2Styled>Plan Semanal</Styles.TitleH2Styled>
              <Styles.WeekPlan>
                <Styles.FirstRowWeek style={{ color: "var(--yellow)" }}>
                  {1}
                </Styles.FirstRowWeek>
                {weekDays.map((day) => (
                  <Styles.FirstRowWeek>{day}</Styles.FirstRowWeek>
                ))}
                {routine ? (
                  <>
                    <Styles.BlocksGenContainer>
                      <Styles.BlocksContainers block={1}>
                        <Styles.Nums>1</Styles.Nums>
                      </Styles.BlocksContainers>
                      <Styles.BlocksContainers block={2}>
                        <Styles.Nums>2</Styles.Nums>
                      </Styles.BlocksContainers>
                      <Styles.BlocksContainers block={3}>
                        <Styles.Nums>3</Styles.Nums>
                      </Styles.BlocksContainers>
                    </Styles.BlocksGenContainer>

                    <div name="Lunes">
                      {/* {<p>{routine.monday.day}</p>} */}
                      {routine.monday.blocks.map((block) => (
                        <Styles.BlocksContainers block={block.order}>
                          <Styles.BlockName>
                            {block.kindOfBlock}
                          </Styles.BlockName>
                          {block.exercises.map((exe) => (
                            <Styles.ExeName>{exe[0]}</Styles.ExeName>
                          ))}
                          <Styles.BlockRounds>
                            {block.rounds} Series
                          </Styles.BlockRounds>
                        </Styles.BlocksContainers>
                      ))}
                    </div>

                    <div name="Martes">
                      {/* {<p>{routine.tuesday.day}</p>} */}
                      {routine.tuesday.blocks.map((block) => (
                        <Styles.BlocksContainers block={block.order}>
                          <Styles.BlockName>
                            {block.kindOfBlock}
                          </Styles.BlockName>

                          {block.exercises.map((exe) => (
                            <Styles.ExeName>{exe[0]}</Styles.ExeName>
                          ))}
                          <Styles.BlockRounds>
                            {block.rounds} Series
                          </Styles.BlockRounds>
                        </Styles.BlocksContainers>
                      ))}
                    </div>

                    <div name="Miercoles">
                      {/* {<p>{routine.wendsday.day}</p>} */}
                      {routine.wendsday.blocks.map((block) => (
                        <Styles.BlocksContainers block={block.order}>
                          <Styles.BlockName>
                            {block.kindOfBlock}
                          </Styles.BlockName>

                          {block.exercises.map((exe) => (
                            <Styles.ExeName>{exe[0]}</Styles.ExeName>
                          ))}
                          <Styles.BlockRounds>
                            {block.rounds} Series
                          </Styles.BlockRounds>
                        </Styles.BlocksContainers>
                      ))}
                    </div>

                    <div name="Jueves">
                      {/* {<p>{routine.thursday.day}</p>} */}
                      {routine.thursday.blocks.map((block) => (
                        <Styles.BlocksContainers block={block.order}>
                          <Styles.BlockName>
                            {block.kindOfBlock}
                          </Styles.BlockName>

                          {block.exercises.map((exe) => (
                            <Styles.ExeName>{exe[0]}</Styles.ExeName>
                          ))}
                          <Styles.BlockRounds>
                            {block.rounds} Series
                          </Styles.BlockRounds>
                        </Styles.BlocksContainers>
                      ))}
                    </div>

                    <div name="Viernes">
                      {/* {<p>{routine.friday.day}</p>} */}
                      {routine.friday.blocks.map((block) => (
                        <Styles.BlocksContainers block={block.order}>
                          <Styles.BlockName>
                            {block.kindOfBlock}
                          </Styles.BlockName>

                          {block.exercises.map((exe) => (
                            <Styles.ExeName>{exe[0]}</Styles.ExeName>
                          ))}
                          <Styles.BlockRounds>
                            {block.rounds} Series
                          </Styles.BlockRounds>
                        </Styles.BlocksContainers>
                      ))}
                    </div>

                    <div name="Sabado">
                      {/* <p>{routine.saturday.day}</p> */}
                      {routine.saturday.blocks.map((block) => (
                        <Styles.BlocksContainers block={block.order}>
                          <Styles.BlockName>
                            {block.kindOfBlock}
                          </Styles.BlockName>

                          {block.exercises.map((exe) => (
                            <Styles.ExeName>{exe[0]}</Styles.ExeName>
                          ))}
                          <Styles.BlockRounds>
                            {block.rounds} Series
                          </Styles.BlockRounds>
                        </Styles.BlocksContainers>
                      ))}
                    </div>
                  </>
                ) : (
                  <div>
                    <p>
                      Aqui veras una previsualizacion si creas un plan semanal
                      General
                    </p>
                  </div>
                )}
              </Styles.WeekPlan>
            </Styles.WeekPlanContainer>

            <Styles.StyledClasesContainer>
              <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
              <h2>Clases</h2>
              <Link to="/session/timetable/ShiftsDetails">
                    <Styles.LinkGreen style={{fontSize: "0.85rem"}}>Ver Todas</Styles.LinkGreen>
                </Link>
              </div>
              
              <div>
                <h3>Hoy</h3>
                <Clases day={today} />
                <h3>Mañana</h3>
                <Clases day={tomorrow} />
              </div>
            </Styles.StyledClasesContainer>
          </Styles.FirstRow>

          <div style={{ display: "flex" }}>
            <Styles.StyledCalendarContainer>
              <Styles.TitleH2Styled>{monthName}</Styles.TitleH2Styled>
              <Calendar year={year} month={month} big={true}/>
            </Styles.StyledCalendarContainer>

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
              </Styles.EventosHead>
              <Shifts setShiftDetail={setShiftDetail} wrap={true} />
            </Styles.StyledShiftsContainer>
          </div>
        </Styles.StyledContent>
      </Styles.StyledBody>
      {takeShift && <ScheduleShift display={setTakeShift} setOverFlow={setOverFlow}/>}
      {shiftDetail && (
        <ShiftsPreview display={setShiftDetail} setOverFlow={setOverFlow} />
      )}
    </React.Fragment>
  );
}

export default Home;
