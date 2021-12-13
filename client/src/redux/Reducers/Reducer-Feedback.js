import { GET_REVIEWS, ASCDES_REVIEWS, FILTER_REVIEWS } from "../Actions/actions-Feedback";

const initialState={
    reviews:[],
    allReviews:[]
}

function reviewsReducer(state = initialState, action){
    switch(action.type){
        case GET_REVIEWS: 
        return{
            ...state,
            reviews: action.payload,
            allReviews: action.payload
        }
        case ASCDES_REVIEWS:
                let sortArray = action.payload === 'ascendent'?
                state.allReviews.sort(function(a, b){
                    if(a.value > b.value){
                        return 1;
                    }
                    if(a.value < b.value){
                        return -1;
                    }
                    return 0;
                }):
                state.allReviews.sort(function(a, b){
                    if(a.value < b.value){
                        return 1;
                    }
                    if(a.value > b.value){
                        return -1;
                    }
                    return 0;
    
                })
                return {
                    ...state,
                    reviews: sortArray
                }
        case FILTER_REVIEWS:
                const allreviews = state.allReviews
                const reviewsFiltered = 
                action.payload === 'All' ? allreviews
                : allreviews.filter((e)=>
                e.value === parseInt(action.payload))             
                return {
                    ...state,
                    reviews: reviewsFiltered,
                }
               
        default:
            return state;
    }
};

export default reviewsReducer;