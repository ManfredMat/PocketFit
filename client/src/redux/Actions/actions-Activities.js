import axios from "axios";

//ACTIONS NAMES
export const GET_LESSONS = "GET_LESSONS";
export const GET_EVENTS = "GET_EVENTS";
export const GET_PROFESSORS = "GET_PROFESSORS";
export const GET_ONE_EVENT = "GET_ONE_EVENT";
export const GET_CLIENTS = "GET_CLIENTS";

export function getLessons() {
  return async function (dispatch) {
    await axios.get("http://localhost:3001/api/events/all").then((res) => {
      let lessons = res.data.filter((cla) => cla.kindOfEvent === "Clases");
      dispatch({
        type: GET_LESSONS,
        value: lessons,
      });
    });
  };
}

export function getEvents() {
  return async function (dispatch) {
    await axios.get("http://localhost:3001/api/events/all").then((res) => {
      let events = res.data.filter((cla) => cla.kindOfEvent === "Evento");
      dispatch({
        type: GET_EVENTS,
        value: events,
      });
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

export function getSingleEvent(id) {
  return async function (dispatch) {
    let event = await axios.get("http://localhost:3001/api/events/" + id);
    dispatch({
      type: GET_ONE_EVENT,
      value: event.data,
    });
  };
}

export function updateEvent(data, id) {
  return async function () {
    let update = await axios.put(
      `http://localhost:3001/api/events/${id}`,
      data
    );
    return update;
  };
}

export function getClients() {
  return async function (dispatch) {
    let users = await axios.get("http://localhost:3001/api/users/");
    let clients = users.data.filter((user) => user.isuser === true);
    dispatch({
      type: GET_CLIENTS,
      value: clients,
    });
  };
}
