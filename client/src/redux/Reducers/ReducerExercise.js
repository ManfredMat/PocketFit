import {GET_EXERCISES , GET_EXERCISE_BY_ID , RENDER_EXERCISE , SEARCH_EXERCISES} from "../Actions/actions-exercise";


const initialState = {
    exercises: [],
    exercisesBackUp:[],
    exerciseDetail:null,
    exerciseRender:false,
  };

function reducerExercise(state = initialState, action) {
    switch (action.type) {
      case GET_EXERCISES:
        return{
          ...state,
          exercises:action.payload,
          exercisesBackUp:action.payload,
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
      case SEARCH_EXERCISES:
  
      if (action.payload === "Reset" || action.payload === "") {
        return {
          ...state,
          exercises:state.exercisesBackUp           
        }
      } else {
        let searcheredExercises = state.exercises.filter(exercise => exercise.name.toLowerCase() === action.payload.toLowerCase())
       return {
          ...state,
          exercises: searcheredExercises
        }
      }

      default:
        return state;
    }
  }
  
  export default reducerExercise;