import axios from 'axios'
import IP from '../../components/Ips'
import Training from '../../components/Training/Training';
export const WEEK_PLAN = "WEEK_PLAN";
export const TRAINING_STATS = 'TRAINING_STATS'
// lean 192.168.1.109:3001
export const getAllWeekPlan = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://${IP}:3001/api/weekplan/general`)
    dispatch({
      type: WEEK_PLAN,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}
export const trainingStats = (payload) => async(dispatch) =>{
  try {
      dispatch({
        type: TRAINING_STATS,
        payload: payload
      })
  } catch (error) {
    console.log(error)
  }
}