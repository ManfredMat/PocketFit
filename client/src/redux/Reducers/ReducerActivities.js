import {
  GET_LESSONS,
  GET_EVENTS,
  GET_PROFESSORS,
} from "../Actions/actions-Activities";

const initialState = {
  lessons: [],
  events: [],
  professors: [],
};

function reducerActivities(state = initialState, action) {
  switch (action.type) {
    case GET_LESSONS:
      return {
        ...state,
        lessons: action.value,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.value,
      };
    case GET_PROFESSORS:
      return {
        ...state,
        professors: action.value,
      };
    default:
      return state;
  }
}

export default reducerActivities;
