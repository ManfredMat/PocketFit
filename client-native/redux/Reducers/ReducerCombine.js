import { combineReducers } from "redux";
import reducerPlantilla from "./Reducer-Plantilla.js";
import reducerUser from "./ReducerUser.js";
import reducerTraining from "./ReducerTraining.js";

const rootReducer = combineReducers({
    reducerPlantilla,
    reducerUser,
    reducerTraining
})

export default rootReducer