import {
  GET_USERS,
  RENDER_USER_DETAIL,
  SEARCH_USERS,
  GET_USER_DETAIL,
  SORT,
  FILTER,
  filtered
} from "../Actions/actions-users";
// import * as json from "../../components/Users/Users.json";

const initialState = {
  users: [],
  renderedUsers: [],
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
      //     renderedUsers: json.users,
      //     searchedUsers : json.users
      //   }
      // }

      return {
        ...state,
        users: action.payload,
        renderedUsers: action.payload,
        searchedUsers: action.payload
      };

    case SEARCH_USERS:
      if (action.payload === "Reset" || action.payload === "") {
        return {
          ...state,
          renderedUsers: state.users,
          searchedUsers: state.users
        }
      } else {
        let searcheredUsers = state.users.filter(user => user.name.toLowerCase() === action.payload.toLowerCase() || user.lastname.toLowerCase() === action.payload.toLowerCase())
        if (searcheredUsers.length === 0) {
          return {
            ...state,
            renderedUsers: "No users"
          }
        }

        return {
          ...state,
          renderedUsers: searcheredUsers,
          searchedUsers: searcheredUsers
        }
      }

    case SORT:
      let orderedUsers = [...state.renderedUsers];

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
        renderedUsers: orderedUsers
      }

    case FILTER:
      if (action.payload === "no-filters") {
        return {
          ...state,
          renderedUsers: state.searchedUsers,
          filter: action.payload
        }
      } else if (action.payload === "ACTIVO" || action.payload === "INACTIVO") {
        let filteredUsers = [];

        if (action.payload === "ACTIVO") {
          filteredUsers = state.searchedUsers.filter((user) => user.status === "ACTIVO")
        } else {
          filteredUsers = state.searchedUsers.filter((user) => user.status === "INACTIVO")
        }

        if (filteredUsers.length === 0) {
          return {
            ...state,
            renderedUsers: "No filters"
          }
        }

        return {
          ...state,
          renderedUsers: filteredUsers,
          filter: action.payload
        }
      } else {
        const dateFormat = (() => {
            const newDate = new Date();
            const format = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getUTCDate()}T00:00:00.000Z`;
            return format;
        })();
        console.log(dateFormat, "DATE_FORMAT")
        
        let filteredUsers = [];
        let alDia = [];
        let fueraDeTermino = [];

        for (let i = 0; i < state.searchedUsers.length; i++) {
          if (state.searchedUsers[i].paymentday > dateFormat) {
            alDia.push(state.searchedUsers[i]);
          } else {
            fueraDeTermino.push(state.searchedUsers[i]);
          }
        }
        console.log(alDia, "AL_DIA")
        console.log(fueraDeTermino, "FUERA_DE_TERMINO")
        alDia.map((users) => {
          if (users.imageData) users.imageData = users.imageData.toString("base64");
        });

        fueraDeTermino.map((users) => {
          if (users.imageData) users.imageData = users.imageData.toString("base64");
        });

        if (action.payload === "PAGO") {
          filteredUsers = alDia
        } else {
          filteredUsers = fueraDeTermino
        }
        console.log(filteredUsers, "FILTERED_USERS")
        if (filteredUsers.length === 0) {
          return {
            ...state,
            renderedUsers: "No filters"
          }
        }

        return {
          ...state,
          renderedUsers: filteredUsers,
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