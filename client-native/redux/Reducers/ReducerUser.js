import {
  USER_SIGN_IN
} from "../Actions/actions-User";

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

    default:
      return state;
  }
}

export default reducerUser;