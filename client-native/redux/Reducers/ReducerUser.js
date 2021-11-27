import {
  USER_SIGN_IN
} from "../Actions/actions-User";

const initialState = {
  userSignIn: undefined
};

function reducerUser(state = initialState, action) {
  switch (action.type) {
    case USER_SIGN_IN:
      console.log(action.payload, "payload")
      return {
        ...state,
        userSignIn: action.payload,
      }

    default:
      return state;
  }
}

export default reducerUser;