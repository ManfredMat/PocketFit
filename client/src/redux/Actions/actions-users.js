import axios from "axios";

export const GET_USERS = "GET_USERS";
export const SEARCH_USERS = "SEARCH_USERS";
export const RENDER_USER_DETAIL = "RENDER_USER_DETAIL";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const SORT = "SORT";
export const FILTER = "FILTER";

// const date = (() => {
//     const newDate = new Date();
//     const format = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getUTCDate()}`;
//     return format;
// })();

export function getUsers() {
    return async function (dispatch) {
        await axios.get(REACT_APP_API + "/api/users", { withCredentials: true })
            .then((users) => {
                dispatch({
                    type: GET_USERS,
                    payload: users.data
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

export function renderUserDetail(bolean) {
    return {
        type: RENDER_USER_DETAIL,
        payload: bolean
    }
};

export function getUserDetail(id) {
    if (id === "CLEAR") {
        return {
            type: GET_USER_DETAIL,
            payload: id
        }
    }
    return async function (dispatch) {
        await axios.get(REACT_APP_API + `/api/users/${id}`)
            .then(user => {
                dispatch({
                    type: GET_USER_DETAIL,
                    payload: user.data
                })
            })
    }
};

export function sorter(order) {
    return {
        type: SORT,
        payload: order
    }
};

export function filtered(filter) {
    // if (filter === "PAGO" || filter === "NO-PAGO") {
    //     return async function (dispatch) {
    //         await axios.get(REACT_APP_API + "/api/users/paystatus/all", date)
    //         .then(users => {
    //             dispatch({
    //                 type: FILTER,
    //                 payload: users.data,
    //                 filter: filter
    //             })
    //         })
    //     }
    // }

    return {
        type: FILTER,
        payload: filter
    }
};