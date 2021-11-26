import { GET_USER, GET_USERS, DELETE_USERS } from "../action.js/actionTypes";

const initialState = {
    users: ["Joaquin"],
    user: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case GET_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            } 

        case DELETE_USERS: 
            return {
                ...state,
                users: []
            }

        default:
            return state;

    }

}

export default reducer;

