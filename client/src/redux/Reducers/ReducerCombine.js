import {combineReducers} from "redux"
import reducerPlantilla from "./Reducer-Plantilla.js"
import ReducerUsers from "./ReducerUsers.js"
import reducerHorario from "./ReducerHorarios.js"

const rootReducer = combineReducers({
    state: reducerPlantilla,
    users: ReducerUsers,
    timetable: reducerHorario
})

export default rootReducer