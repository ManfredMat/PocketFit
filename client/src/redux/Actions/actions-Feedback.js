import axios from "axios";

const { REACT_APP_API} = process.env;

export const GET_REVIEWS = 'GET_REVIEWS';
export const FILTER_REVIEWS = 'FILTER_REVIEWS';
export const ASCDES_REVIEWS = 'ASCDES_REVIEWS'

export function getReviews(){
    return async function(dispatch){
            await axios.get(REACT_APP_API + "/api/reviews/all")
            .then((reviews) => {
                dispatch({
                    type: GET_REVIEWS,
                    payload : reviews.data
                })
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