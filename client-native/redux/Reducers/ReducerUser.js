import { USER_SIGN_IN } from "../Actions/actions-Login";
import { GET_USER } from "../Actions/actions-getUser";

const initialState = {
  user: undefined
};

function reducerUser(state = initialState, action) {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
        user: action.payload,
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

export default reducerUser;