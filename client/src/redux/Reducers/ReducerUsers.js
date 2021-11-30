import { GET_USERS } from "../Actions/actions-users";

const initialState = {
    users: []
  };

function reducerUsers(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        let filtro = action.payload.filter((user) => user.isadmin !== true);
        
        return {
          ...state,
          users: filtro,
        };
      default:
        return state;
    }
  }
  
  export default reducerUsers;