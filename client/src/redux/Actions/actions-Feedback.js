import axios from "axios";

export const GET_REVIEWS = 'GET_REVIEWS';
export const FILTER_REVIEWS = 'FILTER_REVIEWS';
export const ASCDES_REVIEWS = 'ASCDES_REVIEWS'

export function getReviews(){
    return async function(dispatch){
            let reviews = await axios.get("http://localhost:3001/api/reviews/all")
            return dispatch({
                type: GET_REVIEWS,
                payload: reviews.data
            })
}
}

export function orderAscDes(payload){
    return{
        type: ASCDES_REVIEWS,
        payload
    }
}

export function filterReviews(payload){
    return{
        type: FILTER_REVIEWS,
        payload
    }
}