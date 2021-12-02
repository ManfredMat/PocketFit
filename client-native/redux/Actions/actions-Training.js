import axios from 'axios'

export const WEEK_PLAN = "WEEK_PLAN";
// lean 192.168.1.109:3001
export const getAllWeekPlan = () => async (dispatch) => {
  let id = '139ff590-8850-4451-a270-890181b8f161'
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