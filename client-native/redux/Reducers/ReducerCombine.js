import { combineReducers } from "redux";
import reducerPlantilla from "./Reducer-Plantilla.js";
import reducerUser from "./ReducerUser.js";
import reducerTraining from "./ReducerTraining.js";
import reducerShifts from "./Reducer-Shifts.js";
import reducerNotifications from './Reducer-Notifications'
const rootReducer = combineReducers({
    reducerPlantilla,
    reducerUser,
    reducerTraining,
    reducerShifts,
    reducerNotifications
})

export default rootReducer