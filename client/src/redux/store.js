import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer/index";

//para usar las devs
import thunk from "redux-thunk";


//compose para las devs
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;
