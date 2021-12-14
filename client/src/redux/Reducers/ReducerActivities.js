import {
  GET_LESSONS,
  GET_EVENTS,
  GET_PROFESSORS,
  PUT_EVENT_NAME,
  GET_ONE_EVENT,
  GET_CLIENTS,
} from "../Actions/actions-Activities";

const initialState = {
  lessons: [],
  events: [],
  professors: [],
  eventname: "",
  event: [],
  clients: [],
};

function reducerActivities(state = initialState, action) {
  switch (action.type) {
    case GET_LESSONS:
      return {
        ...state,
        lessons: action.value.length
          ? action.value.filter((cla) => cla.kindOfEvent === "Clases")
          : [],
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.value.length
          ? action.value.filter((cla) => cla.kindOfEvent === "Evento")
          : [],
      };
    case GET_PROFESSORS:
      return {
        ...state,
        professors: action.value,
      };
    case PUT_EVENT_NAME:
      return {
        ...state,
        eventname: action.value,
      };
    case GET_ONE_EVENT:
      return { ...state, event: action.value };
    case GET_CLIENTS:
      return { ...state, clients: action.value };
    default:
      return state;
  }
}

export default reducerActivities;
