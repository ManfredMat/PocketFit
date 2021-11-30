import {
    EXERCISE
  } from "../Actions/actions-Training";
  
  const initialState = {
    exercise: []
  };
  
  function reducerTraining(state = initialState, action) {
    switch (action.type) {
      case EXERCISE:
        console.log(value.data, 'reducer')
        return {
          ...state,
          exercise: value.data
        };
  
      default:
        return state;
    }
  }
  
  export default reducerTraining;