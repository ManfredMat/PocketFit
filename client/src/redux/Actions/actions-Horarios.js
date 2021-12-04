import axios from "axios";
import * as json from "../../components/Timetable/Hard-code.json";

//ACTIONS NAMES
export const GET_LESSONS = "GET_LESSONS";
export const GET_EVENTS = "GET_EVENTS";
export const GET_WEEK_SHIFTS = "GET_WEEK_SHIFTS";
export const SELECT_SHIFT = "SELECT_SHIFT";
export const GET_ALL_SHIFTS = "GET_ALL_SHIFTS";
export const GET_ACTUAL_TIMETABLE = "GET_ACTUAL_TIMETABLE";

export function getLessons() {
  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/api/events/all")
      .then((res) => {
        let lessons = res.data.filter((cla) => cla.kindOfEvent === "Clases")
        dispatch({
          type: GET_LESSONS,
          value: lessons,
        });
      });
  };
}

export function getEvents() {
  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/api/events/all")
      .then((res) => {
        let events = res.data.filter((cla) => cla.kindOfEvent === "Eventos")
        dispatch({
          type: GET_EVENTS,
          value: events,
        });
      });
  };
}

export function getWeekShifts(firstDay,
  firstDayMonth,
  firstDayMonthDays,
  lastDay,
  lastDayMonth,
  week,
  year,
  weekDaysNames,
  timetableId) {


  const body = {
    firstDay: parseInt(firstDay),
    firstDayMonth:parseInt(firstDayMonth),
    lastDay: parseInt(lastDay),
    lastDayMonth: parseInt(lastDayMonth),
    year: parseInt(year),
    firstDayMonthDays,
    week,
    weekDaysNames,
    timetableId
  }
  console.log(body)

  return async function (dispatch) {
    await axios.post('http://localhost:3001/api/shift/weekcreate', body)
      .then(res => {
        //console.log(res.data)
        dispatch({
          type: GET_WEEK_SHIFTS,
          value: res.data,
        })
      });
  }}

export function postWeekShifts(firstDay,
  firstDayMonth,
  firstDayMonthDays,
  lastDay,
  lastDayMonth,
  week,
  year,
  weekDaysNames,
  timetableId) {


  const body = {
    firstDay: parseInt(firstDay),
    firstDayMonth:parseInt(firstDayMonth),
    lastDay: parseInt(lastDay),
    lastDayMonth: parseInt(lastDayMonth),
    year: parseInt(year),
    firstDayMonthDays,
    week,
    weekDaysNames,
    timetableId
  }
  console.log(body)

  return async function (dispatch) {
    await axios.post('http://localhost:3001/api/shift/weekcreate', body)
      .then(res => {
        //console.log(res.data)
        dispatch({
          type: GET_WEEK_SHIFTS,
          value: res.data,
        })
      });
  }
}

export function selectShift(shift) {
  return {
    type: SELECT_SHIFT,
    value: shift,
  }
}

export function getAllShifts(year,month,day) {

  const query = {
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day)
  }

  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/api/shift/all", {params:query})
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: GET_ALL_SHIFTS,
          value: res.data,
        });
      });
  };
}

export function getTimetable() {
  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/api/timetables/1")
      .then((res) => {
        dispatch({
          type: GET_ACTUAL_TIMETABLE,
          value: res.data,
        });
      });
  };
}