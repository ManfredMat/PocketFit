import axios from "axios";

const { REACT_APP_API} = process.env;

//ACTIONS NAMES
export const GET_LESSONS = "GET_LESSONS";
export const GET_EVENTS = "GET_EVENTS";
export const GET_PROFESSORS = "GET_PROFESSORS";
export const PUT_EVENT_NAME = "PUT_EVENT_NAME";
export const GET_ONE_EVENT = "GET_ONE_EVENT";
export const GET_CLIENTS = "GET_CLIENTS";



export function getLessons() {
  return async function (dispatch) {
    await axios.get(REACT_APP_API + "/api/events/all").then((res) => {
      dispatch({
        type: GET_LESSONS,
        value: res.data,
      });
    });
  };
}

export function getEvents() {
  return async function (dispatch) {
    let response = await axios.get(REACT_APP_API + "/api/events/all");
    dispatch({
      type: GET_EVENTS,
      value: response.data,
    });
  };
}

export function postEvent(payload) {
  return async function () {
    let post = await axios.post(REACT_APP_API + "/api/events", payload);
    return post;
  };
}

export function getProfessors() {
  return async function (dispatch) {
    let professors = await axios.get(
      REACT_APP_API + "/api/users/professors"
    );
    dispatch({
      type: GET_PROFESSORS,
      value: professors.data,
    });
  };
}

export function putEventName(name) {
  return async function (dispatch) {
    dispatch({
      type: PUT_EVENT_NAME,
      value: name,
    });
  };
}

export function getSingleEvent(id) {
  return async function (dispatch) {
    let event = await axios.get(REACT_APP_API + "/api/events/" + id);
    dispatch({
      type: GET_ONE_EVENT,
      value: event.data,
    });
  };
}

export function updateEvent(data, id) {
  return async function () {
    let update = await axios.put(
      REACT_APP_API + `/api/events/${id}`,
      data
    );
    return update;
  };
}

export function getClients() {
  return async function (dispatch) {
    let users = await axios.get(REACT_APP_API + "/api/users/");
    let clients = users.data.filter((user) => user.isuser === true);
    dispatch({
      type: GET_CLIENTS,
      value: clients,
    });
  };
}
