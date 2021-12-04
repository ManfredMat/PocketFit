import axios from 'axios'


export const ALL_SHIFTS = "ALL_SHIFTS";
   
export const getAllShifts = (day, month, year) => {
  const query = {
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day)
  }
    return async function(dispatch) {
    try {
      const res = await axios.get('http://192.168.1.109:3001/api/shift/all', { params:query })
      console.log(res)
      dispatch({
        type: ALL_SHIFTS,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
