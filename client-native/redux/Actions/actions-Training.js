import axios from 'axios'

export const WEEK_PLAN = "WEEK_PLAN";
// lean 192.168.1.109:3001
export const getAllWeekPlan = () => async (dispatch) => {
  let id = '9ed6cbfb-ad88-4eda-9839-75b2ecfabbcf' 
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