import axios from 'axios'

export const WEEK_PLAN = "WEEK_PLAN";
// lean 192.168.1.109:3001
export const getAllWeekPlan = () => async (dispatch) => {
  try {
    const res = await axios.get('http://192.168.1.109:3001/api/weekplan/e0fc4d86-6b27-4f33-b844-7591b66670e1')
    dispatch({
      type: WEEK_PLAN,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}