import React, { useEffect } from "react";
import moment from "moment";
import {
  getWeekShifts,
  selectShift,
  getTimetable,
} from "../../redux/Actions/actions-Horarios";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./Styles/ShiftWeekViewStyled";


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

function ShiftWeeklyView({ render, week ,  overFlow , setOverFlow, setShiftDetail }) {
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
 

  //const intervaloLength = actualTimetable.length && actualTimetable.intervalo.length;
  var numbers = [...Array(6 + 1).keys()];

  //console.log("semana:", weekNum)
  //console.log(actualTimetable)
  //console.log(intervaloLength)

  useEffect(() => {
    dispatch(getWeekShifts(parseInt(weekNum)));
    dispatch(getTimetable());
  //eslint-disable-next-line
  }, [week,weekShifts.length, overFlow]);

  function shiftPreview(shift) {
    dispatch(selectShift(shift));
    setShiftDetail(true);
    setOverFlow(true);
  }

  return (
    render && (
      <Styles.BodyStyled>
          
        <Styles.ContainerStyled style={{ display: "flex" }}>
        <Styles.SemanaContainer>
          <Styles.SemanaText>Semana {firstDay} al {lastDay}</Styles.SemanaText>
          </Styles.SemanaContainer>
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
              <Styles.Head>
                <Styles.HeadText>{dayName}</Styles.HeadText>
                <Styles.HeadText>{weekNumsData[index]}</Styles.HeadText>
              </Styles.Head>

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
                        <Styles.CapacityTag>
                          {day.availability}/{day.capacity}
                        </Styles.CapacityTag>
                        <Styles.TimeTag>
                          {day.beginning}hs a {day.ending}hs
                        </Styles.TimeTag>
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

        
      </Styles.BodyStyled>
    )
  );
}

export default ShiftWeeklyView;
