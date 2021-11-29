import {combineReducers} from "redux"
import reducerPlantilla from "./Reducer-Plantilla.js"
import ReducerUsers from "./ReducerUsers.js"

const rootReducer = combineReducers({
    state: reducerPlantilla,
    users: ReducerUsers
})

export default rootReducer