import axios from "axios";

//ACTIONS NAMES
export const GET_LESSONS = "GET_LESSONS";
export const GET_EVENTS = "GET_EVENTS";
export const GET_PROFESSORS = "GET_PROFESSORS";

export function getLessons() {
  return async function (dispatch) {
    await axios.get("http://localhost:3001/api/events/all").then((res) => {
      dispatch({
        type: GET_LESSONS,
        value: res.data
      });
    });
  };
}

export function getEvents() {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/api/events/all")
    dispatch({
        type: GET_EVENTS,
        value:response.data
      });
  };
}

export function postEvent(payload) {
  return async function () {
    let post = await axios.post("http://localhost:3001/api/events", payload);
    return post;
  };
}

export function getProfessors() {
  return async function (dispatch) {
    let professors = await axios.get(
      "http://localhost:3001/api/users/professors"
    );
    dispatch({
      type: GET_PROFESSORS,
      value: professors.data,
    });
  };
}
