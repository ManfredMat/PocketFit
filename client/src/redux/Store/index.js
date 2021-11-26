import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/ReducerCombine";
import thunk from "redux-thunk";


//compose para las devs
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;
