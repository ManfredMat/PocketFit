import {
  USER_SIGN_IN
} from "../Actions/actions-Prueba";

const initialState = {
  userSignIn: ""
};

function reducerPlantilla(state = initialState, action) {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
        userSignIn: action.value,
      };

    default:
      return state;
  }
}

export default reducerPlantilla;