import axios from 'axios'

export const WEEK_PLAN = "WEEK_PLAN";
// lean 192.168.1.109:3001
export const getAllWeekPlan = () => async (dispatch) => {
  let id = '2cb9c6ea-9358-4d5c-9459-f9c95e0e6727' 
  try {
    const res = await axios.get(`http://192.168.1.109:3001/api/weekplan/${id}`)
    dispatch({
      type: WEEK_PLAN,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}