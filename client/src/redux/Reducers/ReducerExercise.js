import {GET_EXERCISES , GET_EXERCISE_BY_ID} from "../Actions/actions-exercise";


const initialState = {
    exercises: [],
    exerciseDetail:null,
  };

function reducerExercise(state = initialState, action) {
    switch (action.type) {
      case GET_EXERCISES:
        return{
          ...state,
          exercises:action.payload
        }
      case GET_EXERCISE_BY_ID:{
        return{
          ...state,
          exerciseDetail:action.payload
        }
      }
      default:
        return state;
    }
  }
  
  export default reducerExercise;