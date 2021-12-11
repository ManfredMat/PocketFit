import React, { useEffect } from "react";
import moment from "moment";
import {
  getWeekShifts,
  selectShift,
  getTimetable,
} from "../../redux/Actions/actions-Horarios";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./Styles/ShiftWeekViewStyled";

import ShiftsPreview from "./ShiftsPreview";

function weekNums(weekShiftsActual) {
  let weekNums = [];
  weekShiftsActual.filter(
    (shift) =>
      !weekNums.includes(shift.day.toLocaleString()) &&
      weekNums.push(shift.day.toLocaleString())
  );
  weekNums.sort((a, b) => a - b);
  return weekNums;
}

function ShiftWeeklyView({ render, week }) {
  const [shiftDetail, setShiftDetail] = React.useState(false);
  const weekShifts = useSelector((state) => state.timetable.weekShifts);
  const dispatch = useDispatch();
  let weekDays = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const weekNumsData = weekNums(weekShifts);
  let weekNum =
    week !== 0
      ? moment().add(week, "w").format("w")
      : moment().format("w", "isoWeek");
  let firstDay = moment(weekNum, "w").format("D/M");
  let lastDay = moment(weekNum, "w").endOf("week").format("D/M");
  const actualTimetable = useSelector(
    (state) => state.timetable.actualTimetable
  );

  //const intervaloLength = actualTimetable.length && actualTimetable.intervalo.length;
  var numbers = [...Array(6 + 1).keys()];

  //console.log("semana:", weekNum)
  //console.log(actualTimetable)
  //console.log(intervaloLength)

  useEffect(() => {
    dispatch(getWeekShifts(parseInt(weekNum)));
    dispatch(getTimetable());
  }, [week]);

  function shiftPreview(shift) {
    dispatch(selectShift(shift));
    setShiftDetail(true);
  }

  return (
    render && (
      <Styles.BodyStyled>
        <h2>Semana</h2>
        <h3>
          {firstDay} al {lastDay}
        </h3>
        <Styles.ContainerStyled style={{ display: "flex" }}>
          <Styles.CardShiftContainer>
            {numbers.map((num) => (
              <Styles.CardNums>
                <p>{num === 0 ? "" : num}</p>
              </Styles.CardNums>
            ))}
          </Styles.CardShiftContainer>
          {weekDays.map((dayName, index) => (
            <Styles.ColumnsStyle>
              <h3 style={{ textAlign: "center" }}>{dayName}</h3>
              <h4 style={{ textAlign: "center" }}>{weekNumsData[index]}</h4>
              <Styles.CardShiftContainer>
                {weekShifts.length ? (
                  weekShifts
                    .filter((shift) => shift.weekday === dayName)
                    .map((day) => (
                      <Styles.CardShift onClick={() => shiftPreview(day)}>
                        <p>
                          {day.availability}/{day.capacity}
                        </p>
                        <p>
                          {day.beginning}hs a {day.ending}hs
                        </p>
                      </Styles.CardShift>
                    ))
                ) : (
                  <p>No hay shifts este dia</p>
                )}
              </Styles.CardShiftContainer>
            </Styles.ColumnsStyle>
          ))}
        </Styles.ContainerStyled>

        {shiftDetail && <ShiftsPreview display={setShiftDetail} />}
      </Styles.BodyStyled>
    )
  );
}

export default ShiftWeeklyView;
