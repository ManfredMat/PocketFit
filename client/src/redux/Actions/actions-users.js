import axios from "axios";

export const GET_USERS = "GET_USERS";
export const SEARCH_USERS = "SEARCH_USERS";

export function getUsers() {
    return async function (dispatch) {
        await axios.get("/api/users", {withCredentials: true})
        .then((users) => {
            dispatch({
                type: GET_USERS,
                payload : users.data
            })
        })
        // .catch((error) => {
        //     console.log(error)
        // })
    }
};

export function searchUsers(search) {
    return {
        type: SEARCH_USERS,
        payload: search
    }
};