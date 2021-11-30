import axios from 'axios'
// lean 192.168.1.109:3001
export const EXERCISE = "EXERCISE";
  
export function getAllExercises() {
  return async function(dispatch) {
      await axios.get('http://192.168.1.109:3001/api/exercises/')
      .then(data => {
        dispatch({
          type: EXERCISE,
          payload: data
        })
      });
  }
}