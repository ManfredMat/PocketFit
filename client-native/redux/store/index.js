import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/ReducerCombine";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;