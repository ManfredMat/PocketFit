import { GET_USERS, RENDER_USER_DETAIL, SEARCH_USERS, GET_USER_DETAIL } from "../Actions/actions-users";
//import * as json from "../../components/Users/Users.json";

const initialState = {
    users: [],
    searchedUsers: [],
    renderUserDetail: false,
    userDetail: {}
  };

function reducerUsers(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        //comentar el if de abajo si en la db se tiene menos de 3 users
        // if (action.payload.length < 3) {
        //   return {
        //     ...state,
        //     users: json.users
        //   }
        // }

        return {
          ...state,
          users: action.payload
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

      case RENDER_USER_DETAIL:
        return {
          ...state,
          renderUserDetail: action.payload
        }

      case GET_USER_DETAIL: {
        if (action.payload === "CLEAR") {
          return {
            ...state,
            userDetail: {}
          }
        } else {
          return {
            ...state,
            userDetail: action.payload
          }
        }

      }
      default:
        return state;
    }
  }
  
  export default reducerUsers;