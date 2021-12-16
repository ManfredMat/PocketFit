import axios from "axios";
import IP from "../../components/Ips";

export const GET_GENERAL_ROUTINE = "GET_GENERAL_ROUTINE";

export const getGeneralRoutine = () => async (dispatch) => {
    try {
        const res = await axios.get(`https://pocketfithenry.herokuapp.com/api/weekplan/general`)
        dispatch({
            type: GET_GENERAL_ROUTINE,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}