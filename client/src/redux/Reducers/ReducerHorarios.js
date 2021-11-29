import {
  GET_LESSONS
} from "../Actions/actions-Horarios";

const initialState = {
  lessons: ""
};

function reducerHorario(state = initialState, action) {
  switch (action.type) {
    case GET_LESSONS:
      return {
        ...state,
        lessons: action.value,
      }
      
    default:
      return state;
  }
}



export default reducerHorario;