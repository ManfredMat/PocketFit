import axios from 'axios'
REACT_APP_API 
//ACTIONS NAMES
export const LOG_IN = 'LOG_IN'
export const GET_ADMIN = "GET_ADMIN"

export function LogIn(user) {
  return async function (dispatch) {
    await axios.post(`${REACT_APP_API}/api/login`, user, { withCredentials: true , headers:{"Content-Type":'application/json'}} )
      .then(res => {
        dispatch({
          type: LOG_IN,
          payload: res.data
        })
      });
  }
};

export function getAdmin(id) {
  return async function (dispatch) {
    await axios.get(`${REACT_APP_API}/api/users/${id}`)
    .then(res => {
      dispatch({
        type: GET_ADMIN,
        payload: res.data
      })
    })
  }
};