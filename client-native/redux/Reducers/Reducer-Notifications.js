import {
    GET_NOTIFICATIONS
  } from "../Actions/actions-Notifications";
  
  const initialState = {
    notifications: ""
  };
  
  function reducerNotifications(state = initialState, action) {
    switch (action.type) {
      case GET_NOTIFICATIONS:
        return {
          ...state,
          notifications: action.payload
        };
  
      default:
        return state;
    }
  }
  
  export default reducerNotifications;