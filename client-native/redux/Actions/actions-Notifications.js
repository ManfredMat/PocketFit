import axios from "axios";
import IP from '../../components/Ips'
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS'

export const AllNotifications = () => async (dispatch) => {
    const res = await axios(`https://pocketfithenry.herokuapp.com/api/notification/all`)
    dispatch({
        type: GET_NOTIFICATIONS,
        payload: res.data
    })
}