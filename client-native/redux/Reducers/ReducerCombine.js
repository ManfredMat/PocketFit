import { combineReducers } from "redux";
import reducerPlantilla from "./Reducer-Plantilla.js";
import reducerUser from "./ReducerUser.js";

const rootReducer = combineReducers({
    reducerPlantilla,
    reducerUser
})

export default rootReducer