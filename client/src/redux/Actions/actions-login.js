import axios from 'axios'

//ACTIONS NAMES
export const LOG_IN = 'LOG_IN'
export const GET_ADMIN = "GET_ADMIN"

export function LogIn(user) {
  return async function (dispatch) {
    await axios.post('http://localhost:3001/api/login', user, { withCredentials: true })
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
    await axios.get(`http://localhost:3001/api/users/${id}`)
    .then(res => {
      dispatch({
        type: GET_ADMIN,
        payload: res.data
      })
    })
  }
};