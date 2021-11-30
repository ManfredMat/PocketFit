import {
  // PLANTILLA,
  LOG_IN
} from "../Actions/actions-login";

const initialState = {
  
  // prueba: "",
  session:[]

};

function reducerPlantilla(state = initialState, action) {
  switch (action.type) {
    // case PLANTILLA:
    //   return {
    //     ...state,
    //     prueba: action.value,
    //   };
    case LOG_IN:
      return {
        ...state,
        session: action.payload
      }
    default:
      return state;
  }
}

export default reducerPlantilla;