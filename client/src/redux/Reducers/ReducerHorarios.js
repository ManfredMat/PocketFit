import {
  GET_LESSONS,
  GET_EVENTS,
  GET_WEEK_SHIFTS, SELECT_SHIFT
} from "../Actions/actions-Horarios";

const initialState = {
  lessons: [],
  events: [],
  weekShifts: [],
  shiftSelect: undefined
};

function reducerHorario(state = initialState, action) {
  switch (action.type) {
    case GET_LESSONS:
      return {
        ...state,
        lessons: action.value,
      }
    case GET_EVENTS:
      return {
        ...state,
        events: action.value,
      }
    case GET_WEEK_SHIFTS:
      return {
        ...state,
        weekShifts: action.value,
      }
    case SELECT_SHIFT:
      return {
        ...state,
        shiftSelect: action.value,
      }

    default:
      return state;
  }
}



export default reducerHorario;