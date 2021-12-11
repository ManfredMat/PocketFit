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
            reviews: action.payload
        }
        case ASCDES_REVIEWS:
                let sortArray = action.payload === 'ascendent'?
                state.reviews.sort(function(a, b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(a.name < b.name){
                        return -1;
                    }
                    return 0;
                }):
                state.reviews.sort(function(a, b){
                    if(a.name < b.name){
                        return 1;
                    }
                    if(a.name > b.name){
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
                e.reviews?.includes(action.payload))              
                return {
                    ...state,
                    reviews: reviewsFiltered,
                }
               
        default:
            return state;
    }
};

export default reviewsReducer;