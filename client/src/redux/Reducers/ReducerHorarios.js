import {
  GET_LESSONS,
  GET_EVENTS
} from "../Actions/actions-Horarios";

const initialState = {
  lessons: [],
  events: []
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


    default:
      return state;
  }
}



export default reducerHorario;