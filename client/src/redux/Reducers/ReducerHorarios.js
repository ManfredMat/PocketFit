import {
  GET_LESSONS,
  GET_EVENTS,
  GET_WEEK_SHIFTS,
  SELECT_SHIFT,
  GET_ALL_SHIFTS,
  GET_ACTUAL_TIMETABLE,
  PUT_SHIFT_USER,
  PUT_SHIFT_USER_CLEAN,
  CREATED_WEEK_SHIFTS,
  GET_ROUTINE
} from "../Actions/actions-Horarios";

const initialState = {
  lessons: [],
  events: [],
  weekShifts: [],
  shiftSelect: undefined,
  allShifts: [],
  actualTimetable: [],
  putShiftUser: [],
  routine: undefined
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
      case CREATED_WEEK_SHIFTS:
      return {
        ...state,
        weekShifts: action.value,
      }
    case SELECT_SHIFT:
      return {
        ...state,
        shiftSelect: action.value,
      }
    case GET_ALL_SHIFTS:
      return {
        ...state,
        allShifts: action.value,
      }
    case GET_ACTUAL_TIMETABLE:
      return {
        ...state,
        actualTimetable: action.value,
      }

    case PUT_SHIFT_USER:
      let array = []
      array.push(action.value)
      return {
        ...state,
        putShiftUser: array,
      }

    case PUT_SHIFT_USER_CLEAN:
      return {
        ...state,
        putShiftUser: action.value,
      }

    case GET_ROUTINE:
      return {
        ...state,
        routine: action.value,
      }

    default:
      return state;
  }
}



export default reducerHorario;