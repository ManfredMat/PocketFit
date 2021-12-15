import axios from "axios";
import IP from "../../components/Ips";

export const GET_EVENTS = "GET_EVENTS";

export const getEvents = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://${IP}:3001/api/events/all`)
        dispatch({
            type: GET_EVENTS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

