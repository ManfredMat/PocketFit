import { ALL_SHIFTS } from "../Actions/actions-Shifts";
  
  const initialState = {
    allShifts: []
  };
  
  function reducerShifts(state = initialState, action) {
    switch (action.type) {
      case ALL_SHIFTS:
        return {
          ...state,
          allShifts: action.payload
        };
        
      default:
        return state;
    }
  }
  
  export default reducerShifts;