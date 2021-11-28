//ACTIONS NAMES
import axios from 'axios'

export const PLANTILLA = "PLANTILLA";
export const LOG_IN = 'LOG_IN'


  
  export function prueba (prueba) {
    return {
      type: PLANTILLA,
      value: prueba,
    };
  }

  export function LogIn(payload) {
    return async function(dispatch) {
        await axios.post('http://localhost:3001/api/login', payload)
        .then(res => {
          dispatch({
            type: LOG_IN,
            payload: res.data
          })
        });
    }
}