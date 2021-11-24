import { GET_USERS, GET_USER, DELETE_USERS } from "./actionTypes";

export const getUsers = () => {

    return {type: GET_USERS};

}

export const getUser = (name) => {

    return {type: GET_USER, payload: name};

}

export const deleteUsers = () => {

    return {type: DELETE_USERS}

} 