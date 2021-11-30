import axios from "axios";

export const GET_USERS = "GET_USERS"

export function getUsers() {
    return async function (dispatch) {
        await axios.get("http://localhost:3001/api/users", {withCredentials: true})
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
}