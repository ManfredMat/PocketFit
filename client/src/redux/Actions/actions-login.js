import axios from 'axios'

//ACTIONS NAMES
export const LOG_IN = 'LOG_IN'

export function LogIn(payload) {
  return async function(dispatch) {
      await axios.post('http://localhost:3001/api/login', payload, {withCredentials: true})
      .then(res => {
        dispatch({
          type: LOG_IN,
          payload: res.data
        })
      });
  }
}