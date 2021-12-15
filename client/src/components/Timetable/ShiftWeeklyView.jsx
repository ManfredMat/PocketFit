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
import styled from "styled-components";

function weekNums(weekShiftsActual) {
  let weekNums = [];
  weekShiftsActual.length && weekShiftsActual.filter(
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
    "Miércoles",
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
  }, [week,weekShifts.length]);

  function shiftPreview(shift) {
    dispatch(selectShift(shift));
    setShiftDetail(true);
  }

  return (
    render && (
      <Styles.BodyStyled>
          
        <Styles.ContainerStyled style={{ display: "flex" }}>
        <Styles.semanaContainer>
          <Styles.semanaText>Semana {firstDay} al {lastDay}</Styles.semanaText>
          </Styles.semanaContainer>
          <Styles.SubContainerStyled>
          <Styles.CardShiftContainer flag={true}>
            {numbers.map((num) => (
              <Styles.CardNums flag={num === 0 ? true : false}>
                <Styles.Nums flag={num === 0 ? true : false}>{num === 0 ? "" : num}</Styles.Nums>
              </Styles.CardNums>
            ))}
          </Styles.CardShiftContainer>
          {weekDays.map((dayName, index) => (
            <Styles.ColumnsStyle>
              <Styles.head>
                <Styles.headText>{dayName}</Styles.headText>
                <Styles.headText>{weekNumsData[index]}</Styles.headText>
              </Styles.head>

              <Styles.CardShiftContainer flag={false}>
                {weekShifts.length ? (
                  weekShifts
                    .filter((shift) => shift.weekday === dayName)
                    .sort(function (a, b) {
                        if (parseInt(a.beginning) > parseInt(b.beginning)) return 1;
                        if (parseInt(a.beginning) < parseInt(b.beginning)) return -1;
                        return 0;})
                    .map((day) => (
                      <Styles.CardShift onClick={() => shiftPreview(day)}>
                        <Styles.capacityTag>
                          {day.availability}/{day.capacity}
                        </Styles.capacityTag>
                        <Styles.timeTag>
                          {day.beginning}hs a {day.ending}hs
                        </Styles.timeTag>
                      </Styles.CardShift>
                    ))
                ) : (
                  <p>No hay shifts este dia</p>
                )}
              </Styles.CardShiftContainer>
            </Styles.ColumnsStyle>
          ))}
          </Styles.SubContainerStyled>
        </Styles.ContainerStyled>

        {shiftDetail && <ShiftsPreview display={setShiftDetail} />}
      </Styles.BodyStyled>
    )
  );
}

export default ShiftWeeklyView;
