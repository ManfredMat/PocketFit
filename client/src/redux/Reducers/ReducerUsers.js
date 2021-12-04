import { GET_USERS, SEARCH_USERS } from "../Actions/actions-users";

const initialState = {
    users: [],
    searchedUsers: []
  };

function reducerUsers(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          users: action.payload,
        };

      case SEARCH_USERS:
        if (action.payload === "Reset" || action.payload === "") {
          return{
            ...state,
            searchedUsers: state.users
          }
        } else {
          let searchedUsers = state.users.filter(user => user.name.toLowerCase() === action.payload.toLowerCase() || user.lastname.toLowerCase() === action.payload.toLowerCase())
          if (searchedUsers.length === 0) {
            return {
              ...state,
              searchedUsers: "No users"
            }
          }
          
          return {
            ...state,
            searchedUsers: searchedUsers
          }
        }

      default:
        return state;
    }
  }
  
  export default reducerUsers;