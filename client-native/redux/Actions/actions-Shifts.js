import axios from 'axios'


export const ALL_SHIFTS = "ALL_SHIFTS";
export const GET_BY_ID = 'GET_BY_ID';
export const DELETE_SHIFTS = 'DELETE_SHIFTS'


export const getAllShifts = (day, month, year) => {
  const query = {
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day)
  }
    return async function(dispatch) {
    try {
      const res = await axios.get('http://192.168.1.109:3001/api/shift/all', { params:query })
      dispatch({
        type: ALL_SHIFTS,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}


export const getShiftId = (id) => {
    return async function(dispatch) {
    try {
      const res = await axios.get(`http://192.168.1.109:3001/api/shift/${id}`)
      dispatch({
        type: GET_BY_ID,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteShiftId = (id) => {
    return{
      type: DELETE_SHIFTS,
      payload: id
    }
}
