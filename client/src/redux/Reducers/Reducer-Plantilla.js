import {
  PLANTILLA
} from "../Actions/actions-Prueba";

const initialState = {
  prueba: ""
};

function reducerPlantilla(state = initialState, action) {
  switch (action.type) {
    case PLANTILLA:
      return {
        ...state,
        prueba: action.value,
      };

    default:
      return state;
  }
}

export default reducerPlantilla;