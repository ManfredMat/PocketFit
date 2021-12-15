import { combineReducers } from "redux";
import reducerPlantilla from "./Reducer-Plantilla.js";
import reducerUser from "./ReducerUser.js";
import reducerTraining from "./ReducerTraining.js";
import reducerShifts from "./Reducer-Shifts.js";
import reducerEvents from "./Reducer-Events.js";
import reducerRoutine from "./Reducer-Routine.js";

const rootReducer = combineReducers({
    reducerPlantilla,
    reducerUser,
    reducerTraining,
    reducerShifts,
    reducerEvents,
    reducerRoutine,
})

export default rootReducer