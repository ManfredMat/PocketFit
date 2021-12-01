import axios from 'axios'

export const WEEK_PLAN = "WEEK_PLAN";
// lean 192.168.1.109:3001
export const getAllWeekPlan = () => async (dispatch) => {
  try {
    const res = await axios.get('http://192.168.1.109:3001/api/weekplan/c4b6b320-054e-417c-bffe-aa85905407ba')
    dispatch({
      type: WEEK_PLAN,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}