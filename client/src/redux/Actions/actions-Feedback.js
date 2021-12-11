import axios from "axios";

export const GET_REVIEWS = 'GET_REVIEWS';

export function getReviews(){
    return async function(dispatch){
            let reviews = await axios.get("http://localhost:3001/api/reviews/all")
            return dispatch({
                type: GET_REVIEWS,
                payload: reviews.data
            })
}
}