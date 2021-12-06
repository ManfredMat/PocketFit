import { ALL_SHIFTS, GET_BY_ID, DELETE_SHIFTS } from "../Actions/actions-Shifts";
  
  const initialState = {
    allShifts: [],
    myShifts: []
  };
  
  function reducerShifts(state = initialState, action) {
    switch (action.type) {
      case ALL_SHIFTS:
        return {
          ...state,
          allShifts: action.payload
        };

      case GET_BY_ID:
        const data = action.payload
        let exists = state.myShifts.filter(e => e.id === data.id)
        if(exists.length > 0) {
         return alert('Te Esperamos!') 
        } else {
        return {
          ...state,
          myShifts: state.myShifts.concat(action.payload)
        }
      }
      case DELETE_SHIFTS:
        const el = action.payload
        let remove = state.myShifts.filter(e => e.id !== el)
        console.log(remove)
        return{
          ...state,
          myShifts: remove
        }

      default:
        return state;
    }
  }
  
  export default reducerShifts;