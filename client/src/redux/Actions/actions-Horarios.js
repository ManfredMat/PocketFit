import axios from "axios";

//ACTIONS NAMES
export const GET_LESSONS = "GET_LESSONS";
export const GET_EVENTS = "GET_EVENTS";

export function getLessons() {
  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/api/events/all")
      .then((res) => {
          let lessons = res.data.filter((cla)=>cla.kindOfEvent === "Clases")
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
          let events = res.data.filter((cla)=>cla.kindOfEvent === "Eventos")
        dispatch({
          type: GET_EVENTS,
          value: events,
        });
      });
  };
}