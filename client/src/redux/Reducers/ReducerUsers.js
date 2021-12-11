import {
  GET_USERS,
  RENDER_USER_DETAIL,
  SEARCH_USERS,
  GET_USER_DETAIL,
  SORT,
  FILTER
} from "../Actions/actions-users";
// import * as json from "../../components/Users/Users.json";

const initialState = {
  users: [],
  searchedUsers: [],
  renderUserDetail: false,
  userDetail: {},
  filter: undefined
};

function reducerUsers(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      //comentar el if de abajo si en la db se tiene menos de 3 users
      // if (action.payload.length < 3) {
      //   return {
      //     ...state,
      //     users: json.users,
      //     searchedUsers : json.users
      //   }
      // }

      return {
        ...state,
        users: action.payload,
        searchedUsers: action.payload
      };

    case SEARCH_USERS:
      if (action.payload === "Reset" || action.payload === "") {
        return {
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

    case SORT:
      let orderedUsers = [...state.searchedUsers];

      if (action.payload === "na-z" || action.payload === "nz-a") {
        orderedUsers = orderedUsers.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0;
        })

        if (action.payload === "nz-a") orderedUsers = orderedUsers.reverse();
      } else {
        orderedUsers = orderedUsers.sort((a, b) => {
          if (a.lastname > b.lastname) {
            return 1
          }
          if (a.lastname < b.lastname) {
            return -1
          }
          return 0;
        })

        if (action.payload === "az-a") orderedUsers = orderedUsers.reverse();
      }

      return {
        ...state,
        searchedUsers: orderedUsers
      }

    case FILTER:
      if (action.payload === "no-filters") {
        return {
          ...state,
          searchedUsers: state.users,
          filter: action.payload
        }
      } else if (action.payload === "ACTIVO" || action.payload === "INACTIVO") {
        let filteredUsers = [];

        if (action.payload === "ACTIVO") {
          filteredUsers = state.users.filter((user) => user.status === "ACTIVO")
        } else {
          filteredUsers = state.users.filter((user) => user.status === "INACTIVO")
        }

        if (filteredUsers.length === 0) {
          return {
            ...state,
            searchedUsers: "No filters"
          }
        }

        return {
          ...state,
          searchedUsers: filteredUsers,
          filter: action.payload
        }
      } else {
        let filteredUsers = [];

        if (action.filter === "PAGO") {
          filteredUsers = action.payload.upToDate
        } else {
          filteredUsers = action.payload.offToDate
        }

        if (filteredUsers.length === 0) {
          return {
            ...state,
            searchedUsers: "No filters"
          }
        }

        return {
          ...state,
          searchedUsers: filteredUsers,
          filter: action.payload
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