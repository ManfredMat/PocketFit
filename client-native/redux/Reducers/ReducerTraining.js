import {
  WEEK_PLAN
  } from "../Actions/actions-Training";
  
  const initialState = {
    weekPlan: []
  };
  
  function reducerTraining(state = initialState, action) {
    switch (action.type) {
      case WEEK_PLAN:
        return {
          ...state,
          weekPlan: action.payload
        };
        
      default:
        return state;
    }
  }
  
  export default reducerTraining;