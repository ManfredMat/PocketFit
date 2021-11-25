import {
 PRUEBA
} from "../actions/actions-names";

const initialState = {
  prueba: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PRUEBA:
      return {
        ...state,
        prueba: action.value,
      };

    default:
      return state;
  }
}

export default reducer;