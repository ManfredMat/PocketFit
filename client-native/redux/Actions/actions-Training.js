import axios from 'axios'

export const WEEK_PLAN = "WEEK_PLAN";
// lean 192.168.1.109:3001
export const getAllWeekPlan = () => async (dispatch) => {
  let id = 'bd180252-2cc2-4db1-a5ef-b2531711aef3' 
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