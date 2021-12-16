import React, { useEffect } from "react";
import {
  getWeekShifts,
  selectShift,
} from "../../redux/Actions/actions-Horarios";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Styles from "./Styles/ShiftsStyled"; 
import { getTimetable } from '../../redux/Actions/actions-Horarios';
import "moment/locale/es";
moment.locale("es");

function Shifts({ setShiftDetail , wrap }) {
  const today = moment().format("dddd");
  const tomorrow = moment().add(1, "d").format("dddd");
  let week = parseInt(moment().format("w"));
  const weekShifts = useSelector((state) => state.timetable.weekShifts);
  const actualTimetable = useSelector((state) => state.timetable.actualTimetable);
  const intervaloLength = actualTimetable.length && actualTimetable.intervalo.length
  const dispatch = useDispatch();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    dispatch(getWeekShifts(week));
    dispatch(getTimetable())
  }, []);

  function shiftPreview(shift) {
    dispatch(selectShift(shift));
    setShiftDetail(true);
  }

  console.log(today,tomorrow)
  return (
    <>
        <Styles.TitleH3Styled>Hoy</Styles.TitleH3Styled>
      <Styles.ListContainer wrap={wrap}>
        {weekShifts
          .filter((shift) => shift.weekday === capitalizeFirstLetter(today))
          .sort(function (a, b) {
            if (parseInt(a.beginning) > parseInt(b.beginning)) return 1;
            if (parseInt(a.beginning) < parseInt(b.beginning)) return -1;
            return 0;})
          .map((ofDay, indexA) => (
            <Styles.ShiftButton  margin={indexA === intervaloLength-1 ? true : false} onClick={() => shiftPreview(ofDay)}>
              <Styles.NumParagrahp>{indexA + 1}</Styles.NumParagrahp>
              <Styles.DateContainer>
              <Styles.DateParagrahp>
                <Styles.AvaParagrahp>{ofDay.availability}</Styles.AvaParagrahp>/ {ofDay.capacity}
              </Styles.DateParagrahp>
              </Styles.DateContainer>
              <Styles.HourParagrahp>
                {ofDay.beginning}hs a {ofDay.ending}hs
              </Styles.HourParagrahp>
            </Styles.ShiftButton>
          ))}
      </Styles.ListContainer>
      <Styles.TitleH3Styled>Mañana</Styles.TitleH3Styled>
      <Styles.ListContainer wrap={wrap}>
        {weekShifts
          .filter((shift) => shift.weekday === capitalizeFirstLetter(tomorrow))
          .sort(function (a, b) {
            if (parseInt(a.beginning) > parseInt(b.beginning)) return 1;
            if (parseInt(a.beginning) < parseInt(b.beginning)) return -1;
            return 0;})
          .map((ofDay, index) => (
            <Styles.ShiftButton onClick={() => shiftPreview(ofDay)}>
              <Styles.NumParagrahp>{index + 1}</Styles.NumParagrahp>
              <Styles.DateContainer>
              <Styles.DateParagrahp>
                <Styles.AvaParagrahp>{ofDay.availability}</Styles.AvaParagrahp> / {ofDay.capacity}
              </Styles.DateParagrahp>
              </Styles.DateContainer>
              <Styles.HourParagrahp>
                {ofDay.beginning}hs a {ofDay.ending}hs
              </Styles.HourParagrahp>
            </Styles.ShiftButton>
          ))}
      </Styles.ListContainer>
    </>
  );
}

export default Shifts;
