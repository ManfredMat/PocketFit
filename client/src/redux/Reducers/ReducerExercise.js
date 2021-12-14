import {GET_EXERCISES , GET_EXERCISE_BY_ID , RENDER_EXERCISE} from "../Actions/actions-exercise";


const initialState = {
    exercises: [],
    exerciseDetail:null,
    exerciseRender:false,
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
      case RENDER_EXERCISE:{
        return{
          ...state,
          exerciseRender:action.payload
        }
      }
      default:
        return state;
    }
  }
  
  export default reducerExercise;