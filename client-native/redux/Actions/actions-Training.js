import axios from 'axios'

export const WEEK_PLAN = "WEEK_PLAN";
// lean 192.168.1.109:3001
export const getAllWeekPlan = () => async (dispatch) => {
  let id = '27279e5a-25b5-4e99-9784-7a9e3faf0a46'
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