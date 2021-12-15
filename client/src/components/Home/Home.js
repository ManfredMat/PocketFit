import React from "react";
import Calendar from "../Timetable/Calendar";
import Clases from "./Clases";
import { Link } from "react-router-dom";
import Styles from "./Styles/HomeStyled";
import datos from "./Datos-Hard";
import Shifts from "../Timetable/Shifts";
import ShiftsPreview from "../Timetable/ShiftsPreview";
import * as routine from "./hardCode.json";

const GymName = "FitnessGym";

function month(date) {
  let options = { month: "long" };
  return date.toLocaleDateString(undefined, options);
}

function Home({ screenHeight }) {
  localStorage.setItem("isLogged", "true");
  const [takeShift, setTakeShift] = React.useState(false);
  const [shiftDetail, setShiftDetail] = React.useState(false);
  const [overFlow, setOverFlow] = React.useState(false);
  var weekDays = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const date = new Date();
  return (
    <React.Fragment>
      <Styles.GlobalStyle />
      <Styles.StyledBody screenHeight={screenHeight} overFlow={overFlow}>
        <h1>Bienvenido, {GymName}!</h1>
        <Styles.ContentDiv>
          <Styles.StyledFirstColumn>
            <Styles.RowOne>
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
            </Styles.RowOne>
            <Styles.RowTwo>
              <h2>Plan Semanal</h2>
              <Styles.WeekPlanContainer>
                <Styles.WeekPlan>
                  <Styles.FirstRowWeek style={{ color: "var(--yellow)" }}>
                    {1}
                  </Styles.FirstRowWeek>
                  {weekDays.map((day) => (
                    <Styles.FirstRowWeek>{day}</Styles.FirstRowWeek>
                  ))}
                  {routine && (
                    <>
                      <Styles.BlocksGenContainer>
                        <Styles.BlocksContainers block={1}>1</Styles.BlocksContainers>
                        <Styles.BlocksContainers block={2}>2</Styles.BlocksContainers>
                        <Styles.BlocksContainers block={3}>3</Styles.BlocksContainers>
                      </Styles.BlocksGenContainer>

                      <div name="Lunes">
                        {/* {<p>{routine.monday.day}</p>} */}
                        {routine.monday.blocks.map((block) => (
                          <Styles.BlocksContainers block={block.order}>
                            <Styles.BlockName>{block.kindOfBlock}</Styles.BlockName>
                            {block.exercises.map((exe) => (
                              <Styles.exeName>{exe[0]}</Styles.exeName>
                            ))}
                            <Styles.BlockRounds>{block.rounds} Series</Styles.BlockRounds>
                          </Styles.BlocksContainers>
                        ))}
                      </div>

                      <div name="Martes">
                        {/* {<p>{routine.tuesday.day}</p>} */}
                        {routine.tuesday.blocks.map((block) => (
                          <Styles.BlocksContainers block={block.order}>
                            <Styles.BlockName>{block.kindOfBlock}</Styles.BlockName>

                            {block.exercises.map((exe) => (
                              <Styles.exeName>{exe[0]}</Styles.exeName>
                            ))}
                            <Styles.BlockRounds>{block.rounds} Series</Styles.BlockRounds>
                          </Styles.BlocksContainers>
                        ))}
                      </div>

                      <div name="Miercoles">
                        {/* {<p>{routine.wendsday.day}</p>} */}
                        {routine.wendsday.blocks.map((block) => (
                          <Styles.BlocksContainers block={block.order}>
                            <Styles.BlockName>{block.kindOfBlock}</Styles.BlockName>

                            {block.exercises.map((exe) => (
                              <Styles.exeName>{exe[0]}</Styles.exeName>
                            ))}
                            <Styles.BlockRounds>{block.rounds} Series</Styles.BlockRounds>
                          </Styles.BlocksContainers>
                        ))}
                      </div>

                      <div name="Jueves">
                        {/* {<p>{routine.thursday.day}</p>} */}
                        {routine.thursday.blocks.map((block) => (
                          <Styles.BlocksContainers block={block.order}>
                            <Styles.BlockName>{block.kindOfBlock}</Styles.BlockName>

                            {block.exercises.map((exe) => (
                              <Styles.exeName>{exe[0]}</Styles.exeName>
                            ))}
                            <Styles.BlockRounds>{block.rounds} Series</Styles.BlockRounds>
                          </Styles.BlocksContainers>
                        ))}
                      </div>

                      <div name="Viernes">
                        {/* {<p>{routine.friday.day}</p>} */}
                        {routine.friday.blocks.map((block) => (
                          <Styles.BlocksContainers block={block.order}>
                            <Styles.BlockName>{block.kindOfBlock}</Styles.BlockName>

                            {block.exercises.map((exe) => (
                              <Styles.exeName>{exe[0]}</Styles.exeName>
                            ))}
                            <Styles.BlockRounds>{block.rounds} Series</Styles.BlockRounds>
                          </Styles.BlocksContainers>
                        ))}
                      </div>

                      <div name="Sabado">
                        {/* <p>{routine.saturday.day}</p> */}
                        {routine.saturday.blocks.map((block) => (
                          <Styles.BlocksContainers block={block.order}>
                            <Styles.BlockName>{block.kindOfBlock}</Styles.BlockName>

                            {block.exercises.map((exe) => (
                              <Styles.exeName>{exe[0]}</Styles.exeName>
                            ))}
                            <Styles.BlockRounds>{block.rounds} Series</Styles.BlockRounds>
                          </Styles.BlocksContainers>
                        ))}
                      </div>
                    </>
                  )}
                </Styles.WeekPlan>
              </Styles.WeekPlanContainer>
            </Styles.RowTwo>
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
            </Styles.EventosHead>
            <Shifts setShiftDetail={setShiftDetail} />
          </Styles.StyledShiftsContainer>
        </Styles.ContentDiv>
      </Styles.StyledBody>
      {shiftDetail && (
        <ShiftsPreview display={setShiftDetail} setOverFlow={setOverFlow} />
      )}
    </React.Fragment>
  );
}

export default Home;
