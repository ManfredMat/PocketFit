import axios from "axios";


//ACTIONS NAMES
export const GET_LESSONS = "GET_LESSONS";
export const GET_EVENTS = "GET_EVENTS";
export const GET_WEEK_SHIFTS = "GET_WEEK_SHIFTS";
export const SELECT_SHIFT = "SELECT_SHIFT";
export const GET_ALL_SHIFTS = "GET_ALL_SHIFTS";
export const GET_ACTUAL_TIMETABLE = "GET_ACTUAL_TIMETABLE";
export const PUT_SHIFT_USER = "PUT_SHIFT_USER";
export const PUT_SHIFT_USER_CLEAN = "PUT_SHIFT_USER_CLEAN";

export function getLessons() {
  return async function (dispatch) {
    await axios 
      .get(`${REACT_APP_API}/api/events/all`)
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
    
      .get(`${REACT_APP_API}/api/events/all`)
      .then((res) => {
        let events = res.data.filter((cla) => cla.kindOfEvent === "Eventos")
        dispatch({
          type: GET_EVENTS,
          value: events,
        });
      });
  };
}

export function getWeekShifts(week) {

  return async function (dispatch) {
 
    await axios.get(`${REACT_APP_API}/api/shift/week/${week}`)
      .then(res => {
      console.log("getWeek:",res.data)
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
    await axios.post(`${REACT_APP_API}/api/shift/weekcreate`, body)
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
      .get(`${REACT_APP_API}/api/shift/all`, {params:query})
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
      .get(`${REACT_APP_API}/api/timetables/1`)
      .then((res) => {
        dispatch({
          type: GET_ACTUAL_TIMETABLE,
          value: res.data,
        });
      });
  };
}

export function postShift(body) {
  return async function (dispatch) {
    await axios
      .put(`${REACT_APP_API}/api/shift/update`,body)
      .then((create) => {
        console.log(create.data)
        /* dispatch({
          type: PUT_SHIFT_USER,
          value: res.data,
        }); */
      })
      await axios
      .get(`${REACT_APP_API}/api/shift/${body.idShift}`)
      .then((res) => {
        dispatch({
          type: PUT_SHIFT_USER,
          value: res.data,
        });
      })
  };
}

export function postShiftClean() {
  return {
    type: PUT_SHIFT_USER_CLEAN,
    value: [],
  }
}