import {
  WEEK_PLAN,
  TRAINING_STATS
  } from "../Actions/actions-Training";
  
  const initialState = {
    weekPlan: [],
    stats: 1
  };
  
  function reducerTraining(state = initialState, action) {
    switch (action.type) {
      case WEEK_PLAN:
        return {
          ...state,
          weekPlan: action.payload
        };
        case TRAINING_STATS:
          console.log(state.stats)
          return{
            ...state,
            stats: state.stats + action.payload
          }
      default:
        return state;
    }
  }
  
  export default reducerTraining;